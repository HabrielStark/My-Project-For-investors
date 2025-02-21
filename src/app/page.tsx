'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

// Динамический импорт компонентов для оптимизации загрузки
const LoadingAnimation = dynamic(() => import('@/components/LoadingAnimation'));
const InvestmentMetrics = dynamic(() => import('@/components/InvestmentMetrics'));
const ThreeCanvas = dynamic(() => import('@/components/ThreeCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 animate-pulse" />
  ),
});

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ThreeCanvas />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="hero-heading mb-6">
            AI-Агентство<br />Нового Поколения
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Революционная платформа для автоматизированной разработки IT-решений
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('investment-metrics')?.scrollIntoView({ behavior: 'smooth' })}
            className="button-primary"
          >
            Узнать больше
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section className="py-20 relative bg-gray-900/50 backdrop-blur-lg" id="technology">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Технологическое превосходство</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">AI-ядро</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">●</span>
                  GPT-4 для базового взаимодействия
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">●</span>
                  o3-mini для сложных вычислений
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Инфраструктура</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">●</span>
                  Supabase/Firebase база
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">●</span>
                  Автоматизированная безопасность
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InvestmentSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section className="py-20 relative backdrop-blur-lg" id="investment">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-heading">Инвестиционные возможности</h2>
          <div className="card max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Стратегия роста</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Запуск MVP и привлечение первых 50 клиентов
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Международная экспансия
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Расширение спектра услуг
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (!mounted) return null;

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-black to-gray-900"
      >
        <Header />
        <HeroSection />
        <InvestmentMetrics />
        <TechnologySection />
        <InvestmentSection />
      </motion.main>
    </>
  );
}
