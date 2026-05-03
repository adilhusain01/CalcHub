"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function LoanPayoffCalculator() {
  const [balance, setBalance] = useState<number | ''>(20000);
  const [rate, setRate] = useState<number | ''>(5);
  const [monthlyPayment, setMonthlyPayment] = useState<number | ''>(400);

  const calculate = () => {
    let P = Number(balance) || 0;
    const r = (Number(rate) || 0) / 100 / 12;
    const pmt = Number(monthlyPayment) || 0;

    if (pmt <= P * r) {
       return { months: Infinity, totalInterest: Infinity };
    }

    let months = 0;
    let totalInterest = 0;
    
    // Safety break loop
    while (P > 0 && months < 1200) {
      const interest = P * r;
      totalInterest += interest;
      P = P + interest - pmt;
      months++;
    }

    return { months, totalInterest };
  };

  const { months, totalInterest } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Loan Payoff Calculator</CardTitle>
        <CardDescription>Find out when your debt will be gone.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Current Loan Balance</Label>
            <Input type="number" value={balance} onChange={e => setBalance(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Interest Rate (%)</Label>
            <Input type="number" value={rate} onChange={e => setRate(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Monthly Payment</Label>
            <Input type="number" value={monthlyPayment} onChange={e => setMonthlyPayment(e.target.value === '' ? '' : Number(e.target.value))} />
            {Number(monthlyPayment) <= (Number(balance) * Number(rate) / 100 / 12) && (
               <p className="text-red-500 text-xs font-bold mt-1">Payment must be higher than monthly interest.</p>
            )}
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#4a8eff] shadow-[4px_4px_0_0_#000]">
          <p className="text-white text-sm font-extrabold uppercase tracking-wider mb-1">Time to Payoff</p>
          <p className="text-4xl font-black tracking-tight text-white mb-2" style={{textShadow: '2px 2px 0 #000'}}>
             {months === Infinity || months > 1100 ? 'Never' : `${Math.floor(months / 12)} yrs ${months % 12} mos`}
          </p>
          <div className="mt-4 pt-4 border-t-[3px] border-black text-white">
             <p className="text-xs font-bold uppercase tracking-wider">Total Interest Paid</p>
             <p className="text-2xl font-black">${totalInterest === Infinity ? '0' : totalInterest.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
