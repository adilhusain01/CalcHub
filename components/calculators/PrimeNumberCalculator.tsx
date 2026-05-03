"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PrimeNumberCalculator() {
  const [number, setNumber] = useState<number | ''>(17);

  const isPrime = (n: number) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const getNextPrime = (n: number) => {
    let next = n <= 0 ? 1 : n + 1;
    while (!isPrime(next)) {
      next++;
    }
    return next;
  };

  const calculate = () => {
    if (number === '' || !Number.isInteger(number)) return null;
    
    const primeStatus = isPrime(number);
    const nextPrime = getNextPrime(number);
    
    return {
      isPrime: primeStatus,
      nextPrime
    };
  };

  const result = calculate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Prime Number</CardTitle>
        <CardDescription className="text-black font-bold">Check if a number is prime and find the next prime number.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="number" className="font-bold">Enter an Integer</Label>
            <Input 
              id="number" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={number} 
              onChange={(e) => setNumber(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            {result.isPrime ? (
              <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-1">Result</p>
                <p className="text-4xl font-black text-black">{number} is a Prime Number! ✨</p>
              </div>
            ) : (
              <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-1">Result</p>
                <p className="text-3xl font-black text-black">{number} is NOT a Prime Number.</p>
              </div>
            )}
            
            <div className="bg-blue-50 p-4 rounded-xl border-[3px] border-black text-center">
              <p className="font-bold text-black">Next Prime Number</p>
              <p className="text-2xl font-black text-black">{result.nextPrime}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
