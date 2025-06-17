import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 px-0 transition-all duration-300 navbar-modern ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        <span className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm select-none logo-glow logo-shine-hover">
          NSR
        </span>
        <button
          onClick={() => setDark(d => !d)}
          className="ml-4 p-2 hover:bg-indigo-100 dark:hover:bg-cyan-950 rounded-full transition-colors btn-animated shadow"
          aria-label="Toggle dark mode"
        >
          {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
      {/* Animated gradient bar at the bottom of navbar */}
      <div className="h-1 w-full navbar-gradient-bar"></div>
    </nav>
  );
}