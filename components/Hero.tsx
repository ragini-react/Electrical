"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Phone, MessageSquare, Zap, Shield, Award } from "lucide-react";
import { Hero as HeroType, Company } from "@/types/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface HeroProps {
  hero: HeroType;
  company: Company;
}

export default function Hero({ hero, company }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  // Smooth spring animations
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 });
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 30 });

  // Floating icons animation
  const floatingIcons = [
    { Icon: Zap, delay: 0, x: "10%", y: "20%" },
    { Icon: Shield, delay: 0.5, x: "80%", y: "30%" },
    { Icon: Award, delay: 1, x: "15%", y: "70%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#1a1a1a] dark:via-[#252525] dark:to-[#1a1a1a] pt-20 sm:pt-24">
      {/* Animated background with parallax */}
      <motion.div
        style={{ y: ySpring, opacity: opacitySpring }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        {/* Floating animated icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.Icon className="text-yellow-400" size={40} />
          </motion.div>
        ))}
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-10 relative mt-8 sm:mt-0"
      >
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            {hero.title}
          </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed drop-shadow-md px-2"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
            >
              <motion.a
                href={`tel:${company.phone}`}
                className="group w-full sm:w-auto bg-yellow-400 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-2 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Phone size={24} className="relative z-10" />
                <span className="relative z-10">{hero.cta.primary}</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={24} />
                <span>{hero.cta.secondary}</span>
              </motion.a>
            </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4"
          >
            {[
              { value: "13+", label: "Years Experience" },
              { value: "5000+", label: "Projects Done" },
              { value: "3500+", label: "Happy Clients" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
