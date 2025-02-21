'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const workflowSteps = [
  {
    title: 'Initial Consultation',
    description: 'AI assistant analyzes your requirements and creates a detailed technical specification',
    icon: '🤖',
  },
  {
    title: 'Market Analysis',
    description: 'Real-time market research and competitor analysis to ensure optimal solution',
    icon: '📊',
  },
  {
    title: 'Smart Contract',
    description: 'Automated contract generation with built-in escrow system for secure transactions',
    icon: '📝',
  },
  {
    title: 'Development Process',
    description: 'AI-powered development with daily progress reports and quality control',
    icon: '⚙️',
  },
  {
    title: 'Testing & QA',
    description: 'Automated testing and quality assurance throughout the development cycle',
    icon: '✅',
  },
  {
    title: 'Project Delivery',
    description: 'Secure delivery of the final product with comprehensive documentation',
    icon: '🚀',
  },
];

const WorkflowStep = ({ step, index }: { step: typeof workflowSteps[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-center gap-4 md:gap-8"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-2xl">
        {step.icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 gradient-text">{step.title}</h3>
        <p className="text-gray-400">{step.description}</p>
      </div>
      {index !== workflowSteps.length - 1 && (
        <div className="absolute bottom-0 left-8 w-0.5 h-16 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
      )}
    </motion.div>
  );
};

export default function WorkflowSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our streamlined process ensures efficient delivery of your digital products
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {workflowSteps.map((step, index) => (
            <WorkflowStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
} 