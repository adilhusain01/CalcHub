"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function RuleOf72Calculator() {
  const [rate, setRate] = useState<number | ''>(8);

  const calculate = () => {
    const r = Number(rate) || 0;
    if (r <= 0) return 0;
    return 72 / r;
  };

  const years = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rule of 72 Calculator</CardTitle>
        <CardDescription>Estimate how long it will take to double your investment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Annual Interest Rate (%)</Label>
          <Input type="number" value={rate} onChange={e => setRate(e.target.value === '' ? '' : Number(e.target.value))} />
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#af8fff] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Time to double</p>
          <p className="text-5xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
            {years > 0 ? years.toFixed(1) : 0} <span className="text-2xl">years</span>
          </p>
          <p className="text-sm font-bold text-black mt-4">
             Formula: 72 ÷ Interest Rate
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
