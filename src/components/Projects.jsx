const projects = [
    {
        title: "Hotel Booking App",
        description:
            "Built for NGC Club to manage hotel reservations with real-time availability, user auth, and bookings.",
        tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "Project Management App",
        description:
            "Team project from MERN course with features for task scheduling, management, and team collaboration.",
        tech: ["React", "Bootstrap", "MongoDB"],
    },
    {
        title: "Eisenhower Matrix App",
        description:
            "Productivity app to organize tasks by urgency/importance. Supports local & cloud sync, dark mode.",
        tech: ["React", "OAuth", "Node.js", "MongoDB"],
        link: "https://github.com/NaruSudarshan/Eisenhower_Matrix",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto reveal stagger-animation">
                <h2 className="section-title">Selected Projects</h2>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group space-y-4 reveal btn-animated bg-white/70 dark:bg-black/40 border border-indigo-100 dark:border-cyan-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <h3 className="text-lg font-semibold text-indigo-700 dark:text-cyan-300 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 border border-indigo-200 dark:border-cyan-800 rounded-full bg-white/60 dark:bg-black/40 font-medium shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm underline-animated text-indigo-600 dark:text-cyan-300 font-medium mt-2"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
