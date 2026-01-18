import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { ArrowRight, Code, Box, Zap } from 'lucide-react';

const projects = [
    {
        id: "PROJECT 1",
        title: "In progress",
        description: "Strategisch platform voor de bovenkant van de markt. Focus op luxe beleving en conversie van high-end leads.",
        status: "Building",
        progress: 85,
        tags: ["Development", "React", "Next.js"],
        image: "https://images.unsplash.com/photo-1590011532834-2939f976dc50?auto=format&fit=crop&q=80&w=2000",
        link: "/oplossingen/hoveniers"
    },
    {
        id: "PROJECT 2",
        title: "In progress",
        description: "Corporate identity en lead generation voor de energietransitie. Technische implementatie van calculators en flows.",
        status: "Building",
        progress: 45,
        tags: ["Branding", "System Design"],
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000",
        link: "/oplossingen/installateurs"
    },
    {
        id: "PROJECT 3",
        title: "In progress",
        description: "Portfolio showcase systeem. Minimalistische esthetiek met maximale focus op beeldmateriaal en detail.",
        status: "Building",
        progress: 15,
        tags: ["UX Research", "Wireframing"],
        image: "https://images.unsplash.com/photo-1536376074432-8d2a3d7f3fb0?auto=format&fit=crop&q=80&w=2000",
        link: "/oplossingen/interieurbouw"
    }
];

const ProjectsScrollSection = () => {
    return (
        <section style={{ width: '100%', position: 'relative', paddingTop: '10rem' }}>
            {/* Section Header - Outside stack for stability, but pushed down by section padding */}
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto -5rem auto', padding: '0 1rem' }}>
                <h2 className="section-title">Onze cases</h2>
            </div>

            <ScrollStack
                useWindowScroll={true}
                itemStackDistance={40}
                itemScale={0.07}
                stackPosition="12vh"
                itemDistance={300}
                blurAmount={0}
            >
                {projects.map((project, index) => (
                    <ScrollStackItem key={index}>
                        <div className="wip-project-card">
                            <div className="wip-grid-overlay"></div>

                            <div className="wip-content">
                                <div className="wip-info">
                                    <div>
                                        <div className="wip-header">

                                            <div className="wip-status-badge">
                                                STATUS: {project.status.toUpperCase()}
                                            </div>
                                        </div>

                                        <h3 className="wip-title">{project.title}</h3>
                                        <p className="wip-description">{project.description}</p>
                                    </div>

                                    <div className="wip-action-area">
                                        <div className="wip-progress-container">
                                            <div className="wip-progress-label">
                                                <span>COMPLETION</span>
                                                <span>{project.progress}%</span>
                                            </div>
                                            <div className="wip-progress-bar">
                                                <div
                                                    className="wip-progress-fill"
                                                    style={{ width: `${project.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div style={{ marginTop: '2rem' }}>
                                            <div className="wip-btn">
                                                Bekijk
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="wip-visual">
                                    <div className="wip-image-overlay"></div>
                                    <img src={project.image} alt={project.title} className="wip-image" />
                                </div>
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </section>
    );
};

export default ProjectsScrollSection;
