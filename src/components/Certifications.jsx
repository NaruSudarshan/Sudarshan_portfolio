const certifications = [
  "MERN Full Stack - Ethnus (June–July 2024)",
  "AWS Cloud Foundations - AWS Academy Graduate",
  "AWS Cloud Architecting - AWS Academy Graduate",
  "DSA Course - LearnYard (Jan 2024)",
  "Web Dev - CSI Chapter VIT-AP (Sep 2022)",
];

export default function Certifications() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="section-title mb-8">Certifications</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {certifications.map((cert, i) => (
          <span key={i} className="cert-badge">
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
