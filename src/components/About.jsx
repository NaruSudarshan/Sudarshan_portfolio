export default function About() {
  return (
    <section id="about" className="py-16 max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 items-center reveal stagger-animation">
        {/* Photo Column - with more negative left margin */}
        <div className="md:col-span-1 flex justify-center md:justify-start md:-ml-16">
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-indigo-200 dark:border-cyan-800">
            <img 
              src="src/assets/my_pic.jpg"
              alt="Naru Sudarshan Reddy" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Content Column */}
        <div className="md:col-span-2 space-y-6 text-gray-600 dark:text-gray-400 text-center md:text-left">
          <h2 className="section-title mb-8 md:mb-4">About</h2>
          <p className="text-lg font-light leading-relaxed">
            Currently pursuing B.Tech in Computer Science at VIT-AP with a CGPA of 8.85. My journey in tech started with a fascination for building things that make a difference.
          </p>
          <p className="text-lg font-light leading-relaxed">
            Passionate about web development and cloud computing, I specialize in creating responsive, user-centric applications using modern technologies. My experience with the MERN stack and AWS has equipped me with a solid foundation in both frontend and backend development.
          </p>
          <p className="text-lg font-light leading-relaxed">
            I'm constantly learning and exploring new technologies, with a particular interest in cloud architecture and scalable systems. Currently seeking opportunities to contribute innovative solutions as a SWE intern.
          </p>
        </div>
      </div>
    </section>
  );
}
