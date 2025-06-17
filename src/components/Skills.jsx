const skillCategories = {
  "Development": ["React", "Node.js", "Express", "JavaScript", "Java"],
  "Database": ["MongoDB", "MySQL"],
  "Tools & Cloud": ["AWS", "Git", "Bootstrap"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-transparent">
      <div className="max-w-3xl mx-auto reveal stagger-animation">
        <h2 className="section-title">Skills</h2>
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-indigo-200 dark:border-cyan-800 rounded-full bg-white/60 dark:bg-black/40 font-medium shadow-sm hover:bg-indigo-50 dark:hover:bg-cyan-950 transition-colors duration-300 btn-animated"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
