"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function InflationCalculator() {
  const [initialAmount, setInitialAmount] = useState<number | ''>(100);
  const [inflationRate, setInflationRate] = useState<number | ''>(3.5);
  const [years, setYears] = useState<number | ''>(10);

  const calculateInflation = () => {
    if (!initialAmount || !inflationRate || !years) return 0;
    // Future Value = Present Value * (1 + inflation rate)^years
    const rate = inflationRate / 100;
    return initialAmount * Math.pow(1 + rate, years);
  };

  const calculateBuyingPower = () => {
    if (!initialAmount || !inflationRate || !years) return 0;
    // Buying Power = Present Value / (1 + inflation rate)^years
    const rate = inflationRate / 100;
    return initialAmount / Math.pow(1 + rate, years);
  };

  const futureCost = calculateInflation();
  const buyingPower = calculateBuyingPower();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Inflation Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate the true buying power of your money over time.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="initialAmount" className="font-bold">Initial Amount ($)</Label>
            <Input 
              id="initialAmount" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={initialAmount} 
              onChange={(e) => setInitialAmount(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="inflationRate" className="font-bold">Annual Inflation Rate (%)</Label>
              <Input 
                id="inflationRate" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={inflationRate} 
                onChange={(e) => setInflationRate(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="years" className="font-bold">Time Period (Years)</Label>
              <Input 
                id="years" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={years} 
                onChange={(e) => setYears(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black font-extrabold text-sm mb-1 uppercase tracking-wider">Future Cost</p>
            <p className="text-4xl font-black text-black">
              ${futureCost > 0 ? futureCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
            </p>
            <p className="text-xs text-black mt-2 font-bold opacity-80">What ${initialAmount} will cost in {years || 0} years.</p>
          </div>
          
          <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black font-extrabold text-sm mb-1 uppercase tracking-wider">Future Buying Power</p>
            <p className="text-4xl font-black text-black">
              ${buyingPower > 0 ? buyingPower.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
            </p>
            <p className="text-xs text-black mt-2 font-bold opacity-80">What ${initialAmount} today will be worth in {years || 0} years.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
