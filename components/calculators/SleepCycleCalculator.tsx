"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function SleepCycleCalculator() {
  const [wakeTime, setWakeTime] = useState<string>('07:00');

  const calculateBedTimes = () => {
    if (!wakeTime) return null;
    
    // Parse wake time
    const [hours, minutes] = wakeTime.split(':').map(Number);
    const wakeDate = new Date();
    wakeDate.setHours(hours, minutes, 0, 0);
    
    // A sleep cycle is 90 minutes. We want 5, 6, or 7 cycles + 15 mins to fall asleep.
    // So we subtract cycles * 90 + 15 from wake time.
    
    const formatTime = (date: Date) => {
      let h = date.getHours();
      const m = date.getMinutes();
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      h = h ? h : 12; // the hour '0' should be '12'
      return `${h}:${m < 10 ? '0' + m : m} ${ampm}`;
    };

    const getBedTime = (cycles: number) => {
      const d = new Date(wakeDate);
      d.setMinutes(d.getMinutes() - (cycles * 90 + 15));
      return formatTime(d);
    };

    return [
      { cycles: 6, time: getBedTime(6), duration: '9 hours', optimal: true },
      { cycles: 5, time: getBedTime(5), duration: '7.5 hours', optimal: true },
      { cycles: 4, time: getBedTime(4), duration: '6 hours', optimal: false },
      { cycles: 3, time: getBedTime(3), duration: '4.5 hours', optimal: false },
    ];
  };

  const bedTimes = calculateBedTimes();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Sleep Cycle Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Find the optimal times to go to bed to wake up refreshed.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wakeTime" className="font-bold text-lg">I want to wake up at:</Label>
            <Input 
              id="wakeTime" 
              type="time" 
              className="border-2 border-black rounded-xl text-xl p-6 text-center"
              value={wakeTime} 
              onChange={(e) => setWakeTime(e.target.value)} 
            />
          </div>
        </div>

        {bedTimes && (
          <div className="mt-8 space-y-4">
            <p className="font-bold text-gray-700">You should try to fall asleep at one of these times:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bedTimes.map((bt, i) => (
                <div key={i} className={`p-4 rounded-2xl border-2 text-center shadow-[4px_4px_0_0_#000] ${bt.optimal ? 'bg-[#4a8eff] border-indigo-300' : 'bg-gray-100 border-gray-300'}`}>
                  <p className={`text-2xl font-black ${bt.optimal ? 'text-black' : 'text-gray-700'}`}>{bt.time}</p>
                  <p className={`text-sm mt-1 font-bold ${bt.optimal ? 'text-indigo-700' : 'text-gray-500'}`}>{bt.cycles} Cycles ({bt.duration})</p>
                  {bt.optimal && <span className="inline-block mt-2 text-xs font-black bg-indigo-200 text-black px-2 py-1 rounded-full uppercase">Optimal</span>}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center font-medium mt-4">
              * Times shown factor in the average 15 minutes it takes to fall asleep.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
