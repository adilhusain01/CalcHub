"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function ROICalculator() {
  const [investment, setInvestment] = useState<number | ''>(1000);
  const [returnAmount, setReturnAmount] = useState<number | ''>(1500);

  const calculate = () => {
    const inv = Number(investment) || 0;
    const ret = Number(returnAmount) || 0;
    if (inv === 0) return { roi: 0, profit: 0 };
    
    const profit = ret - inv;
    const roi = (profit / inv) * 100;
    return { roi, profit };
  };

  const { roi, profit } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ROI Calculator</CardTitle>
        <CardDescription>Calculate Return on Investment for any expense.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="investment">Initial Investment</Label>
            <Input 
              id="investment" 
              type="number" 
              value={investment} 
              onChange={e => setInvestment(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="return">Final Return Amount</Label>
            <Input 
              id="return" 
              type="number" 
              value={returnAmount} 
              onChange={e => setReturnAmount(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#9ed8a0] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Return On Investment (ROI)</p>
          <p className="text-5xl font-black tracking-tight text-black">
            {roi.toFixed(2)}%
          </p>
          <div className="mt-4 pt-4 border-t-[3px] border-black">
             <p className="text-sm font-bold text-black uppercase tracking-wider">Net Profit</p>
             <p className="text-2xl font-black text-black">${profit.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
