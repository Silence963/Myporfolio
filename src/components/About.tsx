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
                  className="w-full h-full object-cover object-center scale-90"
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
              Hey, I’m Akhil—an AI Engineer and full-stack developer who loves turning messy, real-world problems into
              reliable, production-ready products. I blend web engineering with advanced AI (LLM orchestration and RAG)
              to ship systems that feel fast, secure, and genuinely helpful. I hold an MCA from Jain University
              (Bangalore, 2024) and a B.Sc in Physics with Computer Application (Kerala University, 2020).
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              <b>Currently working as Intern Software Developer at Myblocks, Ernakulam</b> (since June 2025), I build
              AI-first features, tighten backend reliability, and collaborate with product teams to deliver impact that
              customers can feel.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              I’ve led and built AI-powered business intelligence tools, multi-LLM orchestration pipelines (OpenAI,
              Gemini, Groq, Claude), NLP/sentiment systems, and data-rich web apps that stay responsive under load.
              Security is baked in from day one: auth, validation, and sensible defaults before features ship.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 mb-6"
            >
              What I bring to your team:
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300">
                <li><b>LLM orchestration & RAG:</b> Build multi-LLM flows with retrieval, grounding, and guardrails for accuracy.</li>
                <li><b>Full-stack delivery:</b> FastAPI/Node.js backends with React/TypeScript frontends that are responsive and clean.</li>
                <li><b>Data & performance:</b> MySQL/MongoDB schema design, indexing, caching, and async pipelines to keep apps snappy.</li>
                <li><b>Security first:</b> JWT/session auth, validation, encryption, CORS/hardening—CEH-certified mindset applied to builds.</li>
                <li><b>NLP & analytics:</b> Summarization, sentiment, entity extraction, and reporting that surface insights instead of noise.</li>
              </ul>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-300 mb-8"
            >
              Let’s build something people actually want to use. If you need an AI engineer who ships secure, production
              grade products—and who can explain the why as clearly as the how—let’s talk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href={`${import.meta.env.BASE_URL}assets/resume/Resume.pdf`}
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