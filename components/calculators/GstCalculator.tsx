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
    <Card className="w-full bg-white shadow-xl shadow-gray-200/50">
      <CardHeader className="bg-gray-50/50 border-b border-gray-100">
        <CardTitle>GST Calculator</CardTitle>
        <CardDescription>Quickly calculate inclusive and exclusive GST.</CardDescription>
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

        <div className="rounded-xl border border-gray-200 p-6 bg-gray-50 mt-6 shadow-sm">
          <div className="space-y-3">
             <div className="flex justify-between text-sm">
                <span className="text-gray-500">Net Price {mode === 'remove' && '(Before GST)'}</span>
                <span className="font-semibold text-gray-900">${results.netPrice.toFixed(2)}</span>
             </div>
             <div className="flex justify-between text-sm text-blue-600">
                <span>+ GST ({rate}%)</span>
                <span className="font-semibold">${results.gstAmount.toFixed(2)}</span>
             </div>
             <div className="pt-3 border-t border-gray-200 flex justify-between items-center mt-2">
                <span className="font-bold text-gray-900 uppercase tracking-wider text-sm">Gross Price</span>
                <span className="text-2xl font-bold tracking-tight text-gray-900">${results.totalPrice.toFixed(2)}</span>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
