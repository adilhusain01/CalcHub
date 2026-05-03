"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoveCalculator() {
  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) return;
    
    // Deterministic algorithm based on character codes
    const combined = (name1.trim().toLowerCase() + name2.trim().toLowerCase()).replace(/\s/g, '');
    let sum = 0;
    for (let i = 0; i < combined.length; i++) {
      sum += combined.charCodeAt(i);
    }
    
    // Map to 1-100
    // Using a seed to make it seemingly random but consistent for the same names
    const percentage = (sum * 13) % 101; 
    setResult(percentage);
  };

  const getMessage = (score: number) => {
    if (score > 85) return "A match made in heaven! ✨💘";
    if (score > 70) return "Very strong potential! 💕";
    if (score > 50) return "There's a spark, see where it goes! ✨";
    if (score > 30) return "Might take some work. 🤔";
    return "Maybe just friends? 😬";
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Love Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate the romantic compatibility between two names.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="space-y-2 flex-1 w-full">
            <Label htmlFor="name1" className="font-bold">Person 1</Label>
            <Input 
              id="name1" 
              type="text" 
              placeholder="Romeo"
              className="border-2 border-black rounded-xl p-4 text-center text-xl font-bold"
              value={name1} 
              onChange={(e) => { setName1(e.target.value); setResult(null); }} 
            />
          </div>
          
          <div className="my-2 md:my-0 animate-pulse">
            <img src="/heart.png" alt="Love" className="w-12 h-12 object-contain drop-shadow-sm" />
          </div>
          
          <div className="space-y-2 flex-1 w-full">
            <Label htmlFor="name2" className="font-bold">Person 2</Label>
            <Input 
              id="name2" 
              type="text" 
              placeholder="Juliet"
              className="border-2 border-black rounded-xl p-4 text-center text-xl font-bold"
              value={name2} 
              onChange={(e) => { setName2(e.target.value); setResult(null); }} 
            />
          </div>
        </div>

        <button 
          onClick={calculateLove}
          disabled={!name1.trim() || !name2.trim()}
          className="w-full py-4 bg-pink-500 text-white text-xl font-black rounded-xl border-4 border-black hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
        >
          CALCULATE LOVE
        </button>

        {result !== null && (
          <div className="mt-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
            <div className="inline-block bg-pink-100 p-8 rounded-full border-4 border-pink-400 shadow-lg relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full animate-ping opacity-20"></div>
              <p className="text-6xl md:text-8xl font-black text-pink-600 relative z-10">{result}%</p>
            </div>
            <p className="text-2xl font-black text-black mt-4">{getMessage(result)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
