import { useState } from 'react';

interface Ticket {
  id: number;
  event: string;
  date: string;
  venue: string;
  section: string;
  row: string;
  seats: string;
  price: number;
  originalPrice: number;
  seller: string;
}

const ResellTickets = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample ticket data - this will be replaced with Supabase data later
  const tickets: Ticket[] = [
    {
      id: 1,
      event: "Monday Night RAW",
      date: "July 15, 2024",
      venue: "State Farm Arena",
      section: "Floor",
      row: "A",
      seats: "15-16",
      price: 150,
      originalPrice: 200,
      seller: "WrestlingFan2024"
    },
    {
      id: 2,
      event: "Friday Night SmackDown",
      date: "July 19, 2024",
      venue: "Madison Square Garden",
      section: "Lower Bowl",
      row: "C",
      seats: "8-10",
      price: 120,
      originalPrice: 150,
      seller: "NYC_Wrestling"
    },
    {
      id: 3,
      event: "SummerSlam 2024",
      date: "August 3, 2024",
      venue: "Cleveland Browns Stadium",
      section: "Upper Deck",
      row: "L",
      seats: "22-25",
      price: 80,
      originalPrice: 100,
      seller: "ClevelandFan"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'raw', name: 'Monday Night RAW' },
    { id: 'smackdown', name: 'Friday Night SmackDown' },
    { id: 'ppv', name: 'Pay-Per-View' }
  ];

  const filteredTickets = selectedCategory === 'all' 
    ? tickets 
    : tickets.filter(ticket => 
        ticket.event.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <section id="resell-tickets" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            RE-SELL <span className="text-red-500">TICKETS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find great deals on tickets from other fans, or sell your own tickets safely and securely
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTickets.map(ticket => (
            <div key={ticket.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-1">{ticket.event}</h3>
                  <p className="text-gray-300">{ticket.date}</p>
                  <p className="text-gray-400 text-sm">{ticket.venue}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">${ticket.price}</div>
                  <div className="text-sm text-gray-500 line-through">${ticket.originalPrice}</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Section:</span>
                  <span className="text-white">{ticket.section}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Row:</span>
                  <span className="text-white">{ticket.row}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seats:</span>
                  <span className="text-white">{ticket.seats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seller:</span>
                  <span className="text-white">{ticket.seller}</span>
                </div>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>

        {filteredTickets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No tickets found for this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResellTickets;
