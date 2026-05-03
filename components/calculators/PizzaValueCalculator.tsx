"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function PizzaValueCalculator() {
  const [size1, setSize1] = useState<number | ''>(12);
  const [price1, setPrice1] = useState<number | ''>(15);
  const [size2, setSize2] = useState<number | ''>(18);
  const [price2, setPrice2] = useState<number | ''>(25);

  const calcArea = (diameter: number) => Math.PI * Math.pow(diameter / 2, 2);

  const area1 = calcArea(Number(size1) || 0);
  const area2 = calcArea(Number(size2) || 0);

  const pricePerSqIn1 = area1 > 0 ? (Number(price1) || 0) / area1 : 0;
  const pricePerSqIn2 = area2 > 0 ? (Number(price2) || 0) / area2 : 0;

  const betterDeal = pricePerSqIn1 < pricePerSqIn2 ? 'Pizza 1' : pricePerSqIn2 < pricePerSqIn1 ? 'Pizza 2' : 'Tie';
  const sizeDiff = area1 > 0 && area2 > 0 ? Math.abs((area2 - area1) / Math.min(area1, area2) * 100) : 0;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#ffcc00] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Pizza Value Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Find out which pizza is the better deal per square inch.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 p-4 border-[3px] border-black rounded-[16px] bg-[#f9f9f9] shadow-[4px_4px_0_0_#000]">
            <h3 className="font-black text-xl">Pizza 1</h3>
            <div className="space-y-2"><Label>Diameter (inches)</Label><Input type="number" value={size1} onChange={e => setSize1(e.target.value === '' ? '' : Number(e.target.value))} /></div>
            <div className="space-y-2"><Label>Price ($)</Label><Input type="number" value={price1} onChange={e => setPrice1(e.target.value === '' ? '' : Number(e.target.value))} /></div>
            <div className="pt-2"><p className="text-sm font-bold">Area: {area1.toFixed(2)} sq in</p><p className="text-sm font-bold">Cost: ${(pricePerSqIn1).toFixed(2)} / sq in</p></div>
          </div>
          <div className="space-y-4 p-4 border-[3px] border-black rounded-[16px] bg-[#f9f9f9] shadow-[4px_4px_0_0_#000]">
            <h3 className="font-black text-xl">Pizza 2</h3>
            <div className="space-y-2"><Label>Diameter (inches)</Label><Input type="number" value={size2} onChange={e => setSize2(e.target.value === '' ? '' : Number(e.target.value))} /></div>
            <div className="space-y-2"><Label>Price ($)</Label><Input type="number" value={price2} onChange={e => setPrice2(e.target.value === '' ? '' : Number(e.target.value))} /></div>
            <div className="pt-2"><p className="text-sm font-bold">Area: {area2.toFixed(2)} sq in</p><p className="text-sm font-bold">Cost: ${(pricePerSqIn2).toFixed(2)} / sq in</p></div>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-[#a7e0a5] p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Verdict</p>
          <p className="text-3xl font-black text-black">{betterDeal === 'Tie' ? 'Both are equal value' : `${betterDeal} is the better deal!`}</p>
          {area1 > 0 && area2 > 0 && betterDeal !== 'Tie' && (
            <p className="mt-2 font-bold">
              The larger pizza is {sizeDiff.toFixed(1)}% bigger by area.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
