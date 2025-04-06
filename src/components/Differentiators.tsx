import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Bot, 
  RefreshCcw, 
  LineChart, 
  Lightbulb 
} from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Differentiators: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Adaptable Speed & Scale",
      description: "We tailor outreach volume to match your capacity."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Dedicated Subdomains",
      description: "Protect your main domain's reputation and maximize deliverability."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Personalization",
      description: "No spammy templates; every email is custom-crafted."
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: "Multi-Step Follow-Ups",
      description: "80% of conversions happen after the first email."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Transparent Reporting",
      description: "Weekly updates on the performance of our campaigns."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Always Testing New AI Tools",
      description: "We stay on the cutting edge for cost-efficiency and performance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our People Like
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-teal-100 dark:border-teal-900 transition-all duration-300 z-10">
                <GlowingEffect
                  spread={40}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  glow={true}
                  disabled={false}
                />
                <div className="text-teal-500 dark:text-teal-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
