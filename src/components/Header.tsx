
import { useState } from 'react';
import { Menu, X, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-red-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png" 
              alt="BurnItDownYT Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-red-500">BurnItDownYT</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#network" className="hover:text-red-500 transition-colors font-medium">NETWORK</a>
            <a href="#shows" className="hover:text-red-500 transition-colors font-medium">SHOWS</a>
            <a href="#resell-tickets" className="hover:text-red-500 transition-colors font-medium">RE-SELL TICKETS</a>
            <a href="#shop" className="hover:text-red-500 transition-colors font-medium">SHOP</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-red-500 transition-colors">
              <User size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-red-600">
            <div className="flex flex-col space-y-4">
              <a href="#network" className="hover:text-red-500 transition-colors font-medium">NETWORK</a>
              <a href="#shows" className="hover:text-red-500 transition-colors font-medium">SHOWS</a>
              <a href="#resell-tickets" className="hover:text-red-500 transition-colors font-medium">RE-SELL TICKETS</a>
              <a href="#shop" className="hover:text-red-500 transition-colors font-medium">SHOP</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
