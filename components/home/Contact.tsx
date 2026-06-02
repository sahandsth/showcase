export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">

            <div className="mb-16 text-center">
                <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
                    Contact
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Let’s Work Together
                </h2>

                <p className="text-zinc-400 mt-6">
                    I’m available for frontend and full-stack opportunities.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Email / Direct */}
                <div className="p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-4">
                        Get in touch
                    </h3>

                    <p className="text-zinc-400 mb-6 leading-relaxed">
                        The fastest way to reach me is via email. I usually respond within 24 hours.
                    </p>

                    <a
                        href="mailto:sahandsotoudeh99@gmail.com"
                        className="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
                    >
                        Send Email
                    </a>
                </div>

                {/* Socials */}
                <div className="p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-xl font-semibold mb-4">
                        Social Links
                    </h3>

                    <div className="space-y-4 text-zinc-400">

                        <a
                            href="https://github.com/sahandsth"
                            target="_blank"
                            className="block hover:text-white transition"
                        >
                            GitHub →
                        </a>

                        <a
                            href="https://linkedin.com/in/sahandsth"
                            target="_blank"
                            className="block hover:text-white transition"
                        >
                            LinkedIn →
                        </a>

                        <a
                            href="/cv/SahandSetoudeh-CV.pdf"
                            className="block hover:text-white transition"
                        >
                            Resume Download →
                        </a>

                    </div>
                </div>

            </div>

        </section>
    );
}