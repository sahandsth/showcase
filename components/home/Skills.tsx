export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">

            <div className="mb-16">
                <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
                    Skills
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Technologies I Work With
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {/* Frontend */}
                <div className="p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-6">
                        Frontend
                    </h3>

                    <ul className="space-y-3 text-zinc-300">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Blade (Laravel)</li>
                    </ul>
                </div>

                {/* Backend */}
                <div className="p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-6">
                        Backend
                    </h3>

                    <ul className="space-y-3 text-zinc-300">
                        <li>Laravel</li>
                        <li>PHP</li>
                        <li>REST APIs</li>
                        <li>MySQL</li>
                    </ul>
                </div>

                {/* Tools */}
                <div className="p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-6">
                        Tools & Others
                    </h3>

                    <ul className="space-y-3 text-zinc-300">
                        <li>Git / GitHub</li>
                        <li>Figma</li>
                        <li>Photoshop</li>
                        <li>DaVinci Resolve</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>

            </div>

        </section>
    );
}