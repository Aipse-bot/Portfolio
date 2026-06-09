import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-nextjs',
    title: 'Getting Started with Next.js 14',
    date: '2024-01-15',
    category: 'Next.js',
    content: `Getting Started with Next.js 14\n\nNext.js 14 is a powerful React framework that makes building production-ready web applications easier than ever.\n\nWhat is Next.js?\n\nNext.js is a production-grade React framework that provides a foundation for building any size of web applications. It handles the heavy lifting of configuration and optimization, allowing developers to focus on building great products.\n\nKey Features\n\n- Server Components: Built-in support for React Server Components\n- App Router: A new routing system for better organization\n- Image Optimization: Automatic image optimization for better performance\n- API Routes: Create API endpoints within your application\n- TypeScript Support: First-class TypeScript support\n- Deployment: One-click deployment to Vercel`,
  },
  {
    id: 'react-hooks-guide',
    title: 'React Hooks: A Comprehensive Guide',
    date: '2024-01-10',
    category: 'React',
    content: `React Hooks: A Comprehensive Guide\n\nReact Hooks revolutionized how we write React components by allowing us to use state and lifecycle features in functional components.\n\nWhat are Hooks?\n\nHooks are functions that let you "hook into" React features from functional components. They don't work inside classes – they let you use React without classes.\n\nCommon Hooks\n\nuseState: The useState hook lets you add state variables to your component.\nuseEffect: The useEffect hook lets you perform side effects in functional components.\nuseContext: The useContext hook lets you subscribe to React context.`,
  },
  {
    id: 'typescript-tips',
    title: 'TypeScript Tips & Tricks',
    date: '2024-01-05',
    category: 'TypeScript',
    content: `TypeScript Tips & Tricks\n\nTypeScript is a powerful tool for writing safer, more maintainable JavaScript. Here are some tips to level up your TypeScript game.\n\nTip 1: Use Strict Mode\n\nEnable strict mode in your tsconfig.json for better type safety.\n\nTip 2: Leverage Interfaces\n\nUse interfaces to define contracts for your code.\n\nTip 3: Use Union Types\n\nUnion types allow a value to be one of several types.\n\nTip 4: Generics\n\nGenerics allow you to write flexible, reusable code.\n\nTip 5: Utility Types\n\nTypeScript provides several utility types to manipulate types.`,
  },
];

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
