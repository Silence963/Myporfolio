import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'RQA: Enterprise RAG Document Analyzer',
    description: 'An enterprise-grade Retrieval-Augmented Generation (RAG) pipeline designed for precise analysis of technical and research documents. Implements Semantic Chunking and Vector Search (Qdrant/Pinecone) to retrieve exact context before generation, ensuring hallucination-free answers grounded in source text. Features asynchronous processing for large PDF uploads, citation-backed compliance scoring, and deterministic document quality assessment.',
    image: `${import.meta.env.BASE_URL}assets/images/rqa.jpg`,
    tags: ['Python', 'FastAPI', 'React', 'LangChain', 'Claude 3', 'Vector DB', 'RAG', 'Async'],
    github: '',
    date: '2025'
  },
  {
    title: 'Autonomous Natural Language to SQL Agent',
    description: 'A secure database interface that eliminates technical barriers between business questions and SQL execution. Built on LangChain, this agent utilizes schema-aware prompting to understand table relationships and foreign keys automatically. Features a self-correcting feedback loop where execution errors trigger automatic query regeneration, achieving 95% accuracy on complex multi-table joins with strict read-only permissions and input validation.',
    image: `${import.meta.env.BASE_URL}assets/images/nl2sql.jpg`,
    tags: ['FastAPI', 'Python', 'React', 'LangChain', 'Groq', 'LLaMA 3', 'MySQL', 'Agent'],
    github: '',
    date: '2025'
  },
  {
    title: 'Multi-LLM Business Intelligence Copilot',
    description: 'An advanced decision-support system that democratizes data analytics for non-technical stakeholders. Features Multi-LLM Orchestration layer routing simple queries to high-speed models (Groq) and complex reasoning to GPT-4, optimizing cost and latency. Aggregates unstructured vendor data, generates real-time visualization charts, and automates comprehensive PDF strategy reports without human intervention. Powers data-driven decision making at scale.',
    image: `${import.meta.env.BASE_URL}assets/images/business-ai.jpg`,
    tags: ['React', 'Node.js', 'OpenAI', 'Gemini', 'Groq', 'MySQL', 'Multi-LLM', 'Orchestration'],
    github: '',
    date: '2025'
  },
  {
    title: 'REPA: Reputation Intelligence & Sentiment Engine',
    description: 'A resilient market intelligence platform engineered to monitor brand perception across digital channels (Google Maps, Review Portals). Features robust ingestion pipeline with automated CAPTCHA handling and IP rotation to bypass anti-bot defenses. Processes feedback using multi-stage NLP Sentiment Analysis workflow to classify customer trends and automatically drafts context-aware, professional responses using Generative AI, reducing reputation management efforts by 70%.',
    image: `${import.meta.env.BASE_URL}assets/images/repa.jpg`,
    tags: ['Node.js', 'Puppeteer', 'Sentiment', 'Natural NLP', 'MySQL', 'Generative AI', 'Intelligence'],
    github: '',
    date: '2025'
  },
  {
    title: 'Automated Market Intelligence Agent',
    description: 'An autonomous information agent that scans and ingests data from diverse news sources to track market trends and VIP entities. Utilizes LangChain\'s Map-Reduce summarization chains to condense thousands of articles into concise daily executive briefs. Implements custom Entity Extraction (NER) pipelines to identify and tag key organizations and individuals, turning unstructured news noise into structured market data for competitive intelligence.',
    image: `${import.meta.env.BASE_URL}assets/images/news-scraper.jpg`,
    tags: ['Python', 'LangChain', 'BeautifulSoup', 'React', 'Summarization', 'NER', 'Agent', 'Intelligence'],
    github: '',
    date: '2025'
  },
  {
    title: 'Voice-Activated EdTech Generator',
    description: 'An interactive educational tool leveraging Local LLMs (Ollama) to generate instant study materials from voice commands. Integrates Web Speech API with custom Generative AI backend to convert spoken topics into structured quizzes and answers in real-time. Demonstrates low-latency inference on local hardware, prioritizing user privacy and offline accessibility for educational environments. Transforms verbal input into engaging interactive learning content.',
    image: `${import.meta.env.BASE_URL}assets/images/qa-app.jpg`,
    tags: ['React', 'Node.js', 'Ollama', 'Web Speech API', 'Local LLM', 'EdTech', 'Generative AI'],
    github: '',
    date: '2025'
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


