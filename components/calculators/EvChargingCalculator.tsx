"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function EvChargingCalculator() {
  const [capacity, setCapacity] = useState<number | ''>(75);
  const [currentCharge, setCurrentCharge] = useState<number | ''>(20);
  const [targetCharge, setTargetCharge] = useState<number | ''>(80);
  const [chargerPower, setChargerPower] = useState<number | ''>(11);

  const calculateChargingTime = () => {
    if (capacity === '' || currentCharge === '' || targetCharge === '' || chargerPower === '') return null;
    if (currentCharge >= targetCharge) return 0;
    
    const energyNeeded = capacity * ((targetCharge - currentCharge) / 100);
    // Add 10% for charging losses
    const timeInHours = (energyNeeded / chargerPower) * 1.1; 
    
    return timeInHours;
  };

  const formatTime = (hours: number) => {
    if (hours === 0) return "Already reached target!";
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h} hrs ${m} mins`;
  };

  const time = calculateChargingTime();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">EV Charging Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Estimate how long it will take to charge your Electric Vehicle.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="capacity" className="font-bold">Battery Capacity (kWh)</Label>
            <Input 
              id="capacity" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={capacity} 
              onChange={(e) => setCapacity(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="chargerPower" className="font-bold">Charger Power (kW)</Label>
            <Input 
              id="chargerPower" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={chargerPower} 
              onChange={(e) => setChargerPower(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="currentCharge" className="font-bold">Current Charge (%)</Label>
            <Input 
              id="currentCharge" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={currentCharge} 
              onChange={(e) => setCurrentCharge(e.target.value === '' ? '' : Math.min(100, Math.max(0, Number(e.target.value))))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="targetCharge" className="font-bold">Target Charge (%)</Label>
            <Input 
              id="targetCharge" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={targetCharge} 
              onChange={(e) => setTargetCharge(e.target.value === '' ? '' : Math.min(100, Math.max(0, Number(e.target.value))))} 
            />
          </div>
        </div>

        {time !== null && (
          <div className="mt-8">
            <div className="bg-[#9ed8a0] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-2 uppercase tracking-wide">Estimated Charging Time</p>
              <p className="text-5xl font-black text-black">{formatTime(time)}</p>
              <p className="text-xs text-green-700 mt-3 font-medium">Includes an estimated 10% energy loss during charging.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
