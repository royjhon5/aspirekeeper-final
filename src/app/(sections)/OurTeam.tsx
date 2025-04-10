import Container from '@/components/global/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BehindAspire, pricingCards } from '@/constants';
import { cn } from '@/lib/utils';
import { ArrowRight, Check, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MeetTheTeam: React.FC = () => {
  return (
    <>
    <Container>
        <div className="mx-auto text-start md:text-center">
            <p className="text-muted-foreground mt-6">
                WHO IS BEHIND ASPIRE KEEPER SOLUTIONS?
            </p>
            <h2 className="text-3xl lg:text-4xl text-[#0d4a3a] font-semibold ">
                GLOBAL EXECUTIVE TEAM
            </h2>
           
        </div>
    </Container>
    <Container className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-5">
            {BehindAspire.map((card) => (
                <div key={card.name} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={card.imgSrc} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.name}</div>
                  <p className="text-gray-700 text-base">
                    {card.info}
                  </p>
                </div>
              </div>
            ))}
        </div>
    </Container>
    </>   
  );
};

export default MeetTheTeam;