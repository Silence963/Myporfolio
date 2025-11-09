import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'URL Shortener Application',
    description: 'A user-friendly URL shortener with robust user management and data handling. Features include user signup/authentication, URL management, search functionality, and secure editing/deleting of URLs.',
    image: `${import.meta.env.BASE_URL}assets/images/url-shortener.jpg`,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Sessions'],
    github: 'https://github.com/Silence963',
    date: '2024'
  },
  {
    title: 'BusinessAI Platform',
    description: 'AI-powered business intelligence web app (React + Node.js + MySQL) that generates Vendor Analysis, Industry Reports, and Trends Analysis. Integrates Groq, OpenAI, and Gemini LLMs with dynamic API key management, caching, structured JSON reports, and PDF export. Features vendor verification, auto-loading categories by city, trend extraction, multi-business profiling, and executive-style formatting. Built for fast, data-driven decision support with extensible architecture and professional UX.',
    image: `${import.meta.env.BASE_URL}assets/images/business-ai.jpg`,
    tags: ['React', 'Node.js', 'MySQL', 'Groq', 'OpenAI', 'Gemini', 'PDF Export', 'LLM', 'Business Intelligence'],
    github: '',
    date: '2025'
  },
  {
    title: 'IPL Match Prediction System',
    description: 'Machine learning web application for predicting IPL Cricket match outcomes using Random Forest, Decision Tree, and Linear Regression algorithms. Built with Django backend and MySQL database.',
    image: `${import.meta.env.BASE_URL}assets/images/ipl-prediction.jpg`,
    tags: ['Python', 'Django', 'MySQL', 'Machine Learning', 'Random Forest', 'Decision Tree'],
    github: 'https://github.com/Silence963',
    date: '2024'
  },
  {
    title: 'Project Management System',
    description: 'Comprehensive software solution for managing projects developed as a final degree project. Enables efficient project tracking, task management, and team collaboration.',
    image: `${import.meta.env.BASE_URL}assets/images/project-management.jpg`,
    tags: ['PHP', 'HTML', 'MySQL', 'Project Management'],
    github: 'https://github.com/Silence963',
    date: '2020'
  },
  {
    title: 'S N College Mobile Application',
    description: 'Mobile application developed as part of the ASAP (Additional Skill Acquisition Program). Provides students with easy access to college information, resources, and updates.',
    image: `${import.meta.env.BASE_URL}assets/images/college-app.jpg`,
    tags: ['Android Studio', 'Eclipse', 'Java', 'Mobile Development'],
    github: 'https://github.com/Silence963',
    date: '2019'
  },
    {
      title: 'Question & Answer Generation App',
      description: 'A full-stack Q&A generation platform with React frontend and Node.js/Express backend. Features automatic question/answer generation via Ollama LLM API, voice recognition for hands-free topic input, and real-time updates with 5-second polling. RESTful APIs handle question generation, storage, and retrieval. Performance monitoring is enabled using Web Vitals.',
      image: `${import.meta.env.BASE_URL}assets/images/qa-app.jpg`,
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'Ollama API', 'Web Speech API', 'Axios', 'Web Vitals'],
      github: '',
      date: '2025'
    },
    {
      title: 'Multi-Portal News Scraping System',
      description: 'Full-stack news aggregation platform with React admin dashboard to manage source URLs and trigger on-demand scrapes. Collects articles from multiple portals (e.g., Times of India Bangalore), deduplicates and filters content, stores structured data in MySQL, and offers optional AI-powered summarization, entity extraction, and classification for community leader identification and in-app notifications.',
      image: `${import.meta.env.BASE_URL}assets/images/news-scraper.jpg`,
      tags: ['React', 'Vite', 'Node.js', 'Express', 'Python', 'BeautifulSoup', 'Selenium', 'MySQL', 'WebDriver Manager', 'LLM'],
      github: '',
      date: '2025'
    },
    {
      title: 'Vendor Book Application',
      description: 'Full-stack vendor management platform with React.js frontend and Node.js/Express backend. Features secure file upload, PDF report generation with PDFKit, and AI-powered business insights via Groq LLM. Supports vendor onboarding, analytics, and profile management. Implements authentication, CORS, and comprehensive testing.',
      image: `${import.meta.env.BASE_URL}assets/images/vendor-book.jpg`,
      tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'Multer', 'PDFKit', 'Groq LLM', 'CORS'],
      github: '',
      date: '2025'
    },
      {
        title: 'COMPA ',
        description: 'Backend service that tracks competitor social media audience growth by scraping follower counts (Facebook, Instagram, LinkedIn) and storing normalized metrics in MySQL. Provides REST endpoints for competitor management, follower aggregation, resilient scraping (K/M parsing, retries, timing controls), and is prepared for optional multi-LLM integration via configurable environment keys.',
        image: `${import.meta.env.BASE_URL}assets/images/compa.jpg`,
        tags: ['Node.js', 'Express', 'MySQL', 'Selenium', 'ChromeDriver', 'dotenv', 'cors', 'LLM Ready'],
        github: '',
        date: '2025'
      },
      {
        title: 'REPA',
        description: 'Intelligent reputation management platform that scrapes Google Maps reviews, caches historical data, performs sentiment & temporal trend analysis, and generates AI-driven summaries and response suggestions. Supports multi-LLM providers (OpenAI, Gemini, Groq, DeepSeek) with fallback logic, robust timestamp parsing, cache-first indicators, and secure, scalable Node.js + MySQL + Puppeteer architecture.',
        image: `${import.meta.env.BASE_URL}assets/images/repa.jpg`,
        tags: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Puppeteer', 'Sentiment', 'Natural', 'LLM', 'Caching', 'Analytics'],
        github: '',
        date: '2025'
      },
      {
        title: 'NL2SQL',
        description: 'AI-powered web app that converts natural language questions into SQL queries using Groq\'s LLaMA 3 model, enabling non-technical users to query databases effortlessly. Features smart table detection with spaCy NLP and fuzzy matching, interactive query execution with formatted results, saved searches, AI-generated example libraries, and multi-context support for different users, firms, and departments.',
        image: `${import.meta.env.BASE_URL}assets/images/nl2sql.jpg`,
        tags: ['FastAPI', 'Python', 'React', 'MySQL', 'spaCy', 'Groq', 'LLaMA 3', 'Material-UI', 'Vite', 'NLP'],
        github: '',
        date: '2025'
      },
      {
        title: 'RQA',
        description: 'Intelligent PDF analysis tool that evaluates research documents across multiple quality dimensions using AI-powered checks and deterministic analysis. Features content quality assessment, legal compliance, RAG optimization, hallucination/bias detection, plagiarism screening, grammar/readability analysis, and an overall readiness score (0-10) with actionable suggestions. Built with FastAPI, Groq API (Claude Sonnet 4.5), PyPDF2, language_tool_python, and React TypeScript frontend. Includes API key rotation, async processing, and real-time monitoring.',
        image: `${import.meta.env.BASE_URL}assets/images/rqa.jpg`,
        tags: ['FastAPI', 'Python', 'React', 'TypeScript', 'Groq', 'Claude', 'PyPDF2', 'NLP', 'Async', 'REST API'],
        github: '',
        date: '2025'
      },
]

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-orbitron text-center mb-12"
        >
          My <span className="text-neon-blue">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card h-full overflow-hidden flex flex-col">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback in case image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x400/020617/93c5fd?text=${project.title.split(' ').join('+')}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-orbitron">{project.title}</h3>
                    <span className="text-sm text-neon-blue flex-shrink-0 ml-2 text-right">{project.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


