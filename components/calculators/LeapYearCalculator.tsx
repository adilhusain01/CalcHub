"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LeapYearCalculator() {
  const [year, setYear] = useState<number | ''>(new Date().getFullYear());

  const checkLeapYear = () => {
    if (year === '' || !Number.isInteger(year) || year < 0) return null;
    
    // Leap year logic
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    return isLeap;
  };

  const isLeapYear = checkLeapYear();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Leap Year Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Quickly check if any given year is a leap year.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <Label htmlFor="year" className="font-bold text-lg">Enter Year</Label>
            <Input 
              id="year" 
              type="number" 
              className="border-2 border-black rounded-xl text-2xl font-bold p-6 text-center w-48 mx-auto"
              value={year} 
              onChange={(e) => setYear(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {isLeapYear !== null && (
          <div className="mt-6">
            {isLeapYear ? (
              <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-1">Result</p>
                <p className="text-4xl font-black text-black">Yes! {year} is a Leap Year! 🐸</p>
                <p className="text-sm text-green-700 mt-2 font-bold">It has 366 days.</p>
              </div>
            ) : (
              <div className="bg-gray-100 p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-1">Result</p>
                <p className="text-4xl font-black text-black">No, {year} is NOT a Leap Year.</p>
                <p className="text-sm text-gray-700 mt-2 font-bold">It has exactly 365 days.</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
