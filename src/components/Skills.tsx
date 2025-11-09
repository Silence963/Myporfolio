import { motion } from 'framer-motion'

const technicalSkills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'PHP', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Flask', 'FastAPI', 'LangChain', 'LangGraph', 'Node.js', 'Express.js', 'React (CRA, Vite)'],
  },
  {
    category: 'Frontend Technologies',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design'],
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js', 'Express.js', 'Django', 'PHP'],
  },
  {
    category: 'Databases & Vector Stores',
    items: ['SQL', 'Firebase (Basic)', 'Qdrant', 'Pinecone (Familiar)', 'JSON-based Data Stores', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Machine Learning & AI',
    items: ['Random Forest', 'Decision Tree', 'Linear Regression', 'ML Algorithms', 'Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'LangChain Agents', 'Model Context Protocol (MCP)', 'LLM Integration (OpenAI, Gemini, Groq)', 'Whisper ASR', 'HuggingFace Transformers', 'MediaPipe'],
  },
  {
    category: 'Speech & Multimodal Processing',
    items: ['Whisper (ASR)', 'Deepgram STT/TTS', 'Google TTS', 'ElevenLabs', 'Piper TTS', 'Gemini Vision', 'Tesseract OCR'],
  },
  {
    category: 'Data Analysis & Visualization',
    items: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Advanced Excel'],
  },
  {
    category: 'Development Tools',
    items: ['Git', 'Android Studio', 'Eclipse', 'VS Code', 'Cursor', 'Windsurf', 'Replit', 'GitHub Copilot', 'Bolt.new'],
  },
  {
    category: 'Authentication & Security',
    items: ['JWT', 'Sessions', 'Encryption', 'Cybersecurity Best Practices'],
  },
  {
    category: 'Other Skills',
    items: ['RESTful APIs', 'Version Control (Git)', 'Agile Development', 'Problem Solving'],
  },
]

const softSkills = [
  'Team Collaboration',
  'Quick Learner',
  'Problem-Solving',
  'Communication',
  'Adaptability',
  'Time Management',
  'Attention to Detail',
]

const certifications = [
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: 'Oct 2021 - Oct 2024',
    certNumber: 'ECC3041267895',
  },
]

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-orbitron text-center mb-12"
        >
          My <span className="text-neon-blue">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-orbitron mb-6 text-neon-blue">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-16"
        >
          <h3 className="text-2xl font-orbitron text-center mb-8 text-neon-blue">
            Soft Skills
          </h3>
          <div className="glass-card p-6 flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 text-md bg-dark/70 text-gray-200 rounded-full border border-neon-blue/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-orbitron text-center mb-8 text-neon-blue">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 text-center"
              >
                <h4 className="text-lg font-orbitron mb-2">{cert.name}</h4>
                <p className="text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
