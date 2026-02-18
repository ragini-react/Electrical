"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Company } from "@/types/site";
import { trackWhatsAppClick, trackPhoneCall } from "@/lib/analytics";

interface FloatingContactProps {
  company: Company;
}

export default function FloatingContact({ company }: FloatingContactProps) {
  const whatsappNumber = company.phone.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in your electrical services. Can you help me?`
  );

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
  };

  const handlePhoneClick = () => {
    trackPhoneCall();
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group relative p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        aria-label="Chat on WhatsApp"
        role="button"
      >
        <MessageCircle className="text-white" size={24} />
        
        {/* Tooltip */}
        <motion.div
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          Chat on WhatsApp
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
        </motion.div>

        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${company.phone}`}
        onClick={handlePhoneClick}
        className="group relative p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        aria-label={`Call us at ${company.phone}`}
        role="button"
      >
        <Phone className="text-white" size={24} />
        
        {/* Tooltip */}
        <motion.div
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          Call Now: {company.phone}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
        </motion.div>

        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-blue-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.a>
    </div>
  );
}
