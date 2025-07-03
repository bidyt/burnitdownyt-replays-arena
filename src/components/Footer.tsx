
import { Youtube, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl font-bold text-red-500">BurnItDownYT</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for wrestling entertainment and ticket resale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#network" className="text-gray-400 hover:text-white transition-colors">Network</a></li>
              <li><a href="#shows" className="text-gray-400 hover:text-white transition-colors">Shows</a></li>
              <li><a href="#superstars" className="text-gray-400 hover:text-white transition-colors">Superstars</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Tickets */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">Tickets</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#resell-tickets" className="text-gray-400 hover:text-white transition-colors">Re-sell Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sell Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ticket Protection</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BurnItDownYT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://youtube.com/@burnitdownyt?si=ogbNfYLps54zRZQ1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/burnitdownyt?igsh=MTExOGNwOHJhZWYyYQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/g/1BpZVnNsqr/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
