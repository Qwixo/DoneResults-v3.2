import React from 'react';
import { motion } from 'framer-motion';

const WhatMakesDifferent: React.FC = () => {
  const differentiators = [
    {
      icon: "🔒",
      title: "GUARANTEE",
      description: "We only win if you win. That's the basis for a good partnership. You won't carry all the risk — we'll share it."
    },
    {
      icon: "📈",
      title: "RESULTS",
      description: "Our first priority is to get you results. Less talk, more walk."
    },
    {
      icon: "🌍",
      title: "LOCAL",
      description: "We're not tucked away in some anonymous call center. We're a small local company, so you'll be able to reach us when you need us."
    },
    {
      icon: "🎯",
      title: "SPECIALIZATION",
      description: "Jack of all trades… Master of none. Specialization works. That's why we only do what we know works — so we can guarantee results."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          OK… But What Makes You Different?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="bg-muted/50 dark:bg-gray-800/40 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
