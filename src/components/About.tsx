import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`}
                  alt="Akhil A R"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-neon-blue rounded-lg animate-float" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-neon-purple rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-orbitron mb-6"
            >
              About <span className="text-neon-blue">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              I'm a Full Stack MERN Developer specializing in AI-powered web applications, with a Master's in <b>Computer 
              Applications</b> from Jain University, Bangalore (2024) and <b> B.Sc in Physics With Computer Application </b> from Kerala University (2020). My expertise 
              lies at the intersection of modern web development, artificial intelligence, and data-driven solutions, 
              creating intelligent applications that solve real-world business challenges.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              <b>Currently working as Intern Software Developer at Myblocks, Ernakulam</b> (joined June 2025), where I contribute to innovative software solutions and collaborate with a dynamic team to deliver impactful products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              Through hands-on experience from my internship at Myblocks and numerous projects, I've developed 
              comprehensive expertise in building enterprise-grade applications. My work spans AI-powered business 
              intelligence platforms integrating multiple LLMs (OpenAI, Gemini, Groq, Claude), intelligent data 
              processing systems with NLP and sentiment analysis, and scalable full-stack solutions handling real-time 
              data processing and complex user workflows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              I specialize in architecting robust backend systems (Node.js, Express, FastAPI) integrated with modern 
              frontends (React, TypeScript), implementing AI/ML solutions for document analysis, natural language 
              processing, and business intelligence. My projects demonstrate proficiency in building secure authentication 
              systems, RESTful APIs, database optimization (MySQL, MongoDB), and integrating cutting-edge AI technologies 
              including RAG systems, multi-LLM orchestration, and automated content generation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-300 mb-8"
            >
              As a Certified Ethical Hacker (EC-Council), I bring a security-first mindset to development, ensuring 
              applications are not only feature-rich but also secure and compliant. My experience includes building 
              production-ready systems with features like JWT authentication, data encryption, input validation, and 
              secure API design—creating solutions that are scalable, maintainable, and enterprise-ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href={`${import.meta.env.BASE_URL}assets/resume/Resume_Akhil_merged.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-card px-6 py-3 text-neon-blue hover:bg-neon-blue/10 transition-colors"
              >
                <Download size={20} />
                View Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 