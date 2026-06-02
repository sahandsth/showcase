import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";


export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}