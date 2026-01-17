import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI } from '../lib/ai';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Klaar voor een digitale fundering die net zo sterk is als uw eigen werk?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        const aiResponseText = await sendMessageToAI(inputValue, messages);

        setIsLoading(false);
        const aiMessage = { role: 'model', text: aiResponseText };
        setMessages(prev => [...prev, aiMessage]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handlePredefinedResponse = (text) => {
        // setInputValue(text); // Removed to prevent text appearing in input field
        // Optional: immediately send
        // handleSendMessage(); 
        // But better to let user review/send or just fill input. 
        // Let's autofill and focus for now, or we could just "send" it as if user typed it.
        // Let's behave as if the user clicked a "Quick Reply"
        const userMessage = { role: 'user', text };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        sendMessageToAI(text, messages).then(aiResponseText => {
            setIsLoading(false);
            setMessages(prev => [...prev, { role: 'model', text: aiResponseText }]);
        });
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999, // Ensure it is above other elements
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '1rem',
            fontFamily: 'var(--font-body)',
        }}>
            {isOpen && (
                <div style={{
                    background: 'white',
                    width: '350px',
                    height: '500px',
                    borderRadius: '1rem',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    {/* Header */}
                    <div style={{
                        background: 'var(--color-hard)',
                        color: 'white',
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 'var(--font-weight-heavy)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>HardReturn Assistant</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'transparent', color: 'white', cursor: 'pointer', fontSize: '1.25rem' }}
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div style={{
                        flex: 1,
                        padding: '1rem',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        background: '#f8fafc'
                    }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '0.75rem 1rem',
                                borderRadius: msg.role === 'user' ? '1rem 1rem 0 1rem' : '1rem 1rem 1rem 0',
                                background: msg.role === 'user' ? 'var(--color-return)' : 'white',
                                color: msg.role === 'user' ? 'white' : 'var(--color-text)',
                                boxShadow: msg.role === 'model' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                border: msg.role === 'model' ? '1px solid #e2e8f0' : 'none',
                                fontSize: '0.9rem',
                                lineHeight: '1.5'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{
                                alignSelf: 'flex-start',
                                background: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '1rem 1rem 1rem 0',
                                color: '#64748b',
                                fontSize: '0.8rem',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                minHeight: '36px',
                                width: 'fit-content'
                            }}>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions (only if only 1 message from AI) */}
                    {messages.length === 1 && messages[0].role === 'model' && (
                        <div style={{ padding: '0 1rem 0.5rem 1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <button onClick={() => handlePredefinedResponse("Ja, graag")} style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #cbd5e1', borderRadius: '2rem', fontSize: '0.8rem', cursor: 'pointer', color: 'var(--color-hard)' }}>Ja, graag</button>
                            <button onClick={() => setIsOpen(false)} style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #cbd5e1', borderRadius: '2rem', fontSize: '0.8rem', cursor: 'pointer', color: 'var(--color-hard)' }}>Nee, kijk rond</button>
                        </div>
                    )}

                    {/* Input Area */}
                    <div style={{
                        padding: '1rem',
                        background: 'white',
                        borderTop: '1px solid #e2e8f0',
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type uw bericht..."
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #cbd5e1',
                                outline: 'none',
                                fontSize: '0.9rem'
                            }}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading || !inputValue.trim()}
                            style={{
                                background: 'var(--color-hard)',
                                color: 'white',
                                border: 'none',
                                padding: '0 1rem',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                opacity: isLoading || !inputValue.trim() ? 0.5 : 1
                            }}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}

            {/* Chat Trigger Button */}
            {!isOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                    {/* Chat Bubble Mockup (Teaser) - only show if chat never opened? Or maybe just keep it as a prompt. 
                        Let's hide it if chat is closed but maybe show a tooltip? 
                        The original design had a bubble above the button. Let's keep a small bubble.
                    */}
                    <div style={{
                        background: 'white',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem 1rem 0 1rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        maxWidth: '200px',
                        fontSize: '0.85rem',
                        border: '1px solid #e2e8f0',
                        marginBottom: '0',
                        cursor: 'pointer'
                    }} onClick={() => setIsOpen(true)}>
                        <span style={{ fontWeight: 'var(--font-weight-heavy)', color: 'var(--color-hard)' }}>Hulp nodig?</span> Chat met ons!
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'var(--color-hard)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
                            border: '2px solid var(--color-return)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        💬
                    </button>
                </div>
            )}
        </div>
    );
};

export default AIChatbot;
