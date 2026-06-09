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
                Full-Stack Developer and AI enthusiast with a strong foundation in web development, data engineering, and machine learning. 
                Proven ability to build end-to-end applications — from intuitive UI/UX designs to scalable backend services and AI-powered features.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Experienced in training and integrating ML models, building data pipelines, and developing production-ready systems. 
                Currently pursuing a Bachelor of Science in Computer Science at Cebu Institute of Technology - University (2022-2026).
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Driven to create software that is not only functional but intelligent. I specialize in full-stack development 
                with a focus on data engineering and AI/ML integration.
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
              <h3 className="text-xl font-semibold mb-4">Languages & Environments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ JavaScript & React</li>
                <li>✓ Python</li>
                <li>✓ Java</li>
                <li>✓ Next.js & Node.js</li>
                <li>✓ SQL, C, C++</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Data & Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Pandas & NumPy</li>
                <li>✓ TensorFlow & PyTorch</li>
                <li>✓ Data Pipelines</li>
                <li>✓ Log Analysis (EVTX, Firewall, Proxy)</li>
                <li>✓ Structured Reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Django & Django REST Framework</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Git & GitHub</li>
                <li>✓ AWS</li>
                <li>✓ Vercel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ API Integrations</li>
                <li>✓ Backend Services</li>
                <li>✓ Data Transformation</li>
                <li>✓ Technical Documentation</li>
                <li>✓ Full-Stack Development</li>
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

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Zuitt Certificate of Completion</h3>
              <p className="text-gray-600">JavaScript Elective Course</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Codechum Java Certificate</h3>
              <p className="text-gray-600">Java Programming</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Codechum C Certificate</h3>
              <p className="text-gray-600">C Programming Fundamentals</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Accenture Academy Certificate</h3>
              <p className="text-gray-600">AWS Curriculum Completion</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">TOPCIT Level 3 Certificate</h3>
              <p className="text-gray-600">Technology Professional Competency Certification</p>
            </div>
          </div>
        </section>
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
