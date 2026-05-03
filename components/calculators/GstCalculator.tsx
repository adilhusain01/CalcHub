"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function GstCalculator() {
  const [amount, setAmount] = useState<number | ''>(1000);
  const [rate, setRate] = useState<number>(10);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const calculateGST = () => {
    const amt = Number(amount) || 0;
    const r = Number(rate) || 0;

    if (mode === 'add') {
      const gstAmount = (amt * r) / 100;
      return {
        netPrice: amt,
        gstAmount,
        totalPrice: amt + gstAmount
      };
    } else {
      const netPrice = amt / (1 + (r / 100));
      const gstAmount = amt - netPrice;
      return {
        netPrice,
        gstAmount,
        totalPrice: amt
      };
    }
  };

  const results = calculateGST();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">GST Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Quickly calculate inclusive and exclusive GST.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <Button 
            className="flex-1 rounded-md" 
            variant={mode === 'add' ? 'default' : 'ghost'} 
            onClick={() => setMode('add')}
          >
            Add GST
          </Button>
          <Button 
            className="flex-1 rounded-md" 
            variant={mode === 'remove' ? 'default' : 'ghost'} 
            onClick={() => setMode('remove')}
          >
            Remove GST
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">{mode === 'add' ? 'Base Amount (Net Price)' : 'Total Amount (Gross Price)'}</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input 
                id="amount" 
                type="number" 
                className="pl-7"
                value={amount} 
                onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>GST Rate</Label>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-4">
              {[5, 10, 15, 20].map((pct) => (
                <Button 
                  key={pct}
                  variant={rate === pct ? "outline" : "ghost"}
                  onClick={() => setRate(pct)}
                  className={rate === pct ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold" : "border border-gray-200"}
                >
                  {pct}%
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#a7e0a5] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <div className="space-y-3">
             <div className="flex justify-between text-sm font-bold">
                <span className="text-black">Net Price {mode === 'remove' && '(Before GST)'}</span>
                <span className="font-black text-black">${results.netPrice.toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-sm font-bold">
                <span>+ GST ({rate}%)</span>
                <span className="font-black">${results.gstAmount.toFixed(2)}</span>
             </div>
             <div className="pt-3 border-t-2 border-black flex justify-between items-center mt-2">
                <span className="font-black text-black uppercase tracking-wider text-sm">Gross Price</span>
                <span className="text-2xl md:text-3xl font-black tracking-tight text-black">${results.totalPrice.toFixed(2)}</span>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
