export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  category: 'web' | 'mobile' | 'ml' | 'other';
}

export const projects: Project[] = [
  {
    id: 'fundora-ai-startup',
    title: 'Fundora – AI Startup Analysis',
    description: 'Full-stack AI platform for analyzing startup data with conversational AI chatbot',
    longDescription: 'Designed and developed the full UI/UX from scratch, creating an intuitive interface for AI-driven startup analysis. Built and integrated a conversational AI chatbot into the backend infrastructure, enabling users to interact with startup data in natural language. Engineered structured data pipelines for TensorFlow/PyTorch model inputs, improving model efficiency and overall system performance.',
    image: '/projects/fundora.jpg',
    tags: ['Django', 'TensorFlow', 'PyTorch', 'Tailwind CSS', 'AI/ML'],
    link: 'https://fundora.example.com',
    github: 'https://github.com/Aipse-bot/fundora-ai',
    category: 'web',
  },
  {
    id: 'ml-data-analysis-pipeline',
    title: 'Machine Learning & Data Analysis Pipeline',
    description: 'Hands-on ML project with data ingestion, transformation, and predictive analysis',
    longDescription: 'Completed hands-on ML coursework and applied learned concepts by building models for pattern recognition and predictive analysis on structured datasets. Developed a backend-focused tool for ingesting and analyzing large datasets from multiple disparate sources. Generated meaningful reporting outputs and data-driven visualizations from transformed raw data. Applied machine learning models using TensorFlow/PyTorch to surface patterns and insights.',
    image: '/projects/ml-pipeline.jpg',
    tags: ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch'],
    link: 'https://github.com/Aipse-bot/ml-pipeline',
    github: 'https://github.com/Aipse-bot/ml-pipeline',
    category: 'ml',
  },
  {
    id: 'studyhive-platform',
    title: 'StudyHive Educational Platform',
    description: 'Backend-driven educational platform with automated data pipelines',
    longDescription: 'Architected backend database interactions and automated data pipelines using the Django framework. Optimized database schema migrations to maintain data integrity across complex relational tables. Focused on building robust backend services for handling educational content and user data.',
    image: '/projects/studyhive.jpg',
    tags: ['Python', 'Django', 'SQL', 'Database Design'],
    link: 'https://github.com/Aipse-bot/studyhive',
    github: 'https://github.com/Aipse-bot/studyhive',
    category: 'web',
  },
  {
    id: 'cybersecurity-analysis',
    title: 'Cybersecurity Log Analysis & Digital Forensics',
    description: 'Advanced log analysis and security event investigation tool',
    longDescription: 'Analyzed structured datasets, including PowerShell logs and network traffic, to investigate and document simulated cyberattacks. Traced data flows to identify system vulnerabilities and understand complex security events. Developed technical proficiency in digital forensics and security threat analysis.',
    image: '/projects/cybersecurity.jpg',
    tags: ['Security', 'Log Analysis', 'Forensics', 'PowerShell'],
    link: 'https://github.com/Aipse-bot/cybersecurity-analysis',
    github: 'https://github.com/Aipse-bot/cybersecurity-analysis',
    category: 'other',
  },
  {
    id: 'casino-royale',
    title: 'Casino Royale',
    description: 'Object-oriented game application showcasing advanced programming principles',
    longDescription: 'Designed a dynamic application utilizing advanced Object-Oriented Programming (OOP) principles. Produced highly readable, well-documented code with a focus on efficient structural organization. Demonstrates strong fundamentals in Java and software design patterns.',
    image: '/projects/casino.jpg',
    tags: ['Java', 'OOP', 'Game Development'],
    link: 'https://github.com/Aipse-bot/casino-royale',
    github: 'https://github.com/Aipse-bot/casino-royale',
    category: 'other',
  },
];

export const categories = ['web', 'mobile', 'ml', 'other'] as const;
