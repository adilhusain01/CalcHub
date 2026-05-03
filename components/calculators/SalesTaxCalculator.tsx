"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SalesTaxCalculator() {
  const [price, setPrice] = useState<number | ''>(50);
  const [taxRate, setTaxRate] = useState<number | ''>(8.5);

  const calculate = () => {
    const p = Number(price) || 0;
    const t = Number(taxRate) || 0;
    const taxAmount = p * (t / 100);
    const finalPrice = p + taxAmount;
    return { taxAmount, finalPrice };
  };

  const { taxAmount, finalPrice } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sales Tax Calculator</CardTitle>
        <CardDescription>Calculate final retail price after tax.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Price before tax</Label>
            <Input type="number" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Sales Tax Rate (%)</Label>
            <Input type="number" value={taxRate} onChange={e => setTaxRate(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#ffc107] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Total After Tax</p>
          <p className="text-5xl font-black tracking-tight text-black mb-2">
             ${finalPrice.toFixed(2)}
          </p>
          <div className="mt-4 pt-4 border-t-[3px] border-black text-black">
             <p className="text-xs font-bold uppercase tracking-wider">Tax Amount</p>
             <p className="text-xl font-bold">${taxAmount.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
