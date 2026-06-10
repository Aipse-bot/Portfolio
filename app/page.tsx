"use client"; // Required for framer-motion in Next.js App Router

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

// Reusable animation variants
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariant}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-6 tracking-wide border border-blue-200/50">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Kent Virgil Espia
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVariant}
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer and AI enthusiast. I build end-to-end applications — from intuitive user experiences to scalable backend services and machine learning integrations.
          </motion.p>

          <motion.div 
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/projects" 
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto border-2 border-slate-200 text-slate-600 px-8 py-3.5 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 bg-white"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-24 border-y border-slate-200/50">
        <motion.div 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl font-bold mb-12 text-center tracking-tight text-slate-900">
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeUpVariant}>
                {/* Note: Make sure your ProjectCard has hover:scale or group-hover effects inside it! */}
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUpVariant} className="text-center mt-14">
            <Link href="/projects" className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors">
              View All Projects 
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-4xl font-bold mb-6 tracking-tight text-slate-900">About Me</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                I'm a full-stack developer and AI enthusiast with experience in training and integrating ML models, 
                building data pipelines, and developing production-ready systems. I'm driven to create software that is 
                not only functional but intelligent.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                My expertise spans JavaScript, Python, Java, React, Next.js, and Node.js. I specialize in building 
                end-to-end applications from beautiful UI/UX designs to scalable backend infrastructure.
              </p>
              <Link href="/about" className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Learn More About Me 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>

            {/* Replaced standard emoji block with an animated mockup representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl h-80 flex items-center justify-center shadow-2xl shadow-indigo-500/20 border border-white/10 relative overflow-hidden"
            >
              {/* Optional: Add a subtle code pattern or leave as a sleek gradient */}
              <div className="absolute inset-0 bg-[url('/path-to-noise-texture.png')] opacity-20 mix-blend-overlay"></div>
              <div className="text-white text-7xl relative z-10 drop-shadow-lg">👨‍💻</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 -z-20"></div>
        {/* Dynamic background element for the CTA */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 blur-[100px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let's Work Together</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Have a project in mind or looking to integrate AI into your workflow? I'd love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
      
    </div>
  );
}