import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 mt-32">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Sahand Setoudeh
                        </h3>

                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Frontend / Full Stack Developer focused on building
                            modern web applications with Next.js and Laravel.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
                            Links
                        </h4>

                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li>
                                <a href="#projects" className="hover:text-white transition">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#skills" className="hover:text-white transition">
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a href="#about" className="hover:text-white transition">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
                            Contact
                        </h4>

                        <div className="space-y-3 text-sm text-zinc-400">
                            <p>Muscat, Oman</p>

                            <a
                                href="mailto:sahandsotoudeh99@gmail.com"
                                className="block hover:text-white transition"
                            >
                                Email Me
                            </a>

                            <a
                                href="https://github.com/sahandsth"
                                target="_blank"
                                className="block hover:text-white transition"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                className="block hover:text-white transition"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">

                    <p>
                        © {new Date().getFullYear()} Sahand Setoudeh. All rights reserved.
                    </p>

                    <p>
                        Built with Next.js & Tailwind CSS
                    </p>

                </div>

            </div>
        </footer>
    );
}