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
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment processing',
    longDescription: 'Built a complete e-commerce platform with React, Node.js, and MongoDB. Features include product filtering, cart management, secure payment processing with Stripe, and admin dashboard for inventory management.',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/yourusername/ecommerce-platform',
    category: 'web',
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description: 'Real-time collaborative task management application',
    longDescription: 'A task management app with real-time collaboration, built with Next.js and Firebase. Users can create, assign, and track tasks with real-time updates and notifications.',
    image: '/projects/task-manager.jpg',
    tags: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com/taskmanager',
    github: 'https://github.com/yourusername/task-manager',
    category: 'web',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasting with interactive maps',
    longDescription: 'A weather application that shows real-time weather data, forecasts, and interactive maps. Built with React and OpenWeather API.',
    image: '/projects/weather.jpg',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    link: 'https://example.com/weather',
    github: 'https://github.com/yourusername/weather-app',
    category: 'web',
  },
];

export const categories = ['web', 'mobile', 'ml', 'other'] as const;
