
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">NaijaAccountants Ltd</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering Nigerian businesses through accurate bookkeeping, 
              strategic tax planning, and full compliance with FIRS/LIRS regulations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/2348101485748" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-gold flex-shrink-0" />
                <span className="text-gray-300">Plot 123, Victoria Island Business District, Lagos, Nigeria.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-gold flex-shrink-0" />
                <a href="tel:+2348101485748" className="text-gray-300 hover:text-gold transition-colors">+234 810 148 5748</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-gold flex-shrink-0" />
                <a href="mailto:obiomaogwuegb69@outlook.com" className="text-gray-300 hover:text-gold transition-colors">obiomaogwuegb69@outlook.com</a>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Find Us</h3>
            <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center border border-gray-700 overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/lagosmap/400/200" 
                alt="Map Placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <span className="relative z-10 text-sm font-medium">Lagos Office Location</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NaijaAccountants Professional Services. All Rights Reserved.</p>
          <p className="mt-2 italic">Registered with ICAN & ANAN practitioners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
