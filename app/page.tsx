import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate full-stack developer building beautiful and functional web applications. 
            Welcome to my portfolio showcasing my latest projects and expertise.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              View My Projects
            </Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-semibold">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-4">
                I'm a full-stack developer with 5+ years of experience building web applications. 
                I specialize in React, Next.js, Node.js, and cloud technologies.
              </p>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blogs, or exploring new technologies.
              </p>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More About Me →
              </Link>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg h-64 flex items-center justify-center">
              <div className="text-white text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8">
            Have a project in mind? I'd love to hear from you. Get in touch and let's create something amazing!
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
