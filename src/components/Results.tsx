import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Results: React.FC = () => {
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
    <section id="results" className="py-16 mt-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h3 className="text-2xl font-semibold mb-4 text-teal-500">
            Real Results. No Guesswork.
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your System, Optimized for Results
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We've sent thousands of emails per week for ourselves and our clients. Reply rates vary by offer — but typically fall between 3–10%, with 10–67% of replies being positive.
          </p>

          {/* Flow + Highlight */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-10">
            {['Emails Sent', 'Replies', 'Positive Replies', 'Meetings Booked'].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="bg-white px-4 py-3 rounded-lg shadow-sm font-medium border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {step}
                </motion.div>
                <ArrowRight className="text-teal-500" size={24} />
              </React.Fragment>
            ))}

            {/* Subtle Highlighted Box */}
            <motion.div 
              className="px-5 py-3 rounded-lg shadow-md font-bold border-2 border-transparent bg-white text-gray-900 dark:text-white"
              style={{
                borderImage: 'linear-gradient(to right, #f97316, #ec4899) 1',
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              How Many Would You Close?
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              How Many Would You Close?
            </h3>
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
                Book a Free Strategy Call
              </motion.a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
              1 spot left. Then we're booked.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
