import Link from "next/link";

export default function Projects() {
    return (
        <section
            id="projects"
            className="max-w-7xl mx-auto px-6 py-32"
        >
            <div className="mb-16">
        <span className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
          Portfolio
        </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Featured Projects
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                <Link
                    href="/projects/luisant"
                    className="group border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition"
                >
                    <h3 className="text-3xl font-semibold mb-4">
                        Luisant
                    </h3>

                    <p className="text-zinc-400 leading-relaxed mb-8">
                        Corporate multilingual website developed with Laravel,
                        featuring English, French and Arabic support.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 border border-zinc-700 rounded-full text-sm">
              Laravel
            </span>

                        <span className="px-3 py-1 border border-zinc-700 rounded-full text-sm">
              Blade
            </span>

                        <span className="px-3 py-1 border border-zinc-700 rounded-full text-sm">
              MySQL
            </span>
                    </div>

                    <span className="inline-flex items-center gap-2">
            Open Showcase
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </span>
                </Link>

                <Link
                    href="/projects/form"
                    className="group border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition"
                >
                    <h3 className="text-3xl font-semibold mb-4">
                        Form
                    </h3>

                    <p className="text-zinc-400 leading-relaxed mb-8">
                        Portfolio and content showcase project focused on visual
                        presentation and media production.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 border border-zinc-700 rounded-full text-sm">
              Editing
            </span>

                        <span className="px-3 py-1 border border-zinc-700 rounded-full text-sm">
              Motion Design
            </span>
                    </div>

                    <span className="inline-flex items-center gap-2">
            Open Showcase
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </span>
                </Link>

            </div>
        </section>
    );
}