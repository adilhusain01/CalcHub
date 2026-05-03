"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function TipSplitCalculator() {
  const [bill, setBill] = useState<number | ''>(85.50);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [people, setPeople] = useState<number | ''>(2);

  const calculate = () => {
    const billAmt = Number(bill) || 0;
    const numPeople = Number(people) || 1;
    
    const totalTip = (billAmt * tipPercentage) / 100;
    const totalBill = billAmt + totalTip;
    const perPerson = totalBill / Math.max(1, numPeople);
    
    return {
      tipAmount: totalTip,
      totalBill,
      perPerson
    };
  };

  const results = calculate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Tip & Bill Splitter</CardTitle>
        <CardDescription className="text-black font-bold">Split bills and calculate tips instantly.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bill">Total Bill Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input 
                id="bill" 
                type="number" 
                className="pl-7 text-lg"
                value={bill} 
                onChange={(e) => setBill(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Tip Percentage</Label>
              <span className="text-sm font-semibold text-black">{tipPercentage}%</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-4">
              {[15, 18, 20, 25].map((pct) => (
                <Button 
                  key={pct}
                  variant={tipPercentage === pct ? "default" : "outline"}
                  onClick={() => setTipPercentage(pct)}
                  className={cn(tipPercentage === pct && "shadow-inner ring-1 ring-blue-600")}
                >
                  {pct}%
                </Button>
              ))}
            </div>
            {/* Custom Tip Input Wrapper */}
            <div className="flex items-center gap-4 mt-3">
               <input 
                  type="range" 
                  min="0" max="50" step="1" 
                  className="w-full accent-blue-600" 
                  value={tipPercentage}
                  onChange={(e) => setTipPercentage(Number(e.target.value))}
               />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="people">Number of People</Label>
            <div className="flex items-center">
               <button 
                  onClick={() => setPeople(Math.max(1, Number(people) - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-xl font-medium"
               >-</button>
               <Input 
                id="people" 
                type="number" 
                min="1"
                className="rounded-none text-center border-l-0 border-r-0"
                value={people} 
                onChange={(e) => setPeople(e.target.value === '' ? '' : Number(e.target.value))} 
               />
               <button 
                  onClick={() => setPeople(Number(people) + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-xl font-medium"
               >+</button>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#f9c2e0] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-black font-bold text-sm mb-1">Total per person</p>
              <p className="text-4xl md:text-5xl font-black tracking-tight text-black">
                ${results.perPerson.toFixed(2)}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between mt-4 border-t-2 border-black pt-4 text-sm font-bold">
            <div>
              <p className="text-black">Total Tip</p>
              <p className="text-black">${results.tipAmount.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-black">Total Bill (w/ Tip)</p>
              <p className="text-black">${results.totalBill.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
