import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "Do I need to do anything?",
      answer: (
        <div className="space-y-2">
          <p>Just like in any partnership, we can only get the best results if both parties are committed to making this work.</p>
          <p>Our goal is to get you and your team interested leads to try and close without taking up your time.</p>
          <p>In order to optimize and get the best results, we will need to cooperate.</p>
          <p>Generally, we suggest having a quick meeting to check in every week.</p>
        </div>
      )
    },
    {
      question: "How soon until I see results?",
      answer: (
        <div className="space-y-2">
          <p>Most clients start seeing replies within the first week of launching a campaign.</p>
          <p>However, it typically takes 3–4 weeks to fully optimize and start booking consistent meetings.</p>
        </div>
      )
    },
    {
      question: "What industries do you work with?",
      answer: (
        <div className="space-y-2">
          <p>We've had success across various B2B industries.</p>
          <p>Performance tends to vary based on multiple factors — let's discuss whether we'd be a good fit on a quick 15-minute call.</p>
        </div>
      )
    },
    {
      question: "Seriously, no results = no pay?",
      answer: (
        <div className="space-y-2">
          <p>Yes, we're that confident. If we don't deliver qualified meetings, you only pay for the basic system costs — not our service fee.</p>
          <p>In other words, we'd work for free. But luckily, we always deliver 😎</p>
        </div>
      )
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={`border-b border-gray-200 dark:border-gray-700 pb-2 ${activeIndex === index ? 'pb-6' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="flex justify-between items-center py-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.question}</h3>
                  <span className={`text-teal-500 text-2xl transition-transform duration-300 ${activeIndex === index ? 'transform rotate-45' : ''}`}>
                    +
                  </span>
                </div>
                
                <motion.div 
                  className="text-gray-700 dark:text-gray-300 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-2 pb-4">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Email Contact Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Mail className="w-8 h-8 mx-auto text-teal-500 mb-2" />
            <p className="text-gray-700 dark:text-gray-300">Any questions? Reach out at:</p>
            <a 
              href="mailto:jan.lisy123@gmail.com" 
              className="text-teal-500 hover:text-teal-600 font-medium text-lg hover:underline transition-colors"
            >
              jan.lisy123@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
