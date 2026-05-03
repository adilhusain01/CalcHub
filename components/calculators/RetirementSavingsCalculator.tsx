"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function RetirementSavingsCalculator() {
  const [currentAge, setCurrentAge] = useState<number | ''>(30);
  const [retirementAge, setRetirementAge] = useState<number | ''>(65);
  const [currentSavings, setCurrentSavings] = useState<number | ''>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number | ''>(500);
  const [annualReturn, setAnnualReturn] = useState<number | ''>(7);

  const calculateRetirement = () => {
    if (!currentAge || !retirementAge || currentSavings === '' || monthlyContribution === '' || !annualReturn) return null;
    
    const yearsToRetire = retirementAge - currentAge;
    if (yearsToRetire <= 0) return null;

    const r = annualReturn / 100 / 12; // Monthly interest rate
    const n = yearsToRetire * 12; // Number of months
    
    // Future value of current savings
    const fvCurrentSavings = currentSavings * Math.pow(1 + r, n);
    
    // Future value of monthly contributions
    let fvContributions = 0;
    if (r > 0) {
      fvContributions = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    } else {
      fvContributions = monthlyContribution * n;
    }

    const totalSavings = fvCurrentSavings + fvContributions;
    const totalInvested = currentSavings + (monthlyContribution * n);
    const totalInterest = totalSavings - totalInvested;

    return {
      totalSavings,
      totalInvested,
      totalInterest,
      yearsToRetire
    };
  };

  const result = calculateRetirement();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Retirement Savings Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Estimate how much you need to save for a comfortable retirement.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="currentAge" className="font-bold">Current Age</Label>
              <Input 
                id="currentAge" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={currentAge} 
                onChange={(e) => setCurrentAge(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="retirementAge" className="font-bold">Retirement Age</Label>
              <Input 
                id="retirementAge" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={retirementAge} 
                onChange={(e) => setRetirementAge(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSavings" className="font-bold">Current Savings ($)</Label>
            <Input 
              id="currentSavings" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={currentSavings} 
              onChange={(e) => setCurrentSavings(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="monthlyContribution" className="font-bold">Monthly Contribution ($)</Label>
              <Input 
                id="monthlyContribution" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={monthlyContribution} 
                onChange={(e) => setMonthlyContribution(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="annualReturn" className="font-bold">Expected Annual Return (%)</Label>
              <Input 
                id="annualReturn" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={annualReturn} 
                onChange={(e) => setAnnualReturn(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Total at Retirement (Age {retirementAge})</p>
              <p className="text-4xl font-black text-black">
                ${result.totalSavings > 0 ? result.totalSavings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
              </p>
              <p className="text-sm text-green-700 mt-2 font-medium">In {result.yearsToRetire} years</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl border-[3px] border-black">
                <p className="font-bold text-black">Total Invested</p>
                <p className="text-2xl font-black text-black">${result.totalInvested.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
              <div className="bg-[#4a8eff] p-4 rounded-xl border-[3px] border-black">
                <p className="font-bold text-black">Total Interest Earned</p>
                <p className="text-2xl font-black text-black">${result.totalInterest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
