export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28">

            <div className="max-w-4xl text-center">

                <p className="text-xs sm:text-sm tracking-[0.3em] text-zinc-500 mb-6">
                    FRONTEND DEVELOPER
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                    Sahand Setoudeh
                </h1>

                <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                    Building modern web applications with Next.js, React and Laravel.
                    Focused on performance, clean UI, and scalable systems.
                </p>

                {/* buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">

                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="/cv/SahandSetoudeh-CV.pdf"
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                    >
                        Download CV
                    </a>

                </div>

                <p className="mt-12 text-xs text-zinc-600">
                    Scroll down
                </p>

            </div>
        </section>
    );
}