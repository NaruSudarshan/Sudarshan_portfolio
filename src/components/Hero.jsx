import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NAME = "Naru Sudarshan Reddy";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent relative overflow-hidden">
      {/* Animated network grid background */}
      <div className="absolute inset-0 pointer-events-none hero-network-bg">
        <div className="network-grid"></div>
        <div className="data-point point-one"></div>
        <div className="data-point point-two"></div>
        <div className="data-point point-three"></div>
        <div className="data-point point-four"></div>
        <div className="data-point point-five"></div>
        <div className="data-point point-six"></div>
      </div>
      <div className="max-w-3xl mx-auto text-center z-10 stagger-animation">
        <h1 className="section-title mb-6 flex justify-center gap-1 name-crazy-reveal">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className={`crazy-letter`}
              style={{ animationDelay: `${i * 0.06 + 0.2}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 font-light tracking-wide">
          Aspiring SWE Intern • MERN Stack • AWS Cloud
        </p>
        <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/NaruSudarshan" target="_blank" rel="noreferrer" 
             className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 btn-animated">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noreferrer" 
             className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 btn-animated">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:narusudarshanreddy09@gmail.com" 
             className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors duration-300 hover:scale-110 btn-animated">
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}


/* Add this class to your main content container for the glass effect */