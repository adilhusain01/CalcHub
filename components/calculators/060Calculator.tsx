"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function Calculator060() {
  const [weight, setWeight] = useState<number | ''>(3500);
  const [power, setPower] = useState<number | ''>(400);
  const [drivetrain, setDrivetrain] = useState<'AWD' | 'RWD' | 'FWD'>('AWD');

  const calculate060 = () => {
    if (!weight || !power) return null;
    
    // An estimation formula for 0-60 mph
    // Base formula roughly proportional to (Weight / HP)
    // Applying drivetrain multipliers
    let multiplier = 1.0;
    if (drivetrain === 'AWD') multiplier = 0.8;
    if (drivetrain === 'RWD') multiplier = 0.9;
    if (drivetrain === 'FWD') multiplier = 1.0;

    // Power to weight ratio estimation
    const time = Math.pow((weight / power), 0.6) * 0.9 * multiplier;
    
    // Add a minimum physical limit for street tires (around 2 seconds)
    return Math.max(2.0, time);
  };

  const time = calculate060();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">0-60 mph Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Estimate your car's 0-60 mph acceleration time.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight" className="font-bold">Vehicle Weight (lbs)</Label>
              <Input 
                id="weight" 
                type="number" 
                className="border-2 border-black rounded-xl p-4"
                value={weight} 
                onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="power" className="font-bold">Engine Power (HP)</Label>
              <Input 
                id="power" 
                type="number" 
                className="border-2 border-black rounded-xl p-4"
                value={power} 
                onChange={(e) => setPower(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="font-bold">Drivetrain</Label>
            <div className="flex gap-2">
              {(['AWD', 'RWD', 'FWD'] as const).map(dt => (
                <button 
                  key={dt}
                  onClick={() => setDrivetrain(dt)}
                  className={`flex-1 py-3 rounded-xl font-bold border-2 ${drivetrain === dt ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                >
                  {dt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {time !== null && (
          <div className="mt-8">
            <div className="bg-[#ff6e50] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-2 uppercase tracking-wide">Estimated 0-60 mph Time</p>
              <p className="text-6xl font-black text-black">{time.toFixed(2)} <span className="text-3xl">sec</span></p>
              <p className="text-xs text-orange-700 mt-3 font-medium">This is a rough estimate based on power-to-weight ratio.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
