"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function DiscountCalculator() {
  const [price, setPrice] = useState<number | ''>(120);
  const [discount, setDiscount] = useState<number | ''>(25);

  const calculate = () => {
    const p = Number(price) || 0;
    const d = Number(discount) || 0;
    const savings = (p * d) / 100;
    const finalPrice = p - savings;
    return { savings, finalPrice };
  };

  const { savings, finalPrice } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Discount Calculator</CardTitle>
        <CardDescription>Calculate savings on a purchase.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Original Price</Label>
            <Input type="number" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Discount (%)</Label>
            <Input type="number" value={discount} onChange={e => setDiscount(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#ff6e50] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Final Price</p>
          <p className="text-5xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
            ${finalPrice.toFixed(2)}
          </p>
          <div className="flex gap-2 items-center bg-white border-[2px] border-black px-3 py-1 rounded-full w-max mt-4">
             <span className="font-bold text-sm">You Save:</span>
             <span className="font-black text-sm text-[#ff6e50]">${savings.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
