"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function DebtSnowballCalculator() {
  const [balance, setBalance] = useState<number | ''>(5000);
  const [interestRate, setInterestRate] = useState<number | ''>(18);
  const [minPayment, setMinPayment] = useState<number | ''>(150);
  const [extraPayment, setExtraPayment] = useState<number | ''>(50);

  const calculatePayoff = () => {
    if (!balance || !interestRate || !minPayment) return null;
    
    let currentBalance = Number(balance);
    const monthlyRate = (Number(interestRate) / 100) / 12;
    const payment = Number(minPayment) + Number(extraPayment || 0);
    
    // Check if payment is large enough to cover interest
    if (payment <= currentBalance * monthlyRate) {
      return { error: "Payment must be greater than monthly interest.", months: 0, totalInterest: 0 };
    }
    
    let months = 0;
    let totalInterest = 0;
    
    // Cap at 360 months (30 years) to prevent infinite loops
    while (currentBalance > 0 && months < 360) {
      const interestCharge = currentBalance * monthlyRate;
      totalInterest += interestCharge;
      
      currentBalance = currentBalance + interestCharge - payment;
      months++;
    }
    
    return { error: null, months, totalInterest };
  };

  const result = calculatePayoff();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Debt Payoff Calculator</CardTitle>
        <CardDescription className="text-black font-bold">See how fast you can become debt-free with extra payments.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="balance" className="font-bold">Total Balance ($)</Label>
            <Input 
              id="balance" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={balance} 
              onChange={(e) => setBalance(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interestRate" className="font-bold">Interest Rate (%)</Label>
            <Input 
              id="interestRate" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={interestRate} 
              onChange={(e) => setInterestRate(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="minPayment" className="font-bold">Minimum Payment ($)</Label>
            <Input 
              id="minPayment" 
              type="number" 
              className="border-2 border-black rounded-xl p-4"
              value={minPayment} 
              onChange={(e) => setMinPayment(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="extraPayment" className="font-bold">Extra Monthly Payment ($)</Label>
            <Input 
              id="extraPayment" 
              type="number" 
              className="border-2 border-black rounded-xl p-4 bg-green-50 border-green-300"
              value={extraPayment} 
              onChange={(e) => setExtraPayment(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {result && (
          <div className="mt-8">
            {result.error ? (
              <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center text-black font-bold">
                {result.error}
              </div>
            ) : (
              <div className="bg-[#4a8eff] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-black font-bold text-sm mb-2 uppercase tracking-wide">Time to Payoff</p>
                <p className="text-6xl font-black text-black mb-2">
                  {Math.floor(result.months / 12)} <span className="text-3xl">Yrs</span> {result.months % 12} <span className="text-3xl">Mos</span>
                </p>
                
                <div className="mt-6 p-4 bg-white rounded-xl border-[3px] border-black">
                  <p className="text-gray-600 font-bold text-sm">Total Interest Paid</p>
                  <p className="text-2xl font-black text-black">${result.totalInterest.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
