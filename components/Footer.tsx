'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Company, SocialMedia } from '@/types/site';

interface FooterProps {
  company: Company;
  socialMedia: SocialMedia[];
}

const iconMap: { [key: string]: any } = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Footer({ company, socialMedia }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-[#252525] dark:via-[#1a1a1a] dark:to-[#252525] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{company.name}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{company.tagline}</p>
            <div className="flex space-x-3">
              {socialMedia.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Home Wiring</li>
              <li>Industrial Installation</li>
              <li>Electrical Repair</li>
              <li>Panel Installation</li>
              <li>Lighting Setup</li>
              <li>Maintenance Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} {company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
