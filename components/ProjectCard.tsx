import Link from 'next/link';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-48 flex items-center justify-center">
        <div className="text-white text-4xl">📱</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={`/projects/${project.id}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition text-center">
            View Details
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition text-center">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
