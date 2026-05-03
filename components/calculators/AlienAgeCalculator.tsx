"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function AlienAgeCalculator() {
  const [age, setAge] = useState<number | ''>(25);

  const earthAge = Number(age) || 0;
  
  const planets = [
    { name: 'Mercury', ratio: 0.2408467, color: '#a8a8a8' },
    { name: 'Venus', ratio: 0.61519726, color: '#e3bb76' },
    { name: 'Mars', ratio: 1.8808158, color: '#ff6e50' },
    { name: 'Jupiter', ratio: 11.862615, color: '#d39c7e' },
    { name: 'Saturn', ratio: 29.447498, color: '#ead6b8' },
    { name: 'Uranus', ratio: 84.016846, color: '#a7e0a5' },
    { name: 'Neptune', ratio: 164.79132, color: '#4a8eff' },
  ];

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#4a8eff] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-white">Alien Age Calculator</CardTitle>
        <CardDescription className="text-white font-bold">Discover your age in different parts of the solar system.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2 max-w-xs mx-auto">
          <Label className="text-center block">Your Earth Age (Years)</Label>
          <Input className="text-center text-xl font-black" type="number" value={age} onChange={e => setAge(e.target.value === '' ? '' : Number(e.target.value))} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {planets.map(p => (
            <div key={p.name} className="border-[3px] border-black rounded-[16px] p-3 text-center shadow-[4px_4px_0_0_#000] flex flex-col justify-between" style={{ backgroundColor: p.color }}>
              <p className="font-bold text-black text-sm uppercase tracking-tight">{p.name}</p>
              <p className="text-2xl font-black text-black mt-2">{(earthAge / p.ratio).toFixed(1)}</p>
              <p className="text-xs font-bold text-black opacity-80">years old</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
