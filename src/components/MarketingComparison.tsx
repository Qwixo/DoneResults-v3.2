import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MarketingComparison: React.FC = () => {
  const buttonControls = useAnimation();
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Animation for the button shine effect
  useEffect(() => {
    const animateButton = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds between animations
        await buttonControls.start({
          background: [
            'linear-gradient(90deg, rgba(20, 184, 166, 1) 0%, rgba(20, 184, 166, 1) 100%)',
            'linear-gradient(90deg, rgba(20, 184, 166, 1) 0%, rgba(45, 212, 191, 1) 50%, rgba(20, 184, 166, 1) 100%)',
            'linear-gradient(90deg, rgba(20, 184, 166, 1) 0%, rgba(20, 184, 166, 1) 100%)',
          ],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
      }
    };
    
    animateButton();
    
    return () => {
      buttonControls.stop();
    };
  }, [buttonControls]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p 
            className="text-lg text-gray-500 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Here is the truth:
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Most Companies Do Marketing All Wrong...
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-red-50 rounded-xl p-6 md:p-10 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Most Companies
            </h3>
            <p className="text-red-600 mb-4 underline decoration-red-400 underline-offset-4">
              In 2025, the majority of companies still:
            </p>
            <ul className="text-red-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Burn money with paid ads</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Think social media will get clients</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reach out to leads one at a time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Land in spam when doing cold email</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Send generic cold emails that no one opens</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-green-50 rounded-xl p-6 md:p-10 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              The DoneResults Way
            </h3>
            <p className="text-green-700 mb-4 underline decoration-green-500 underline-offset-4">
              This is what the top 1% are doing — and it's working:
            </p>
            <ul className="text-green-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hire AI that always gets the job done</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Direct outreach to decision-makers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sends hundreds of emails daily</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High deliverability with domain protection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Every email is "handcrafted" to resonate</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Button Section */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            {/* Pulsing ring effect */}
            <div className="absolute -inset-1 rounded-md bg-teal-300/30 blur-sm animate-pulse"></div>
            
            <motion.a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3SqRGx0SD40mEaoR1UqvTm-gBnZ9kuxqOKR2MpWKhb-9-eU8nR6yyhgwMX-M0OuodgIfYACrOO?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              ref={buttonRef}
              animate={buttonControls}
              className="relative inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition duration-200 shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Let's Talk
            </motion.a>
          </div>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            We choose our clients. When we're full, we're full.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingComparison;
