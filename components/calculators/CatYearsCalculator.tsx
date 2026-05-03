"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function CatYearsCalculator() {
  const [catAge, setCatAge] = useState<number | ''>(5);

  const calculateHumanAge = () => {
    const age = Number(catAge) || 0;
    if (age === 0) return 0;
    if (age === 1) return 15;
    if (age === 2) return 24;
    return 24 + ((age - 2) * 4);
  };

  const humanAge = calculateHumanAge();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f8d8a7] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-black">Cat Years Converter</CardTitle>
        <CardDescription className="text-black font-bold">Find out exactly how old your feline overlord is.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2 max-w-xs mx-auto">
          <Label className="text-center block text-lg font-black">Cat's Age (Years)</Label>
          <Input className="text-center text-3xl font-black h-16" type="number" value={catAge} onChange={e => setCatAge(e.target.value === '' ? '' : Number(e.target.value))} />
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#4a8eff] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">Human Age Equivalent</p>
          <p className="text-5xl font-black text-white">{humanAge}</p>
          <p className="mt-2 text-sm font-bold text-white opacity-90">years old</p>
        </div>
      </CardContent>
    </Card>
  );
}
