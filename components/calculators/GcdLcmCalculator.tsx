"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function GcdLcmCalculator() {
  const [num1, setNum1] = useState<number | ''>(12);
  const [num2, setNum2] = useState<number | ''>(18);

  // Euclidean algorithm for GCD
  const getGcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) return a;
    return getGcd(b, a % b);
  };

  const getLcm = (a: number, b: number): number => {
    if (a === 0 || b === 0) return 0;
    return Math.abs((a * b) / getGcd(a, b));
  };

  const calculate = () => {
    if (num1 === '' || num2 === '') return null;
    
    return {
      gcd: getGcd(Number(num1), Number(num2)),
      lcm: getLcm(Number(num1), Number(num2))
    };
  };

  const result = calculate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">GCD & LCM</CardTitle>
        <CardDescription className="text-black font-bold">Find the Greatest Common Divisor and Least Common Multiple.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="flex gap-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="num1" className="font-bold">Number 1</Label>
            <Input 
              id="num1" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={num1} 
              onChange={(e) => setNum1(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="num2" className="font-bold">Number 2</Label>
            <Input 
              id="num2" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={num2} 
              onChange={(e) => setNum2(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Greatest Common Divisor (GCD)</p>
              <p className="text-4xl font-black text-black">{result.gcd}</p>
            </div>
            
            <div className="bg-[#ff6e50] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Least Common Multiple (LCM)</p>
              <p className="text-4xl font-black text-black">{result.lcm}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
