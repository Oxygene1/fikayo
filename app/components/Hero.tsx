"use client";
import { ArrowDown, Linkedin, Mail, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fikayoHero from "../../public/fikayo.jpg";
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[var(--background)] pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="bg-gradient-to-br from-[var(--primary)] to-indigo-500 bg-clip-text text-transparent font-medium text-lg">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--primary-foreground)]">
                Fikayo Duke Famakinwa
              </h1>
              <p className="text-xl md:text-2xl text-[var(--secondary-foreground)]">
                Project Manager & Business Analyst
              </p>
            </div>

            <p className="text-lg text-[var(--secondary-foreground)] leading-relaxed">
              Transforming complex business challenges into streamlined
              solutions through strategic project management and data-driven
              insights.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className=" text-white px-8 py-3 rounded-lg bg-gradient-to-br from-[var(--primary)] to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </button>
              <div className="p-[2px] overflow-x-hidden rounded-lg bg-gradient-to-br from-[var(--primary)] to-indigo-500 ">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="border-gray-300 bg-[var(--background)] text-white h-fullw-full  
                    transition-all duration-300 px-5 py-3 rounded-md"
                >
                  View Projects
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary-foreground)] hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:fikayo@example.com"
                className="text-[var(--secondary-foreground)] hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary-foreground)] hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-indigo-500 rounded-3xl transform rotate-6"></div>
              <ImageWithFallback
                src={fikayoHero.src}
                alt="Fikayo Famakinwa"
                className="relative rounded-3xl w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
