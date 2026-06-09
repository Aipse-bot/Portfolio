import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </Link>
        <ul className="flex gap-8 items-center">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
