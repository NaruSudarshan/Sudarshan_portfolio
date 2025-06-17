import React from 'react';

function Education() {
  return (
    <section id="education" className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="section-title mb-8">Education</h2>
      <div className="space-y-8 text-left">
        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-cyan-300 mb-1">VIT-AP University</h3>
          <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 text-base">
            <span>B. Tech in Computer Science</span>
            <span className="font-medium">Current CGPA: 8.85</span>
            <span>Amravati, Andhra Pradesh</span>
            <span>Expected Graduation: May 2026</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-cyan-300 mb-1">Narayana College</h3>
          <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 text-base">
            <span>II PUC</span>
            <span className="font-medium">Percentage: 91.1</span>
            <span>Bengaluru, Karnataka</span>
            <span>Year of Graduation: 2022</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-cyan-300 mb-1">Narayana E-Techno School</h3>
          <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 text-base">
            <span>10th Grade (CBSE)</span>
            <span>2020</span>
            <span className="font-medium">Percentage: 89%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education; 