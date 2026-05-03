"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function TireSizeCalculator() {
  const [width, setWidth] = useState<number | ''>(225);
  const [aspectRatio, setAspectRatio] = useState<number | ''>(45);
  const [wheelDiameter, setWheelDiameter] = useState<number | ''>(17);

  const calculateSpecs = () => {
    if (!width || !aspectRatio || !wheelDiameter) return null;
    
    const sidewallHeightMm = width * (aspectRatio / 100);
    const sidewallHeightInches = sidewallHeightMm / 25.4;
    
    const overallDiameter = (sidewallHeightInches * 2) + wheelDiameter;
    const circumference = overallDiameter * Math.PI;
    const revsPerMile = 63360 / circumference; // 63360 inches in a mile
    
    return {
      diameter: overallDiameter,
      sidewall: sidewallHeightInches,
      circumference,
      revs: revsPerMile
    };
  };

  const specs = calculateSpecs();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Tire Size Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate tire dimensions based on its code.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <div className="space-y-2 flex-1">
              <Label htmlFor="width" className="font-bold text-xs">Width (mm)</Label>
              <Input 
                id="width" 
                type="number" 
                className="border-2 border-black rounded-xl font-bold text-center"
                value={width} 
                onChange={(e) => setWidth(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <span className="font-black text-2xl mt-6">/</span>
            <div className="space-y-2 flex-1">
              <Label htmlFor="aspectRatio" className="font-bold text-xs">Aspect Ratio</Label>
              <Input 
                id="aspectRatio" 
                type="number" 
                className="border-2 border-black rounded-xl font-bold text-center"
                value={aspectRatio} 
                onChange={(e) => setAspectRatio(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <span className="font-black text-2xl mt-6">R</span>
            <div className="space-y-2 flex-1">
              <Label htmlFor="wheelDiameter" className="font-bold text-xs">Wheel (in)</Label>
              <Input 
                id="wheelDiameter" 
                type="number" 
                className="border-2 border-black rounded-xl font-bold text-center"
                value={wheelDiameter} 
                onChange={(e) => setWheelDiameter(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {specs && (
          <div className="mt-8 bg-gray-50 p-6 rounded-2xl border-[3px] border-black">
            <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-4 text-center">Tire Dimensions</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-xs text-gray-500 font-bold mb-1">Overall Diameter</p>
                <p className="text-2xl font-black">{specs.diameter.toFixed(2)}"</p>
              </div>
              <div className="bg-white p-4 rounded-xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-xs text-gray-500 font-bold mb-1">Sidewall Height</p>
                <p className="text-2xl font-black">{specs.sidewall.toFixed(2)}"</p>
              </div>
              <div className="bg-white p-4 rounded-xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-xs text-gray-500 font-bold mb-1">Circumference</p>
                <p className="text-2xl font-black">{specs.circumference.toFixed(2)}"</p>
              </div>
              <div className="bg-white p-4 rounded-xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-xs text-gray-500 font-bold mb-1">Revs per Mile</p>
                <p className="text-2xl font-black">{Math.round(specs.revs)}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
