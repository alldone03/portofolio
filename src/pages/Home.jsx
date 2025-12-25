import { Helmet } from "react-helmet-async";
import AOSWrapper from "../components/AOSWrapper";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import IntellectualProperty from "../components/sections/IntellectualProperty";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import { PROFILE_DATA } from "../utils/constants";

export default function Home() {
    return (
        <AOSWrapper>
            <div className="min-h-screen bg-base-100 font-sans text-base-content selection:bg-primary selection:text-white transition-colors duration-300">
                <Helmet>
                    <title>{PROFILE_DATA.name} | {PROFILE_DATA.role}</title>
                    <meta name="description" content={PROFILE_DATA.description} />
                </Helmet>

                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <IntellectualProperty />
                    <Certifications />
                    <Contact />
                </main>

                <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                    <nav className="grid grid-flow-col gap-4">
                        <a href="#about" className="link link-hover">About</a>
                        <a href="#skills" className="link link-hover">Skills</a>
                        <a href="#projects" className="link link-hover">Projects</a>
                        <a href="#ip" className="link link-hover">IP / HAKI</a>
                        <a href="#certifications" className="link link-hover">Certifications</a>
                        <a href="#contact" className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            {PROFILE_DATA.socials.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                    <img src={social.icon} alt={social.name} className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </nav>
                    <aside>
                        <p className="text-sm opacity-60">Copyright © {new Date().getFullYear()} - All rights reserved by {PROFILE_DATA.name}</p>
                    </aside>
                </footer>
            </div>
        </AOSWrapper>
    );
}
