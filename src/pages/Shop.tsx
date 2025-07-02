
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Loader2 } from 'lucide-react';

interface Merchandise {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
}

interface Belt {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  championship_level: string;
  is_available: boolean;
}

const Shop = () => {
  const [activeTab, setActiveTab] = useState<'merchandise' | 'belts'>('merchandise');

  const { data: merchandise, isLoading: merchandiseLoading } = useQuery({
    queryKey: ['merchandise'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('merchandise')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Merchandise[];
    }
  });

  const { data: belts, isLoading: beltsLoading } = useQuery({
    queryKey: ['belts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('belts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Belt[];
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-red-500">BURN</span> SHOP
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get your hands on exclusive merchandise and championship belts
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('merchandise')}
              className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'merchandise'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              MERCHANDISE
            </button>
            <button
              onClick={() => setActiveTab('belts')}
              className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'belts'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              CHAMPIONSHIP BELTS
            </button>
          </div>
        </div>

        {/* Merchandise Tab */}
        {activeTab === 'merchandise' && (
          <div>
            {merchandiseLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-red-500" size={48} />
              </div>
            ) : merchandise && merchandise.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {merchandise.map((item) => (
                  <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-colors">
                    {item.image_url && (
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-64 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-500 mb-2">{item.name}</h3>
                      {item.description && (
                        <p className="text-gray-300 mb-4">{item.description}</p>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-400">
                          ${item.price}
                        </span>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition-colors">
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-xl">No merchandise available yet</p>
              </div>
            )}
          </div>
        )}

        {/* Belts Tab */}
        {activeTab === 'belts' && (
          <div>
            {beltsLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-red-500" size={48} />
              </div>
            ) : belts && belts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {belts.map((belt) => (
                  <div key={belt.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-colors">
                    {belt.image_url && (
                      <img
                        src={belt.image_url}
                        alt={belt.name}
                        className="w-full h-64 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-red-500">{belt.name}</h3>
                        {!belt.is_available && (
                          <span className="bg-gray-600 text-white px-2 py-1 rounded text-sm">
                            SOLD OUT
                          </span>
                        )}
                      </div>
                      {belt.championship_level && (
                        <p className="text-yellow-400 font-semibold mb-2">{belt.championship_level}</p>
                      )}
                      {belt.description && (
                        <p className="text-gray-300 mb-4">{belt.description}</p>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-400">
                          ${belt.price}
                        </span>
                        <button 
                          className={`px-4 py-2 rounded font-bold transition-colors ${
                            belt.is_available
                              ? 'bg-red-600 hover:bg-red-700 text-white'
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!belt.is_available}
                        >
                          {belt.is_available ? 'BUY NOW' : 'SOLD OUT'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-xl">No championship belts available yet</p>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
