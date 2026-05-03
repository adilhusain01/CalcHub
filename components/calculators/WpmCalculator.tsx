"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function WpmCalculator() {
  const [chars, setChars] = useState<number | ''>(250);
  const [seconds, setSeconds] = useState<number | ''>(60);

  // Standard WPM formula: (Characters / 5) / (Seconds / 60)
  const words = (Number(chars) || 0) / 5;
  const minutes = Math.max(1, (Number(seconds) || 1)) / 60;
  const wpm = words / minutes;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#34d399] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-black">WPM Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate your true Typing Words Per Minute.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Characters Typed</Label>
            <Input type="number" value={chars} onChange={e => setChars(e.target.value === '' ? '' : Number(e.target.value))} />
            <p className="text-xs text-gray-500 font-bold">Includes spaces</p>
          </div>
          <div className="space-y-2">
            <Label>Time Taken (Secs)</Label>
            <Input type="number" value={seconds} onChange={e => setSeconds(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-white p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Speed</p>
          <p className="text-5xl font-black text-black">{wpm.toFixed(0)} <span className="text-2xl">WPM</span></p>
          <p className="mt-2 text-sm font-bold">Average typist speed is ~40 WPM.</p>
        </div>
      </CardContent>
    </Card>
  );
}
