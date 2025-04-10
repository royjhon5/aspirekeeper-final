import Container from '@/components/global/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { perks } from '@/constants';
import { Check } from 'lucide-react';
import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <Container>
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-[#0d4a3a] mt-2">Reclaim your time and prioritize growth.</h1>
          </div>
          <p className="text-gray-700">
              Our expertise ensures seamless operations, so you can focus on what truly matters.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Virtual Assistant Support</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Social Media Management</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Research & Data Entry</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Administrative Tasks</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Calendar & Email Management</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-[#0070c9] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Customer Support Assistance</span>
            </li>
          </ul>
          <div>
            <Button
              variant="outline"
              className="rounded-full border-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors px-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] w-full">
          <div className="absolute right-0 top-0 w-4/5 h-4/5 bg-gray-300 rounded-lg"></div>
          <div className="absolute left-0 bottom-0 w-4/5 h-4/5 bg-gray-300 rounded-lg border-4 border-white"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border rounded-md md:divide-x">
              {perks.map((perk) => (
                  <div key={perk.title} className="flex flex-col items-start p-2">
                      <div className="flex flex-row items-start justify-center items-center gap-8">
                      <h3 className={`text-6xl font-medium mt-2 ${
                                              perk.title === "390+" 
                                            ? "text-[#A9B963]" 
                                            : perk.title === "810+" 
                                            ? "text-[#F159FF]" 
                                            : perk.title === '35+'
                                            ? "text-[#F87C47]"
                                            : perk.title === '800+'
                                            ? "text-[#52C8DC]" 
                                            : "text-[#333]"
                                        }`}>
                          {perk.title}
                      </h3>
                      <p className="text-muted-foreground text-start lg:text-start">
                          {perk.titlecon}
                      </p>
                      </div>
                      <p className="text-muted-foreground mt-12 text-start lg:text-start">
                          {perk.info}
                      </p>
                  </div>
              ))}
          </div>
      </div>
    </section>
    </Container>
  );
};

export default AboutUsSection;