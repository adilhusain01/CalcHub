"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function LotteryOddsCalculator() {
  const [totalBalls, setTotalBalls] = useState<number | ''>(69);
  const [pickBalls, setPickBalls] = useState<number | ''>(5);
  
  const calculateOdds = () => {
    const t = Number(totalBalls) || 0;
    const p = Number(pickBalls) || 0;
    if (t < p || p <= 0) return 0;
    
    // Combination formula: n! / (r! * (n-r)!)
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result = result * (t - i + 1) / i;
    }
    return result;
  };

  const odds = calculateOdds();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#ff6e50] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black text-white">Lottery Dream Crusher</CardTitle>
        <CardDescription className="text-white font-bold">Calculate your exact odds of winning the jackpot.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Total Pool of Numbers (e.g. 69)</Label><Input type="number" value={totalBalls} onChange={e => setTotalBalls(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          <div className="space-y-2"><Label>Numbers to Pick (e.g. 5)</Label><Input type="number" value={pickBalls} onChange={e => setPickBalls(e.target.value === '' ? '' : Number(e.target.value))} /></div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#f9f9f9] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Your Odds</p>
          <p className="text-4xl sm:text-5xl font-black text-black">1 in {odds.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p className="mt-4 text-xs font-bold text-gray-500">You are more likely to be struck by lightning (1 in 15,300).</p>
        </div>
      </CardContent>
    </Card>
  );
}
