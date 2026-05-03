"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function DogYearsCalculator() {
  const [dogAge, setDogAge] = useState<number | ''>(5);

  const calculateHumanYears = () => {
    if (dogAge === '' || dogAge < 0) return null;
    
    // Rule of thumb for medium dogs:
    // Year 1 = 15 human years
    // Year 2 = 9 human years
    // Year 3+ = 5 human years per dog year
    
    let humanYears = 0;
    
    if (dogAge <= 1) {
      humanYears = dogAge * 15;
    } else if (dogAge <= 2) {
      humanYears = 15 + ((dogAge - 1) * 9);
    } else {
      humanYears = 24 + ((dogAge - 2) * 5);
    }
    
    return humanYears;
  };

  const humanYears = calculateHumanYears();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Dog Years Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Find out exactly how old your furry friend is in human years.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dogAge" className="font-bold">Dog's Age (in years)</Label>
            <Input 
              id="dogAge" 
              type="number" 
              step="0.5"
              className="border-2 border-black rounded-xl text-lg p-6"
              value={dogAge} 
              onChange={(e) => setDogAge(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {humanYears !== null && (
          <div className="mt-6">
            <div className="bg-amber-100 p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Your dog's age in human years is approximately</p>
              <p className="text-6xl font-black text-black mt-2">{humanYears % 1 === 0 ? humanYears : humanYears.toFixed(1)} 🐶</p>
              <p className="text-xs text-amber-700 mt-3 font-medium">Based on AVMA guidelines for a medium-sized dog.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
