"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function DaysBetweenCalculator() {
  const [start, setStart] = useState(() => {
     const d = new Date();
     return d.toISOString().split('T')[0];
  });
  const [end, setEnd] = useState(() => {
     const d = new Date();
     d.setDate(d.getDate() + 30);
     return d.toISOString().split('T')[0];
  });

  const calculate = () => {
    if (!start || !end) return 0;
    const d1 = new Date(start);
    const d2 = new Date(end);
    
    // time difference in milliseconds
    const timeDiff = Math.abs(d2.getTime() - d1.getTime());
    
    // ms per day
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
  };

  const days = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Days Between</CardTitle>
        <CardDescription>Find out exactly how many days apart two dates are.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Start Date</Label>
            <Input type="date" value={start} onChange={e => setStart(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>End Date</Label>
            <Input type="date" value={end} onChange={e => setEnd(e.target.value)} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#4a8eff] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Difference</p>
          <p className="text-5xl font-black tracking-tight text-white" style={{textShadow: '2px 2px 0 #000'}}>
             {days} <span className="text-2xl text-black" style={{textShadow: 'none'}}>days</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
