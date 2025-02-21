'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    title: "Маржинальность",
    value: "70-85%",
    description: "Высокая прибыльность каждого проекта",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Месячный оборот",
    value: "$50K+",
    description: "Стабильный рост и масштабирование",
    icon: (
      <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Средний чек",
    value: "$500",
    description: "Оптимальное ценообразование",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "ROI",
    value: "300%",
    description: "Прогнозируемая окупаемость",
    icon: (
      <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const advantages = [
  {
    title: "Скорость разработки",
    value: "3-4x",
    description: "Быстрее традиционных методов",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Экономия затрат",
    value: "60%",
    description: "Снижение расходов на разработку",
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function InvestmentMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="investment-metrics">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Инвестиционная привлекательность
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="mb-4 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {metric.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 gradient-text">{metric.value}</h3>
              <div className="text-sm text-gray-400 mb-2">{metric.title}</div>
              <p className="text-sm text-gray-300">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl p-8 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold gradient-text">{advantage.value}</h3>
                  <div className="text-sm text-gray-400">{advantage.title}</div>
                </div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  {advantage.icon}
                </motion.div>
              </div>
              <p className="text-sm text-gray-300">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Кнопка для просмотра полного документа */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const modal = document.getElementById('fullDocumentModal');
            if (modal) modal.style.display = 'block';
          }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
        >
          Ознакомиться с полным документом
        </motion.button>
      </motion.div>

      {/* Модальное окно с полным документом */}
      <div id="fullDocumentModal" className="fixed inset-0 bg-black/90 z-50 hidden overflow-y-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-gray-900 rounded-xl p-8 relative max-w-4xl mx-auto">
            <button
              onClick={() => {
                const modal = document.getElementById('fullDocumentModal');
                if (modal) modal.style.display = 'none';
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Название компании: (определить позже)</h2>
              
              <h3 className="text-xl font-bold mb-4">Описание бизнеса:</h3>
              <p>Компания представляет собой AI-агентство нового поколения, специализирующееся на автоматизированной разработке IT-решений с использованием передовых технологий искусственного интеллекта. В отличие от традиционных студий, наша платформа позволяет клиентам получать качественные цифровые продукты значительно быстрее, дешевле и удобнее за счёт полной автоматизации процесса разработки, тестирования, анализа рынка и клиентского взаимодействия.</p>

              <h3 className="text-xl font-bold mb-4 mt-8">Бизнес-модель:</h3>
              <p>Компания функционирует по модели предоставления IT-услуг с использованием AI-разработки. Все этапы создания цифрового продукта, от сбора требований до финальной версии, проходят автоматизированную обработку. Основной доход формируется за счёт предоставления услуг по разработке веб-сайтов, фирменного стиля, UI/UX-дизайна, программных решений и консультационных услуг по цифровой трансформации бизнеса.</p>

              <h3 className="text-xl font-bold mb-4 mt-8">Принцип работы:</h3>
              <p>Клиент заходит на платформу, где его встречает AI-чат. Этот интеллектуальный ассистент анализирует требования клиента, формирует первичное техническое задание и предлагает концепцию проекта. AI самостоятельно проводит анализ рынка, предлагает оптимальные цветовые схемы, стилистику и функционал. После подтверждения клиентом система автоматически генерирует контракт, в котором прописаны сроки, требования и сумма заказа. Клиент подписывает контракт, после чего средства замораживаются в escrow-системе. В процессе выполнения проекта клиент получает ежедневные отчёты о прогрессе. В случае завершения проекта AI формирует детализированную отчётность, а также передаёт доступы к готовому продукту. Если клиент не отвечает после выполнения всех условий, через 12 дней средства автоматически переводятся исполнителю.</p>

              <h3 className="text-xl font-bold mb-4 mt-8">Технологическая основа:</h3>
              <p>Система использует GPT-4o для лёгких взаимодействий и первичного анализа, а o3-mini для сложных вычислительных задач, требующих поэтапного мышления. Вся платформа построена на Supabase или Firebase для обеспечения безопасности, хранения данных и автоматической отправки писем клиенту. Вся информация о заказе фиксируется, а ключевые взаимодействия AI могут делать скриншоты, которые сразу отправляются на выделенную почту, но нигде не сохраняются локально.</p>

              <h3 className="text-xl font-bold mb-4 mt-8">MVP и ключевые фичи:</h3>
              <ol className="list-decimal pl-6">
                <li>Автоматизированный AI-чат для взаимодействия с клиентами.</li>
                <li>Анализ рынка в режиме реального времени для создания актуального продукта.</li>
                <li>Генерация технического задания без участия человека.</li>
                <li>Формирование контракта, автоматическое подписание.</li>
                <li>Интеллектуальная escrow-система для защиты обеих сторон сделки.</li>
                <li>Автоматические отчёты о ходе выполнения проекта.</li>
                <li>AI-контроль качества на всех этапах работы.</li>
                <li>AI-генерация UI/UX-дизайнов на основе анализа трендов.</li>
                <li>Возможность работы с криптовалютой и картами.</li>
                <li>Минимальный заказ от $200, при необходимости обсуждения меньших сумм через e-mail.</li>
              </ol>

              <h3 className="text-xl font-bold mb-4 mt-8">Финансовая модель:</h3>
              <p>Средний чек проекта – $500. Себестоимость одного проекта включает затраты на API OpenAI, серверные мощности и административные расходы. Выход на окупаемость возможен после 100-150 проектов. Ожидаемая маржинальность – 70-85%.</p>

              <h3 className="text-xl font-bold mb-4 mt-8">Риски и их минимизация:</h3>
              <ol className="list-decimal pl-6">
                <li>Недоверие клиентов к AI-решениям – решается портфолио, кейсами и прозрачностью.</li>
                <li>Возможные технические сбои – предусмотрены резервные решения, аварийные серверные мощности.</li>
                <li>Высокая конкуренция – упор на уникальность, удобство и скорость работы.</li>
                <li>Возможные попытки мошенничества – AI фиксирует всё, escrow исключает потери.</li>
              </ol>

              <h3 className="text-xl font-bold mb-4 mt-8">Стратегия масштабирования:</h3>
              <ol className="list-decimal pl-6">
                <li>Запуск платформы и тестирование первых клиентов.</li>
                <li>Оптимизация AI-модели, улучшение взаимодействия с клиентами.</li>
                <li>Выход на стабильные обороты.</li>
                <li>Упор на маркетинг и партнёрства с инфлюенсерами.</li>
                <li>Развитие экосистемы AI-сервисов.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Оптимизированные фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"
        />
      </div>
    </section>
  );
} 