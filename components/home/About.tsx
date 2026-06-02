export default function About() {
    return (
        <section id="about" className="py-32 px-6 max-w-6xl mx-auto">

            <div className="mb-16">
                <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
                    About Me
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Who I Am
                </h2>
            </div>

            <div className="space-y-8 text-zinc-300 leading-relaxed text-lg">

                <p>
                    Frontend-focused Developer with 4+ years of experience building
                    responsive web applications, admin dashboards, and full-stack
                    business systems using <span className="text-white">Next.js</span>,
                    <span className="text-white"> React</span>,
                    <span className="text-white"> Laravel</span>, and
                    <span className="text-white"> MySQL</span>.
                </p>

                <p>
                    I specialize in translating UI/UX designs into scalable interfaces,
                    integrating REST APIs, and building production-ready systems such as
                    management platforms, e-commerce tools, and internal business dashboards.
                </p>

                <p>
                    My experience includes working in agencies, teaching web development,
                    and building real-world applications like asset tracking systems,
                    multilingual websites, and admin panels with role-based access control.
                </p>

                <p>
                    Currently based in Muscat, Oman and open to opportunities in
                    frontend and full-stack development roles.
                </p>

            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">

                <div className="p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                    <p className="text-zinc-400">
                        React, Next.js, JavaScript, HTML, CSS, Blade
                    </p>
                </div>

                <div className="p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-3">Backend</h3>
                    <p className="text-zinc-400">
                        Laravel, PHP, REST APIs, MySQL
                    </p>
                </div>

                <div className="p-6 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-3">Tools</h3>
                    <p className="text-zinc-400">
                        Git, Figma, Photoshop, DaVinci Resolve
                    </p>
                </div>

            </div>

        </section>
    );
}