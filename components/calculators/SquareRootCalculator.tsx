"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function SquareRootCalculator() {
  const [number, setNumber] = useState<number | ''>(144);

  const calculateRoot = () => {
    if (number === '' || number < 0) return null;
    
    const root = Math.sqrt(number);
    const isPerfect = Number.isInteger(root);
    
    return {
      root,
      isPerfect
    };
  };

  const calc = calculateRoot();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Square Root</CardTitle>
        <CardDescription className="text-black font-bold">Find the square root or perfect squares for any number.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="number" className="font-bold">Enter a positive number</Label>
            <Input 
              id="number" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={number} 
              onChange={(e) => setNumber(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {calc ? (
          <div className="mt-6 space-y-4">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Square Root (√x)</p>
              <p className="text-5xl font-black text-black">{calc.root.toLocaleString(undefined, { maximumFractionDigits: 6 })}</p>
              
              {calc.isPerfect && (
                <div className="mt-4 inline-block bg-green-200 px-4 py-1 rounded-full border-[3px] border-black">
                  <p className="text-sm font-bold text-black">✨ Perfect Square!</p>
                </div>
              )}
            </div>
            
            <div className="bg-gray-100 p-4 rounded-xl border-[3px] border-black text-center">
              <p className="font-bold text-black">x² (Squared)</p>
              <p className="text-2xl font-black text-black">{(number as number * (number as number)).toLocaleString()}</p>
            </div>
          </div>
        ) : number !== '' && number < 0 ? (
          <div className="mt-6 bg-[#ff94e0] p-4 rounded-xl text-center text-sm font-bold text-red-600">
            Cannot calculate the square root of a negative number (result is imaginary).
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
