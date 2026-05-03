"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function StartupRunwayCalculator() {
  const [cashBalance, setCashBalance] = useState<number | ''>(500000);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number | ''>(10000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number | ''>(45000);

  const calculateRunway = () => {
    if (!cashBalance || monthlyExpenses === '') return null;
    
    const burnRate = Number(monthlyExpenses) - Number(monthlyRevenue || 0);
    
    if (burnRate <= 0) {
      return { infinite: true };
    }
    
    const months = cashBalance / burnRate;
    
    return {
      infinite: false,
      months,
      burnRate
    };
  };

  const result = calculateRunway();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Startup Runway</CardTitle>
        <CardDescription className="text-black font-bold">Calculate how many months your business can survive before running out of cash.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cashBalance" className="font-bold">Total Cash Balance ($)</Label>
            <Input 
              id="cashBalance" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={cashBalance} 
              onChange={(e) => setCashBalance(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="monthlyRevenue" className="font-bold">Monthly Revenue ($)</Label>
              <Input 
                id="monthlyRevenue" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={monthlyRevenue} 
                onChange={(e) => setMonthlyRevenue(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="monthlyExpenses" className="font-bold">Monthly Expenses ($)</Label>
              <Input 
                id="monthlyExpenses" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={monthlyExpenses} 
                onChange={(e) => setMonthlyExpenses(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            {result.infinite ? (
              <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-1">Your Runway is</p>
                <p className="text-4xl font-black text-black">Infinite! 🚀</p>
                <p className="text-sm text-green-700 mt-2 font-bold">You are profitable and generating positive cash flow.</p>
              </div>
            ) : (
              <>
                <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                  <p className="text-black font-bold text-sm mb-1">Cash Runway Remaining</p>
                  <p className="text-5xl font-black text-black">{(result.months as number).toFixed(1)} <span className="text-2xl font-bold text-black">months</span></p>
                  <p className="text-xs text-red-700 mt-2 font-medium">Time until you run out of cash at the current burn rate.</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-xl border-[3px] border-black text-center">
                  <p className="font-bold text-black">Net Burn Rate</p>
                  <p className="text-2xl font-black text-black">${(result.burnRate as number).toLocaleString()} <span className="text-sm">/ mo</span></p>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
