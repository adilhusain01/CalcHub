"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function TimeDurationCalculator() {
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('17:30');

  const calculate = () => {
    if (!start || !end) return { hours: 0, mins: 0 };
    
    // Parse times
    const [h1, m1] = start.split(':').map(Number);
    const [h2, m2] = end.split(':').map(Number);
    
    let totalMins1 = (h1 * 60) + m1;
    let totalMins2 = (h2 * 60) + m2;
    
    if (totalMins2 < totalMins1) {
       // Assume spans next day
       totalMins2 += 24 * 60;
    }
    
    const diff = totalMins2 - totalMins1;
    const hours = Math.floor(diff / 60);
    const mins = diff % 60;
    
    return { hours, mins };
  };

  const { hours, mins } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Time Duration Calculator</CardTitle>
        <CardDescription>Calculate hours and minutes between two times.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Start Time</Label>
            <Input type="time" value={start} onChange={e => setStart(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>End Time</Label>
            <Input type="time" value={end} onChange={e => setEnd(e.target.value)} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#af8fff] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Time Elapsed</p>
          <div className="flex gap-4 items-baseline mt-2">
             <p className="text-5xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
                {hours} <span className="text-2xl text-black" style={{textShadow: 'none'}}>hrs</span>
             </p>
             <p className="text-5xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
                {mins} <span className="text-2xl text-black" style={{textShadow: 'none'}}>mins</span>
             </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
