import React from 'react';
import { Wrench, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyOptionsFail: React.FC = () => {
  const cards = [
    {
      icon: Wrench,
      title: "DO EVERYTHING YOURSELF?",
      description: "If you have little to do, it's not a problem. However, if you're busy... this is not feasible."
    },
    {
      icon: Users,
      title: "HIRE NEW STAFF?",
      description: "Finding good people is difficult, and training them is expensive. Even if you find the perfect person… you still rely on one individual."
    },
    {
      icon: Building2,
      title: "HIRE AN AGENCY?",
      description: "Don't have a marketing budget of tens of thousands? Your account gets passed down to an intern of an assistant of an assistant."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-white">

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why Most Options Fail
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-muted dark:bg-gray-800/60 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-primary">
                {React.createElement(card.icon, { size: 40, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-lg font-bold uppercase text-muted-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOptionsFail;
