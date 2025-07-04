
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AudienceDemographics = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-enhanced">
          <Users className="inline-block mr-3 text-blue-400" />
          <span className="text-white">AUDIENCE DEMOGRAPHICS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-600 border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-white font-bold text-enhanced">Age Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-enhanced">18-24</span>
                  <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                    <div className="bg-red-400 h-4 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-white font-semibold text-enhanced">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-enhanced">25-34</span>
                  <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                    <div className="bg-red-400 h-4 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-white font-semibold text-enhanced">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-enhanced">35-44</span>
                  <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                    <div className="bg-red-400 h-4 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-white font-semibold text-enhanced">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-enhanced">45+</span>
                  <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                    <div className="bg-red-400 h-4 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-white font-semibold text-enhanced">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-600 border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-white font-bold text-enhanced">Geographic Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white font-semibold text-enhanced">United States</span>
                  <span className="font-black text-red-300 text-enhanced">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-semibold text-enhanced">Canada</span>
                  <span className="font-black text-red-300 text-enhanced">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-semibold text-enhanced">United Kingdom</span>
                  <span className="font-black text-red-300 text-enhanced">12%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-semibold text-enhanced">Australia</span>
                  <span className="font-black text-red-300 text-enhanced">8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-semibold text-enhanced">Other</span>
                  <span className="font-black text-red-300 text-enhanced">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AudienceDemographics;
