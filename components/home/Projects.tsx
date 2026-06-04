import Link from 'next/link';
import styles from './Projects.module.css';

const projects = [
    {
        slug: 'form',
        title: 'Form Café & Gym Menu',
        description:
            'A modern digital menu system designed for cafés and gyms. Focused on smooth UX, fast navigation, and clean presentation of items.',
        tech: ['Next.js', 'TypeScript', 'CSS Modules'],
        role: 'Full Stack',
    },
    {
        slug: 'Luisant',
        title: 'Luisant Showcase Website',
        description:
            'A multilingual product showcase website for Luisant with structured content, responsive design, and clean UI.',
        tech: ['Laravel', 'Blade', 'MySQL', 'PHP'],
        role: 'Backend + Frontend',
    },
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>Projects</span>
                    <h2>Selected Work</h2>
                    <p>
                        A few real-world projects I’ve built focusing on usability, performance, and clean architecture.
                        These are demo versions and not fully completed projects.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.topBar}>
                                <span className={styles.role}>
                                    {project.role}
                                </span>
                            </div>

                            <div className={styles.content}>
                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className={styles.tech}>
                                    {project.tech.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.footer}>
                                View Demo →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}