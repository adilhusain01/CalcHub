"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function CaffeineCrashCalculator() {
  const [mg, setMg] = useState<number | ''>(95); // Cup of coffee
  const [hoursAgo, setHoursAgo] = useState<number | ''>(0);

  // Caffeine half life is ~5 hours
  const currentLevel = (Number(mg) || 0) * Math.pow(0.5, (Number(hoursAgo) || 0) / 5);
  const hoursUntilSleep = Math.max(0, -5 * Math.log2(50 / (Math.max(1, Number(mg) || 0))) - (Number(hoursAgo) || 0)); // Assuming 50mg is safe for sleep

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#6b4c3a] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-white">Caffeine Crash</CardTitle>
        <CardDescription className="text-[#f3e5ca] font-bold">When will the jitters stop and sleep begin?</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Caffeine Amount (mg)</Label>
            <Input type="number" value={mg} onChange={e => setMg(e.target.value === '' ? '' : Number(e.target.value))} />
            <p className="text-xs text-gray-500 font-bold">Coffee: ~95mg | Energy Drink: ~150mg</p>
          </div>
          <div className="space-y-2">
            <Label>Hours Since Consumed</Label>
            <Input type="number" value={hoursAgo} onChange={e => setHoursAgo(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-[24px] border-[3px] border-black bg-[#f8d8a7] p-4 text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black text-xs font-bold uppercase tracking-wider mb-1">Current Level</p>
            <p className="text-3xl font-black text-black">{currentLevel.toFixed(1)} mg</p>
          </div>
          
          <div className="rounded-[24px] border-[3px] border-black bg-[#a7e0a5] p-4 text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black text-xs font-bold uppercase tracking-wider mb-1">Ready for Sleep in</p>
            <p className="text-3xl font-black text-black">{(Number(mg)||0) <= 50 || currentLevel <= 50 ? 'Now!' : `${hoursUntilSleep.toFixed(1)} hrs`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
