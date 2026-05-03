"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number | ''>(5000);
  const [rate, setRate] = useState<number | ''>(7);
  const [years, setYears] = useState<number | ''>(10);
  const [contribution, setContribution] = useState<number | ''>(100);

  const calculate = () => {
    const P = Number(principal) || 0;
    const r = (Number(rate) || 0) / 100;
    const t = Number(years) || 0;
    const PMT = Number(contribution) || 0;
    const n = 12; // monthly compounding

    // A = P(1 + r/n)^(nt) + PMT × {[(1 + r/n)^(nt) - 1] / (r/n)}
    const pmtFutureValue = r === 0 
        ? PMT * n * t 
        : PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    const total = P * Math.pow(1 + r / n, n * t) + pmtFutureValue;
    const totalContributed = P + (PMT * n * t);
    const totalInterest = total - totalContributed;

    return { total, totalContributed, totalInterest };
  };

  const { total, totalContributed, totalInterest } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Compound Interest</CardTitle>
        <CardDescription>See how your money grows over time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Initial Deposit</Label>
            <Input type="number" value={principal} onChange={e => setPrincipal(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Monthly Contribution</Label>
            <Input type="number" value={contribution} onChange={e => setContribution(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Interest Rate (%)</Label>
            <Input type="number" value={rate} onChange={e => setRate(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Years to Grow</Label>
            <Input type="number" value={years} onChange={e => setYears(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#4a8eff] shadow-[4px_4px_0_0_#000]">
          <p className="text-white text-sm font-extrabold uppercase tracking-wider mb-1">Total Future Value</p>
          <p className="text-4xl font-black tracking-tight text-white">
            ${total.toFixed(2)}
          </p>
          <div className="flex justify-between mt-4 pt-4 border-t-[3px] border-black text-white">
             <div>
                <p className="text-xs font-bold uppercase tracking-wider">Total Contributions</p>
                <p className="text-lg font-black">${totalContributed.toFixed(2)}</p>
             </div>
             <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-wider">Total Interest</p>
                <p className="text-lg font-black">${totalInterest.toFixed(2)}</p>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
