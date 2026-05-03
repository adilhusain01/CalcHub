"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function FibonacciCalculator() {
  const [term, setTerm] = useState<number | ''>(10);

  const calculateFibonacci = (n: number) => {
    if (n < 0) return null;
    if (n === 0) return "0";
    if (n === 1) return "1";
    
    // Use BigInt for large Fibonacci numbers
    let a = BigInt(0);
    let b = BigInt(1);
    let c = BigInt(1);
    
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    
    return c.toString();
  };

  const result = term !== '' ? calculateFibonacci(Number(term)) : null;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Fibonacci Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Find the Nth number in the famous Fibonacci sequence.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="term" className="font-bold">Nth Term (e.g., 10)</Label>
            <Input 
              id="term" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={term} 
              onChange={(e) => setTerm(e.target.value === '' ? '' : Math.min(10000, Math.max(0, parseInt(e.target.value))))} 
            />
            <p className="text-xs text-gray-500 font-medium">Limited to max 10,000 for performance.</p>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000] overflow-x-auto">
              <p className="text-black font-bold text-sm mb-2">Result: F({term})</p>
              <p className="text-3xl font-black text-black break-words">{result}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl border-[3px] border-black text-center">
              <p className="text-sm font-bold text-gray-700">The Sequence (First 10 terms):</p>
              <p className="text-sm text-gray-600 mt-1 font-mono">0, 1, 1, 2, 3, 5, 8, 13, 21, 34...</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
