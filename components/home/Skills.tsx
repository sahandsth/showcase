import styles from './Skills.module.css';

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            'Next.js',
            'React',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
        ],
    },
    {
        title: 'Backend',
        skills: [
            'Laravel',
            'PHP',
            'REST APIs',
            'Authentication',
            'RBAC',
            'MySQL',
        ],
    },
    {
        title: 'Tools',
        skills: [
            'Git',
            'GitHub',
            'VS Code',
            'Postman',
            'Vercel',
            'Linux',
        ],
    },
    {
        title: 'Other',
        skills: [
            'UI/UX',
            'WordPress',
            'Elementor',
            'Responsive Design',
            'SEO Basics',
            'Video Editing',
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>Skills</span>
                    <h2>Technologies & Tools</h2>
                    <p>
                        Technologies and tools I use to build modern web
                        applications and digital experiences.
                    </p>
                </div>

                <div className={styles.grid}>
                    {skillGroups.map((group) => (
                        <div key={group.title} className={styles.card}>
                            <h3>{group.title}</h3>

                            <div className={styles.tags}>
                                {group.skills.map((skill) => (
                                    <span key={skill} className={styles.tag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}