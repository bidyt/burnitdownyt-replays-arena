
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Belt {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  championship_level: string;
  is_available: boolean;
}

const FeaturedBelts = () => {
  const { data: belts, isLoading } = useQuery({
    queryKey: ['featured-belts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('belts')
        .select('*')
        .eq('is_available', true)
        .limit(4)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Belt[];
    }
  });

  if (isLoading) {
    return (
      <section className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Loader2 className="animate-spin text-yellow-500" size={48} />
          </div>
        </div>
      </section>
    );
  }

  if (!belts || belts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-yellow-500 mb-4">
            🏆 CHAMPIONSHIP BELTS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Own a piece of wrestling history with our premium championship belts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {belts.map((belt) => (
            <div
              key={belt.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-yellow-600/30 hover:border-yellow-500 transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={belt.image_url || "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png"}
                  alt={belt.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                  {belt.championship_level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-2 line-clamp-2">
                  {belt.name}
                </h3>
                {belt.description && (
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {belt.description}
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-400">
                    ${belt.price}
                  </span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition-colors">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 rounded-lg font-black text-lg transition-colors transform hover:scale-105"
          >
            VIEW ALL BELTS 🛍️
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBelts;
