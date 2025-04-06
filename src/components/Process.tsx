import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Simple 3-Step Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-teal-400 text-white flex items-center justify-center text-2xl font-bold">1</div>
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-4">Discovery Call</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We learn about your business and find out whether we could be a good fit.
            </p>
            <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-teal-400"></div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-teal-400 text-white flex items-center justify-center text-2xl font-bold">2</div>
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-4">AI-Powered Outreach</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We craft & send personalized emails, set up subdomains, and ensure deliverability.
            </p>
            <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-teal-400"></div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-teal-400 text-white flex items-center justify-center text-2xl font-bold">3</div>
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-4">Meetings on Your Calendar</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We find leads, turn them into potential customers, and schedule discovery calls with them on your calendar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
