"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function MortgagePayoffCalculator() {
  const [loanBalance, setLoanBalance] = useState<number | ''>(250000);
  const [interestRate, setInterestRate] = useState<number | ''>(5.5);
  const [remainingYears, setRemainingYears] = useState<number | ''>(25);
  const [extraPayment, setExtraPayment] = useState<number | ''>(500);

  const calculatePayoff = () => {
    if (!loanBalance || !interestRate || !remainingYears) return null;

    const r = (interestRate / 100) / 12;
    const n = remainingYears * 12;
    const p = loanBalance;

    // Standard Monthly Payment
    let standardMonthly = 0;
    if (r > 0) {
      standardMonthly = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      standardMonthly = p / n;
    }

    // Standard Total Interest
    const standardTotalInterest = (standardMonthly * n) - p;

    // With Extra Payment
    const newMonthly = standardMonthly + Number(extraPayment || 0);
    let newMonths = 0;
    let newTotalInterest = 0;
    let balance = p;

    if (newMonthly > standardMonthly) {
      if (r > 0) {
        newMonths = Math.log(newMonthly / (newMonthly - balance * r)) / Math.log(1 + r);
      } else {
        newMonths = balance / newMonthly;
      }
      newMonths = Math.ceil(newMonths);
      // Actual exact interest requires loop or exact formula, simple approx:
      newTotalInterest = (newMonthly * newMonths) - p; // rough since last payment might be smaller
    } else {
      newMonths = n;
      newTotalInterest = standardTotalInterest;
    }

    const monthsSaved = n - newMonths;
    const yearsSaved = Math.floor(monthsSaved / 12);
    const monthsSavedRemainder = monthsSaved % 12;
    const interestSaved = standardTotalInterest - newTotalInterest;

    return {
      standardMonthly,
      newMonths,
      yearsSaved,
      monthsSavedRemainder,
      interestSaved,
      newTotalInterest
    };
  };

  const result = calculatePayoff();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Mortgage Payoff</CardTitle>
        <CardDescription className="text-black font-bold">See how extra payments can shorten your mortgage term.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loanBalance" className="font-bold">Remaining Loan Balance ($)</Label>
            <Input 
              id="loanBalance" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={loanBalance} 
              onChange={(e) => setLoanBalance(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="interestRate" className="font-bold">Interest Rate (%)</Label>
              <Input 
                id="interestRate" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={interestRate} 
                onChange={(e) => setInterestRate(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="remainingYears" className="font-bold">Remaining Years</Label>
              <Input 
                id="remainingYears" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={remainingYears} 
                onChange={(e) => setRemainingYears(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="extraPayment" className="font-bold text-green-700">Extra Monthly Payment ($)</Label>
            <Input 
              id="extraPayment" 
              type="number" 
              className="border-[3px] border-black rounded-xl bg-green-50"
              value={extraPayment} 
              onChange={(e) => setExtraPayment(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Time Saved</p>
              <p className="text-4xl font-black text-black">
                {result.yearsSaved} <span className="text-xl">yrs</span> {result.monthsSavedRemainder > 0 && `${result.monthsSavedRemainder} mo`}
              </p>
              <p className="text-sm text-green-700 mt-2 font-bold">Interest Saved: ${result.interestSaved > 0 ? result.interestSaved.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl border-[3px] border-black">
                <p className="font-bold text-black">Standard Payment</p>
                <p className="text-2xl font-black text-black">${result.standardMonthly.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className="text-xs text-gray-600 mt-1">/ month</p>
              </div>
              <div className="bg-[#4a8eff] p-4 rounded-xl border-[3px] border-black">
                <p className="font-bold text-black">New Payment</p>
                <p className="text-2xl font-black text-black">${(result.standardMonthly + Number(extraPayment || 0)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className="text-xs text-blue-600 mt-1">/ month</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
