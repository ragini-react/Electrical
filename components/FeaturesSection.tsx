'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Clock, 
  Award, 
  Shield, 
  DollarSign, 
  CheckCircle, 
  FileCheck,
  Zap
} from 'lucide-react';
import { Feature } from '@/types/site';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface FeaturesSectionProps {
  features: Feature[];
}

const iconMap: { [key: string]: any } = {
  clock: Clock,
  award: Award,
  shield: Shield,
  'dollar-sign': DollarSign,
  'check-circle': CheckCircle,
  'file-check': FileCheck,
};

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#1a1a1a] dark:via-[#252525] dark:to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      {/* Animated background orb */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={isInView ? {
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        } : {}}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-yellow-400 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Experience excellence in every project
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-blue-900" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
