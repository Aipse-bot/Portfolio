import { projects } from '@/lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/projects" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Projects
        </Link>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg h-80 flex items-center justify-center mb-12">
          <div className="text-white text-6xl">📱</div>
        </div>

        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Category</h3>
              <p className="text-gray-600 capitalize">{project.category}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Technologies</h3>
              <p className="text-gray-600">{project.tags.join(', ')}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Visit Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
