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
                Hi! I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                I specialize in modern JavaScript frameworks and technologies, with a focus on creating clean, 
                scalable, and user-friendly applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My journey in web development started with a curiosity about how websites work. Over the years, 
                I've honed my skills in React, Next.js, Node.js, and cloud technologies like AWS and Firebase.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, 
                or exploring new technologies. I'm always eager to learn and stay updated with the latest industry trends.
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
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ HTML5 & CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Node.js & Express</li>
                <li>✓ MongoDB & PostgreSQL</li>
                <li>✓ Firebase</li>
                <li>✓ REST APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Git & GitHub</li>
                <li>✓ Docker</li>
                <li>✓ AWS & Vercel</li>
                <li>✓ CI/CD</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Agile Methodologies</li>
                <li>✓ Web Performance</li>
                <li>✓ Testing & QA</li>
                <li>✓ Technical Writing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
              <p className="text-gray-600 mb-2">Tech Company Inc. | 2022 - Present</p>
              <p className="text-gray-600">
                Leading frontend development for multiple projects, mentoring junior developers, and implementing best practices.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-gray-600 mb-2">Startup Co. | 2020 - 2022</p>
              <p className="text-gray-600">
                Built and maintained full-stack web applications, managed databases, and optimized application performance.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p className="text-gray-600 mb-2">Web Solutions Ltd. | 2019 - 2020</p>
              <p className="text-gray-600">
                Started my professional journey, learning best practices and contributing to various web projects.
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
