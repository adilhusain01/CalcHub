"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function ProfitMarginCalculator() {
  const [cost, setCost] = useState<number | ''>(50);
  const [revenue, setRevenue] = useState<number | ''>(85);

  const calculate = () => {
    const c = Number(cost) || 0;
    const r = Number(revenue) || 0;
    if (r === 0) return { margin: 0, markup: 0, profit: 0 };
    
    const profit = r - c;
    const margin = (profit / r) * 100;
    const markup = c > 0 ? (profit / c) * 100 : 0;
    
    return { margin, markup, profit };
  };

  const { margin, markup, profit } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profit Margin</CardTitle>
        <CardDescription>Calculate gross profit margin and markup.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Cost of Goods Sold (COGS)</Label>
            <Input type="number" value={cost} onChange={e => setCost(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Revenue (Sales Price)</Label>
            <Input type="number" value={revenue} onChange={e => setRevenue(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#4895ff] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Gross Margin</p>
          <p className="text-5xl font-black tracking-tight text-white" style={{textShadow: '2px 2px 0 #000'}}>
            {margin.toFixed(2)}%
          </p>
          <div className="grid grid-cols-2 mt-4 pt-4 border-t-[3px] border-black text-black">
             <div>
                <p className="text-xs font-bold uppercase tracking-wider">Markup</p>
                <p className="text-xl font-black">{markup.toFixed(2)}%</p>
             </div>
             <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-wider">Gross Profit</p>
                <p className="text-xl font-black">${profit.toFixed(2)}</p>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
