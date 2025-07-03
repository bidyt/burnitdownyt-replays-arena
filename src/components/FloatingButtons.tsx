
import { MessageCircle, Mail } from 'lucide-react';

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:contact@burnitdownyt.com', '_blank');
  };

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col space-y-3">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
        title="WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </button>
      
      <button
        onClick={handleEmailClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
        title="Email"
      >
        <Mail size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Email
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
