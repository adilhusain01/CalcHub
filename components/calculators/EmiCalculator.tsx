"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function EmiCalculator() {
  const [principal, setPrincipal] = useState<number | ''>(500000);
  const [rate, setRate] = useState<number | ''>(8.5);
  const [tenureYears, setTenureYears] = useState<number | ''>(20);

  const calculateEMI = () => {
    if (!principal || !rate || !tenureYears) return 0;
    
    // Formula: P x R x (1+R)^N / [(1+R)^N-1]
    const R = (rate / 12) / 100;
    const N = tenureYears * 12;
    
    if (R === 0) return principal / N; // 0% interest case

    const emi = (principal * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalPayment = emi * (Number(tenureYears) * 12);
  const totalInterest = totalPayment - Number(principal);

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">EMI Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate Equated Monthly Installment for loans.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Loan Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input 
                id="principal" 
                type="number" 
                className="pl-7"
                value={principal} 
                onChange={(e) => setPrincipal(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="rate">Interest Rate</Label>
              <div className="relative">
                <Input 
                  id="rate" 
                  type="number" 
                  className="pr-8"
                  value={rate} 
                  onChange={(e) => setRate(e.target.value === '' ? '' : Number(e.target.value))} 
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
            </div>
            
            <div className="space-y-2 flex-1">
              <Label htmlFor="tenure">Tenure (Years)</Label>
              <Input 
                id="tenure" 
                type="number" 
                value={tenureYears} 
                onChange={(e) => setTenureYears(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#ffd043] p-6 text-black text-center mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-black font-bold text-sm mb-1">Monthly EMI</p>
          <p className="text-4xl md:text-5xl font-black tracking-tight">
            ${emi > 0 && isFinite(emi) ? emi.toFixed(2) : '0.00'}
          </p>
          <div className="flex justify-between mt-6 border-t-2 border-black pt-4 text-sm font-bold">
            <div>
              <p className="text-black">Total Interest</p>
              <p className="font-black">${totalInterest > 0 && isFinite(totalInterest) ? totalInterest.toFixed(2) : '0.00'}</p>
            </div>
            <div className="text-right">
              <p className="text-black">Total Payment</p>
              <p className="font-black">${totalPayment > 0 && isFinite(totalPayment) ? totalPayment.toFixed(2) : '0.00'}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
