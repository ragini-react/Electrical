'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Home, 
  Factory, 
  Wrench, 
  Box, 
  Lightbulb, 
  Settings,
  Zap
} from 'lucide-react';
import { Service } from '@/types/site';
import { fadeInUp } from '@/lib/animations';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap: { [key: string]: any } = {
  home: Home,
  factory: Factory,
  wrench: Wrench,
  box: Box,
  lightbulb: Lightbulb,
  settings: Settings,
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Zap;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group bg-white dark:bg-[#252525] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-[#333333] relative"
    >
      <div className="p-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-yellow-400" size={32} />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {service.description}
        </p>

        <div className="flex items-center text-blue-900 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
          <span>Learn More</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  );
}
