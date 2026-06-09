import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Hi! I'm Kent Virgil Espia, a highly motivated Computer Science student specializing in data analysis, backend logic, and high-performance software development. 
                I have strong expertise in building scalable data pipelines, analyzing complex datasets, and developing robust backend services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Currently pursuing my degree at Cebu Institute of Technology - University (2022-2026), I've completed internships at Ollopa Corp. 
                and built diverse projects including AI-powered startup analysis platforms, advanced ML pipelines, and cybersecurity analysis tools.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I'm passionate about leveraging AI-assisted development tools responsibly, maintaining rigorous standards for code quality, 
                and continuously expanding my technical expertise in emerging technologies like machine learning and cloud computing.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg h-64 flex items-center justify-center sticky top-24">
              <div className="text-white text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ React & Next.js</li>
                <li>✓ JavaScript</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ HTML5 & CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Python & Django</li>
                <li>✓ Node.js</li>
                <li>✓ Java</li>
                <li>✓ SQL & Databases</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Data & ML</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Pandas & NumPy</li>
                <li>✓ TensorFlow & PyTorch</li>
                <li>✓ Data Pipelines</li>
                <li>✓ Log Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Other</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Git & GitHub</li>
                <li>✓ AWS & API Integration</li>
                <li>✓ Technical Documentation</li>
                <li>✓ Agile Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Software Development Intern</h3>
              <p className="text-gray-600 mb-2">Ollopa Corp. | May 2025 - July 2025</p>
              <p className="text-gray-600">
                Gained hands-on experience in full-stack software development, working with modern web technologies and backend systems.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">BS Computer Science</h3>
              <p className="text-gray-600 mb-2">Cebu Institute of Technology - University | 2022 - 2026</p>
              <p className="text-gray-600">
                Pursuing degree with focus on data analysis, backend development, and AI/ML technologies. Built diverse projects showcasing full-stack development capabilities.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Project Developer</h3>
              <p className="text-gray-600 mb-2">Self-Directed | Ongoing</p>
              <p className="text-gray-600">
                Developed multiple full-stack applications including Fundora AI platform, ML data pipelines, cybersecurity analysis tools, and educational platforms.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg mb-6">
            I'm always interested in hearing about new opportunities and projects.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get in Touch
            </Link>
            <a
              href="/cv/resume.pdf"
              download
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
