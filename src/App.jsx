import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact'; // To be removed
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'education', name: 'Education' },
  { id: 'certifications', name: 'Certs' },
  // { id: 'contact', name: 'Contact' }, // To be removed
];

function FloatingNav() {
  // Removed active state
  // const [active, setActive] = useState(sections[0].id);

  // Removed useEffect for scroll handling
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // ... previous handleScroll logic ...
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [active]);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; 
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`floating-nav-link`} // Removed active class conditional
          onClick={() => handleNavClick(section.id)}
        >
          {section.name}
        </button>
      ))}
    </nav>
  );
}

export default function App() {
  useEffect(() => {
    // Prevent browser from restoring scroll position on refresh
    history.scrollRestoration = 'manual';

    // Add page load animation (opacity transition)
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease-in';
      document.body.style.opacity = '1';
    }, 100);

    // Ensure scroll to top happens AFTER opacity transition AND other content renders
    setTimeout(() => {
      console.log('Attempting to scroll to top at:', new Date().toLocaleTimeString());
      window.location.hash = ''; // Clear any URL hash
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }, 2000); // Increased delay to 2 seconds for robust rendering

    // Existing reveal effect
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-black dark:text-white">
      {/* Animated background layer */}
      <div className="fixed inset-0 -z-10">
        <div className="app-bg-blobs w-full h-full" />
      </div>
      <Navbar />
      <FloatingNav />
      <div className="space-y-16">
        <Hero />
        <section id="about" className="min-h-screen py-16 max-w-4xl mx-auto px-4"><About /></section>
        <section id="skills" className="min-h-screen py-16 max-w-4xl mx-auto px-4"><Skills /></section>
        <section id="projects" className="min-h-screen py-16 max-w-4xl mx-auto px-4"><Projects /></section>
        <section id="education" className="min-h-screen py-16 max-w-4xl mx-auto px-4"><Education /></section>
        <section id="certifications" className="min-h-screen py-16 max-w-4xl mx-auto px-4"><Certifications /></section>
      </div>
      <Footer />
    </div>
  );
}

