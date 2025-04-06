import React from 'react';
import { motion } from 'framer-motion';

const EmailStats: React.FC = () => {
  return (
    <section id="email-stats" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Email Isn't Dead. It's <span className="text-teal-500">Dominating.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            While everyone chases the latest platform, email remains the most reliable channel for B2B lead generation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img 
            src="https://i.imgur.com/1d49832c-8f60-4be6-84a0-1636737c684d" 
            alt="Email marketing statistics" 
            className="rounded-xl shadow-lg max-w-full md:max-w-4xl w-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-5xl font-bold text-teal-500 mb-4">4.3B</h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Daily email users worldwide — more than any social platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-5xl font-bold text-teal-500 mb-4">40x</h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              More effective at acquiring customers than Facebook and Twitter combined
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-5xl font-bold text-teal-500 mb-4">$42</h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Average return for every $1 spent on email marketing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailStats;
