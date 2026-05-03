"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function HorsepowerCalculator() {
  const [torque, setTorque] = useState<number | ''>(350);
  const [rpm, setRpm] = useState<number | ''>(5000);

  const calculateHP = () => {
    if (!torque || !rpm) return null;
    
    // Formula: HP = (Torque x RPM) / 5252
    return (torque * rpm) / 5252;
  };

  const hp = calculateHP();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Horsepower Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate engine horsepower from torque and RPM.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="torque" className="font-bold">Torque (lb-ft)</Label>
              <Input 
                id="torque" 
                type="number" 
                className="border-2 border-black rounded-xl text-lg p-6"
                value={torque} 
                onChange={(e) => setTorque(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="rpm" className="font-bold">Engine Speed (RPM)</Label>
              <Input 
                id="rpm" 
                type="number" 
                className="border-2 border-black rounded-xl text-lg p-6"
                value={rpm} 
                onChange={(e) => setRpm(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {hp !== null && (
          <div className="mt-8 space-y-4">
            <div className="bg-[#ff94e0] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-2 uppercase tracking-wide">Estimated Horsepower</p>
              <p className="text-6xl font-black text-black">{hp.toFixed(1)} <span className="text-3xl">HP</span></p>
            </div>
            
            <p className="text-xs text-gray-500 text-center font-bold">
              Formula: HP = (Torque × RPM) ÷ 5252
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
