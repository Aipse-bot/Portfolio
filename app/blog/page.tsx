import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-nextjs',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the fundamentals of Next.js 14 and how to build modern web applications.',
    date: '2024-01-15',
    category: 'Next.js',
  },
  {
    id: 'react-hooks-guide',
    title: 'React Hooks: A Comprehensive Guide',
    excerpt: 'Deep dive into React Hooks and how to use them effectively in your applications.',
    date: '2024-01-10',
    category: 'React',
  },
  {
    id: 'typescript-tips',
    title: 'TypeScript Tips & Tricks',
    excerpt: 'Useful TypeScript patterns and techniques to write better code.',
    date: '2024-01-05',
    category: 'TypeScript',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Thoughts on web development, technology, and everything in between.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <time className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-2xl font-bold mb-3 hover:text-blue-600">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
