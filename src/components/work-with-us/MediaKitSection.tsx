
import React from 'react';
import { Download } from 'lucide-react';

const MediaKitSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900/50 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white text-enhanced">
          GET THE FULL MEDIA KIT
        </h2>
        <p className="text-gray-200 text-xl mb-8 max-w-2xl mx-auto font-semibold text-enhanced">
          Download our comprehensive media kit with detailed analytics, case studies, and collaboration options.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-lg font-black text-xl transition-colors transform hover:scale-105 inline-flex items-center text-enhanced">
          <Download className="mr-3" size={28} />
          DOWNLOAD MEDIA KIT
        </button>
      </div>
    </section>
  );
};

export default MediaKitSection;
