import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhatWeDo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="what-we-do" className="py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side – Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 leading-tight max-w-xl">
                We Do the Outreach—You Close the Deals
              </h2>
              <p className="text-lg leading-relaxed mb-1">
                We'll define your ideal clients together and reach out to them using our advanced AI system.
              </p>
              <p className="text-lg leading-relaxed">
                Whenever a prospect shows genuine interest, we schedule a warm meeting on your calendar — so you can focus on delivering your product and closing deals, not prospecting.
              </p>
            </div>

            {/* Right Side – Inline SVG */}
            <div className="w-full md:w-1/2 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="300"
                viewBox="0 0 400 300"
                className="max-w-full h-auto"
              >
                <rect width="400" height="300" fill="none" />
                <circle cx="200" cy="150" r="100" fill="#30EBD6" opacity="0.2" />
                <circle cx="200" cy="150" r="70" fill="#00A79D" opacity="0.3" />
                <path
                  d="M200 80 L200 220"
                  stroke="#00A79D"
                  strokeWidth="4"
                  strokeDasharray="10,5"
                />
                <path
                  d="M130 150 L270 150"
                  stroke="#00A79D"
                  strokeWidth="4"
                  strokeDasharray="10,5"
                />
                <circle cx="200" cy="150" r="20" fill="#00A79D" />
                <circle cx="200" cy="150" r="10" fill="none" />
                <rect x="240" y="100" width="40" height="30" rx="5" fill="#00A79D" />
                <rect x="120" y="180" width="40" height="30" rx="5" fill="#00A79D" />
                <rect x="150" y="100" width="40" height="30" rx="5" fill="#00A79D" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
