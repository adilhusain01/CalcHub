"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function TargetHeartRateCalculator() {
  const [age, setAge] = useState<number | ''>(30);
  const [restingHeartRate, setRestingHeartRate] = useState<number | ''>(70);

  const calculateZones = () => {
    if (!age || !restingHeartRate) return null;
    
    const maxHeartRate = 220 - age;
    const hrr = maxHeartRate - restingHeartRate; // Heart Rate Reserve
    
    // Karvonen Formula: ((Max HR - Resting HR) * Intensity %) + Resting HR
    return {
      max: maxHeartRate,
      moderate: {
        min: Math.round((hrr * 0.50) + restingHeartRate),
        max: Math.round((hrr * 0.70) + restingHeartRate)
      },
      vigorous: {
        min: Math.round((hrr * 0.70) + restingHeartRate),
        max: Math.round((hrr * 0.85) + restingHeartRate)
      },
      aerobic: {
        min: Math.round((hrr * 0.70) + restingHeartRate),
        max: Math.round((hrr * 0.80) + restingHeartRate)
      }
    };
  };

  const zones = calculateZones();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Target Heart Rate</CardTitle>
        <CardDescription className="text-black font-bold">Find your ideal heart rate zone for maximum fat burn.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="flex gap-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="age" className="font-bold">Age (Years)</Label>
            <Input 
              id="age" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={age} 
              onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="restingHeartRate" className="font-bold">Resting Heart Rate (BPM)</Label>
            <Input 
              id="restingHeartRate" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={restingHeartRate} 
              onChange={(e) => setRestingHeartRate(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {zones && (
          <div className="space-y-4 mt-6">
            <div className="bg-[#ff94e0] p-4 rounded-2xl border-[3px] border-black">
              <p className="text-black font-bold text-sm">Estimated Maximum Heart Rate</p>
              <p className="text-3xl font-black text-black">{zones.max} BPM</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#9ed8a0] p-4 rounded-xl border-[3px] border-black">
                <p className="font-bold text-black">Moderate Intensity (50-70%)</p>
                <p className="text-2xl font-black text-black">{zones.moderate.min} - {zones.moderate.max} BPM</p>
                <p className="text-sm text-green-700 mt-1">Best for fat burn and endurance.</p>
              </div>
              <div className="bg-[#ff6e50] p-4 rounded-xl border-[3px] border-black">
                <p className="font-bold text-black">Vigorous Intensity (70-85%)</p>
                <p className="text-2xl font-black text-black">{zones.vigorous.min} - {zones.vigorous.max} BPM</p>
                <p className="text-sm text-orange-700 mt-1">Best for cardiovascular fitness.</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
