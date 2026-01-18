import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
    children,
    className = '',
    itemDistance = 100,
    itemScale = 0.05,
    itemStackDistance = 40,
    stackPosition = '15%',
    useWindowScroll = false,
    onStackComplete
}) => {
    const scrollerRef = useRef(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef(null);
    const cardsRef = useRef([]);
    const cardOffsetsRef = useRef([]);
    const lastTransformsRef = useRef(new Map());
    const isUpdatingRef = useRef(false);

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight
            };
        } else {
            const scroller = scrollerRef.current;
            return {
                scrollTop: scroller ? scroller.scrollTop : 0,
                containerHeight: scroller ? scroller.clientHeight : 0
            };
        }
    }, [useWindowScroll]);

    const measureOffsets = useCallback(() => {
        const { scrollTop } = getScrollData();
        cardOffsetsRef.current = cardsRef.current.map(card => {
            if (!card) return 0;
            const rect = card.getBoundingClientRect();
            return rect.top + scrollTop;
        });

        const endElement = useWindowScroll
            ? document.querySelector('.scroll-stack-end')
            : (scrollerRef.current ? scrollerRef.current.querySelector('.scroll-stack-end') : null);

        if (endElement) {
            const rect = endElement.getBoundingClientRect();
            cardOffsetsRef.current.endElementTop = rect.top + scrollTop;
        }
    }, [useWindowScroll, getScrollData]);

    const calculateProgress = useCallback((scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }, []);

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const endElementTop = cardOffsetsRef.current.endElementTop || 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = cardOffsetsRef.current[i] || 0;
            const pinStart = cardTop - stackPositionPx - (itemStackDistance * i);
            const pinEnd = endElementTop - (containerHeight / 1.5);

            // CUMULATIVE SCALING LOGIC
            let cumulativeScaleShrink = 0;
            for (let j = i + 1; j < cardsRef.current.length; j++) {
                const successorTop = cardOffsetsRef.current[j];
                if (successorTop) {
                    const triggerStart = successorTop - containerHeight;
                    const triggerEnd = successorTop - stackPositionPx - (itemStackDistance * j);
                    const progress = calculateProgress(scrollTop, triggerStart, triggerEnd);
                    cumulativeScaleShrink += progress * itemScale;
                }
            }

            const currentScale = 1 - cumulativeScaleShrink;

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
            }

            const newTransform = {
                translateY: Math.round(translateY * 10) / 10,
                scale: Math.round(currentScale * 1000) / 1000
            };

            const lastTransform = lastTransformsRef.current.get(i);
            const hasChanged = !lastTransform ||
                Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
                Math.abs(lastTransform.scale - newTransform.scale) > 0.001;

            if (hasChanged) {
                card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
                lastTransformsRef.current.set(i, newTransform);
            }

            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        onStackComplete,
        calculateProgress,
        parsePercentage,
        getScrollData
    ]);

    // Use native scroll event with RAF for smooth updates
    const handleScroll = useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
            updateCardTransforms();
        });
    }, [updateCardTransforms]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller && !useWindowScroll) return;

        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll('.scroll-stack-card')
                : scroller.querySelectorAll('.scroll-stack-card')
        );

        cardsRef.current = cards;
        measureOffsets();

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = 'transform';
            card.style.transformOrigin = 'top center';
        });

        updateCardTransforms();

        const handleResize = () => {
            measureOffsets();
            updateCardTransforms();
        };

        // Use native scroll event instead of Lenis
        const scrollTarget = useWindowScroll ? window : scroller;
        scrollTarget?.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            scrollTarget?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            lastTransformsRef.current.clear();
        };
    }, [itemDistance, useWindowScroll, updateCardTransforms, measureOffsets, handleScroll]);

    return (
        <div className={`scroll-stack-scroller ${useWindowScroll ? 'window-scroll' : ''} ${className}`.trim()} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {children}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;

