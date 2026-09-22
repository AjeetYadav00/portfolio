import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  Layers3,
  Mail,
  Server,
  Terminal,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'My Timeline', href: '#timeline' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutFeatures = [
  {
    title: 'Frontend',
    description: 'Creating responsive, accessible and modern user interfaces.',
    icon: Code2,
  },
  {
    title: 'Backend',
    description: 'Building APIs, server-side applications and database-driven systems.',
    icon: Server,
  },
  {
    title: 'Problem Solving',
    description: 'Learning continuously and solving real-world development problems.',
    icon: BrainCircuit,
  },
]

export const skills = [
  {
    title: 'Frontend Development',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Programming',
    icon: Terminal,
    items: ['Java', 'C', 'JavaScript', 'OOP'],
  },
  {
    title: 'Database Management',
    icon: Database,
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Technologies',
    icon: Layers3,
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Core Computer Science',
    icon: Globe,
    items: ['DBMS', 'Operating Systems', 'Data Structures', 'OOP'],
  },
]

export const projects = [
  {
    title: 'SmartKisan',
    description:
      'SmartKisan is a farmer support platform designed to provide useful agricultural information through a simple and user-friendly web interface.',
    features: [
      'Farmer-focused interface',
      'Weather information',
      'Mandi prices',
      'Government schemes',
      'Agricultural articles',
      'Expert support',
      'Responsive design',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/',
    accent: 'from-emerald-400 via-teal-500 to-cyan-500',
  },
  {
    title: 'Spotify Clone',
    description:
      'A responsive music streaming interface inspired by modern music platforms, created to practice frontend development, responsive layouts and interactive UI components.',
    features: [],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/',
    accent: 'from-violet-500 via-indigo-500 to-blue-500',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A modern responsive portfolio website showcasing my skills, projects, education and developer profile.',
    features: [],
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/',
    accent: 'from-sky-500 via-blue-500 to-indigo-500',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: BriefcaseBusiness },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajeet-yadav-15a385358',
    icon: BriefcaseBusiness,
  },
  { label: 'Email', href: 'mailto:ajeetyadav50647@gmail.com', icon: Mail },
]
