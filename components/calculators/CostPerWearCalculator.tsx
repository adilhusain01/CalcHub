"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function CostPerWearCalculator() {
  const [price, setPrice] = useState<number | ''>(150);
  const [wearsPerMonth, setWearsPerMonth] = useState<number | ''>(4);
  const [yearsKept, setYearsKept] = useState<number | ''>(3);

  const totalWears = (Number(wearsPerMonth) || 0) * 12 * (Number(yearsKept) || 0);
  const cpw = totalWears > 0 ? (Number(price) || 0) / totalWears : 0;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#a7e0a5] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Cost Per Wear</CardTitle>
        <CardDescription className="text-black font-bold">Justify expensive clothing purchases using girl math.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2"><Label>Item Price ($)</Label><Input type="number" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          <div className="space-y-2"><Label>Wears / Month</Label><Input type="number" value={wearsPerMonth} onChange={e => setWearsPerMonth(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          <div className="space-y-2"><Label>Years Kept</Label><Input type="number" value={yearsKept} onChange={e => setYearsKept(e.target.value === '' ? '' : Number(e.target.value))} /></div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#f3e5ca] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Cost Per Wear</p>
          <p className="text-5xl font-black text-black">${cpw.toFixed(2)}</p>
          <p className="mt-2 font-bold text-sm">Based on {totalWears} total wears.</p>
        </div>
      </CardContent>
    </Card>
  );
}
