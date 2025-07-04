
import { useState } from 'react';
import { Menu, X, User, Search, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-red-900/20 to-black text-white sticky top-0 z-50 border-b border-red-600 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Wrestling Theme */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png" 
                alt="BurnItDownYT Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-110"
              />
              <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-red-500 text-enhanced">BurnItDownYT</span>
              <Flame className="text-red-500 animate-pulse" size={20} />
            </div>
          </Link>

          {/* Desktop Navigation with Wrestling Style */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#social-feed" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              LIVE FEED
            </a>
            <a href="#network" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              NETWORK
            </a>
            <a href="#shows" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              SHOWS
            </a>
            <a href="#resell-tickets" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              TICKETS
            </a>
            <Link to="/shop" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              SHOP
            </Link>
            <Link to="/documents" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              DOCS
            </Link>
            <Link to="/work-with-us" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              PARTNER
            </Link>
            <Link to="/admin" className="hover:text-red-500 transition-all font-bold text-enhanced transform hover:scale-105">
              ADMIN
            </Link>
          </nav>

          {/* Right Side Icons with Wrestling Effects */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500 transition-all transform hover:scale-110 p-2 rounded-full hover:bg-red-500/10">
              <Search size={20} />
            </button>
            <button className="hover:text-red-500 transition-all transform hover:scale-110 p-2 rounded-full hover:bg-red-500/10">
              <User size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden hover:text-red-500 transition-all transform hover:scale-110 p-2 rounded-full hover:bg-red-500/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Wrestling Animation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-red-600 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#social-feed" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                🔥 LIVE FEED
              </a>
              <a href="#network" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                📺 NETWORK
              </a>
              <a href="#shows" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                🎬 SHOWS
              </a>
              <a href="#resell-tickets" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                🎫 TICKETS
              </a>
              <Link to="/shop" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                🛍️ SHOP
              </Link>
              <Link to="/documents" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                📄 DOCS
              </Link>
              <Link to="/work-with-us" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                🤝 PARTNER
              </Link>
              <Link to="/admin" className="hover:text-red-500 transition-all font-bold text-enhanced py-2 border-l-4 border-transparent hover:border-red-500 pl-4">
                ⚙️ ADMIN
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
