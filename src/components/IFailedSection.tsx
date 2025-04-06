import React from 'react';
import { motion } from 'framer-motion';

const IFailedSection: React.FC = () => {
  return (
    <section id="i-failed" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            I Failed <span className="text-teal-500">(a Lot)</span>—So You Don't Have To
          </h2>

          {/* Two column layout - image left, text right */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-16">
            {/* Left column - Image */}
            <motion.div 
              className="w-full md:w-5/12 -mt-4 md:mt-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i.imgur.com/JkASEy2.jpeg" 
                alt="Jan, founder of DoneResults" 
                className="rounded-2xl shadow-lg mx-auto md:mx-0 max-w-full md:max-w-[350px] w-full h-auto"
              />
            </motion.div>

            {/* Right column - Story text */}
            <motion.div 
              className="w-full md:w-7/12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  "Hi, I'm Jan, founder of DoneResults. I originally built this cold email system for my own video marketing agency.
                </p>
                <p>
                  It worked so well, I had to start hiring just to handle the volume of replies.
                </p>
                <p>
                  Later when having the meetings, I told the potential clients how I reached them and they ended up being more excited about that than my main video marketing service, so I decided to pivot and started offering cold email marketing as my main service.
                </p>
                <p>
                  Now I help other businesses scale using the same system — minus the trial and error."
                </p>
                <p>
                  - Jan Lisy, Founder
									
                </p>								
              </div>
            </motion.div>
          </div>

          {/* Video section */}
          <div className="mt-16">
            <motion.h3 
              className="text-5xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Is This Actually Real Though?
            </motion.h3>

            <motion.div 
              className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/D_2cybXeFP4" 
                  title="How the System Works"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* CTA Button below video */}
            <motion.div
              className="mt-12 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Book a Free Strategy Call
              </a>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
                We only work with a limited number of clients. Last spot left.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IFailedSection;
