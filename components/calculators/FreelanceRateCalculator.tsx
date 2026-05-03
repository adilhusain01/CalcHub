"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function FreelanceRateCalculator() {
  const [targetIncome, setTargetIncome] = useState<number | ''>(80000);
  const [expenses, setExpenses] = useState<number | ''>(5000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number | ''>(30);
  const [weeksOff, setWeeksOff] = useState<number | ''>(4);

  const calculate = () => {
    const inc = Number(targetIncome) || 0;
    const exp = Number(expenses) || 0;
    const hrs = Number(hoursPerWeek) || 1;
    const off = Number(weeksOff) || 0;

    const weeksWorking = Math.max(1, 52 - off);
    const totalHours = weeksWorking * hrs;
    
    const requiredGross = inc + exp;
    const hourlyRate = totalHours > 0 ? requiredGross / totalHours : 0;

    return { hourlyRate, totalHours, requiredGross };
  };

  const results = calculate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Freelance Hourly Rate</CardTitle>
        <CardDescription className="text-black font-bold">Calculate your ideal rate based on revenue goals.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="income">Target Annual Net Income</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input id="income" type="number" className="pl-7" value={targetIncome} onChange={e => setTargetIncome(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="expenses">Annual Business Expenses</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <Input id="expenses" type="number" className="pl-7" value={expenses} onChange={e => setExpenses(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="hours">Billable Hrs / Wk</Label>
            <Input id="hours" type="number" value={hoursPerWeek} onChange={e => setHoursPerWeek(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="weeksOff">Weeks Off / Yr</Label>
            <Input id="weeksOff" type="number" value={weeksOff} onChange={e => setWeeksOff(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#4a8eff] p-6 text-black text-center mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-black font-bold text-sm mb-1">Target Minimum Rate</p>
          <p className="text-4xl md:text-5xl font-black tracking-tight">
            ${results.hourlyRate.toFixed(2)}<span className="text-lg font-bold">/hr</span>
          </p>
          <p className="text-sm font-bold text-black mt-2">
            Based on {results.totalHours} billable hours per year.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
