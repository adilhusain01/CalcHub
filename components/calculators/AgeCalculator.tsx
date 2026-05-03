"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function AgeCalculator() {
  const [dob, setDob] = useState(() => {
     const d = new Date();
     d.setFullYear(d.getFullYear() - 30);
     return d.toISOString().split('T')[0];
  });

  const calculate = () => {
    if (!dob) return { years: 0, months: 0, days: 0 };
    const today = new Date();
    const birthDate = new Date(dob);
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Prevent negative age
    if (years < 0) {
       return { years: 0, months: 0, days: 0 };
    }

    return { years, months, days };
  };

  const { years, months, days } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Age Calculator</CardTitle>
        <CardDescription>Find your exact age in years, months, and days.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Date of Birth</Label>
          <Input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#ff94e0] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-2">You are exactly</p>
          <div className="flex gap-4 items-baseline flex-wrap">
             <div className="flex flex-col">
                <span className="text-5xl font-black text-white" style={{textShadow: '2px 2px 0 #000'}}>{years}</span>
                <span className="text-sm font-bold uppercase">Years</span>
             </div>
             <div className="flex flex-col">
                <span className="text-5xl font-black text-white" style={{textShadow: '2px 2px 0 #000'}}>{months}</span>
                <span className="text-sm font-bold uppercase">Months</span>
             </div>
             <div className="flex flex-col">
                <span className="text-5xl font-black text-white" style={{textShadow: '2px 2px 0 #000'}}>{days}</span>
                <span className="text-sm font-bold uppercase">Days</span>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
