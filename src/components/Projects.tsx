import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'RQA',
    description: 'A research document analyzer that checks the quality of academic papers and reports. It examines grammar, readability, potential plagiarism, and content accuracy, then gives an overall quality score with suggestions for improvement.',
    image: `${import.meta.env.BASE_URL}assets/images/rqa.jpg`,
    tags: ['FastAPI', 'Python', 'React', 'TypeScript', 'Groq', 'Claude', 'PyPDF2', 'NLP', 'Async', 'REST API'],
    github: '',
    date: '2025'
  },
  {
    title: 'NL2SQL',
    description: 'A tool that lets you ask questions about your data in plain English, and it automatically searches the database for answers. No need to know technical database languages—just ask naturally like you\'re talking to a person.',
    image: `${import.meta.env.BASE_URL}assets/images/nl2sql.jpg`,
    tags: ['FastAPI', 'Python', 'React', 'MySQL', 'spaCy', 'Groq', 'LLaMA 3', 'Material-UI', 'Vite', 'NLP'],
    github: '',
    date: '2025'
  },
  {
    title: 'Business Intelligence',
    description: 'A smart business analysis tool that helps companies understand vendors, industry trends, and market insights. It automatically generates detailed reports with charts and data, and can export them as PDFs for presentations.',
    image: `${import.meta.env.BASE_URL}assets/images/business-ai.jpg`,
    tags: ['React', 'Node.js', 'MySQL', 'Groq', 'OpenAI', 'Gemini', 'PDF Export', 'LLM', 'Business Intelligence'],
    github: '',
    date: '2025'
  },
  {
    title: 'REPA',
    description: 'A reputation management tool that collects and analyzes Google Maps reviews for businesses. It shows whether reviews are positive or negative, tracks trends over time, and suggests professional responses to customer feedback.',
    image: `${import.meta.env.BASE_URL}assets/images/repa.jpg`,
    tags: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Puppeteer', 'Sentiment', 'Natural', 'LLM', 'Caching', 'Analytics'],
    github: '',
    date: '2025'
  },
  {
    title: 'Multi-Portal News Scraping System',
    description: 'A news collection tool that gathers articles from multiple news websites, removes duplicates, and organizes them in one place. It can summarize articles and identify important people mentioned in the news.',
    image: `${import.meta.env.BASE_URL}assets/images/news-scraper.jpg`,
    tags: ['React', 'Vite', 'Node.js', 'Express', 'Python', 'BeautifulSoup', 'Selenium', 'MySQL', 'WebDriver Manager', 'LLM'],
    github: '',
    date: '2025'
  },
  {
    title: 'Question & Answer Generation App',
    description: 'An app that automatically creates questions and answers on any topic you provide. You can speak your topic using voice input, and the app will generate relevant Q&As instantly for studying or teaching.',
    image: `${import.meta.env.BASE_URL}assets/images/qa-app.jpg`,
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Ollama API', 'Web Speech API', 'Axios', 'Web Vitals'],
    github: '',
    date: '2025'
  },
  {
    title: 'Vendor Book Application',
    description: 'A vendor management system where businesses can store vendor information, upload documents, track performance, and generate professional reports. Helps companies maintain organized records of all their suppliers.',
    image: `${import.meta.env.BASE_URL}assets/images/vendor-book.jpg`,
    tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'Multer', 'PDFKit', 'Groq LLM', 'CORS'],
    github: '',
    date: '2025'
  },
  {
    title: 'COMPA ',
    description: 'A competitor tracking tool that monitors how many followers your competitors have on social media platforms like Facebook, Instagram, and LinkedIn. It collects this data regularly so you can see how your competition is growing.',
    image: `${import.meta.env.BASE_URL}assets/images/compa.jpg`,
    tags: ['Node.js', 'Express', 'MySQL', 'Selenium', 'ChromeDriver', 'dotenv', 'cors', 'LLM Ready'],
    github: '',
    date: '2025'
  },
  {
    title: 'IPL Match Prediction System',
    description: 'A cricket match prediction app that analyzes team performance and statistics to predict the outcome of IPL matches. Users can see which team is likely to win based on historical data.',
    image: `${import.meta.env.BASE_URL}assets/images/ipl-prediction.jpg`,
    tags: ['Python', 'Django', 'MySQL', 'Machine Learning', 'Random Forest', 'Decision Tree'],
    github: 'https://github.com/Silence963',
    date: '2024'
  },
  {
    title: 'Project Management System',
    description: 'A tool that helps teams organize their work by tracking projects, assigning tasks to team members, and monitoring progress. Everyone can see what needs to be done and collaborate effectively.',
    image: `${import.meta.env.BASE_URL}assets/images/project-management.jpg`,
    tags: ['PHP', 'HTML', 'MySQL', 'Project Management'],
    github: 'https://github.com/Silence963',
    date: '2020'
  },
  {
    title: 'S N College Mobile Application',
    description: 'A mobile app for college students to access campus information, news, resources, and important updates all in one place. Makes it easy to stay connected with college activities.',
    image: `${import.meta.env.BASE_URL}assets/images/college-app.jpg`,
    tags: ['Android Studio', 'Eclipse', 'Java', 'Mobile Development'],
    github: 'https://github.com/Silence963',
    date: '2019'
  },
  {
    title: 'URL Shortener ',
    description: 'An app that turns long website links into short, easy-to-share links. Users can create an account, save their shortened links, search through them, and edit or delete them anytime.',
    image: `${import.meta.env.BASE_URL}assets/images/url-shortener.jpg`,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Sessions'],
    github: 'https://github.com/Silence963',
    date: '2024'
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


