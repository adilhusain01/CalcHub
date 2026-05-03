"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function FractionToDecimalCalculator() {
  const [numerator, setNumerator] = useState<number | ''>(3);
  const [denominator, setDenominator] = useState<number | ''>(4);

  const result = () => {
    if (numerator === '' || denominator === '') return null;
    if (denominator === 0) return { error: 'Cannot divide by zero' };
    
    return {
      decimal: numerator / denominator,
    };
  };

  const calc = result();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Fraction to Decimal</CardTitle>
        <CardDescription className="text-black font-bold">Quickly convert any fraction into a precise decimal number.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="space-y-4 w-32">
            <Input 
              type="number" 
              className="border-2 border-black rounded-xl text-center text-xl font-bold p-4 h-16"
              value={numerator} 
              onChange={(e) => setNumerator(e.target.value === '' ? '' : Number(e.target.value))} 
              placeholder="Num"
            />
            <div className="border-t-4 border-black w-full my-2"></div>
            <Input 
              type="number" 
              className="border-2 border-black rounded-xl text-center text-xl font-bold p-4 h-16"
              value={denominator} 
              onChange={(e) => setDenominator(e.target.value === '' ? '' : Number(e.target.value))} 
              placeholder="Den"
            />
          </div>
          <div className="text-4xl font-black text-gray-500">=</div>
          <div className="w-48 bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black font-bold text-sm mb-1">Decimal</p>
            {calc?.error ? (
              <p className="text-xl font-black text-red-600">{calc.error}</p>
            ) : (
              <p className="text-3xl font-black text-black truncate">
                {calc ? calc.decimal : '0'}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
