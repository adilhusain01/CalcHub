"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SalaryToHourlyCalculator() {
  const [salary, setSalary] = useState<number | ''>(60000);
  const [hours, setHours] = useState<number | ''>(40);

  const calculate = () => {
    const s = Number(salary) || 0;
    const h = Number(hours) || 40;
    
    // 52 weeks in a year
    const hourly = s / (52 * h);
    const weekly = hourly * h;
    const monthly = s / 12;

    return { hourly, weekly, monthly };
  };

  const { hourly, weekly, monthly } = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Salary to Hourly</CardTitle>
        <CardDescription>Break down your annual salary.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Annual Salary</Label>
            <Input type="number" value={salary} onChange={e => setSalary(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Hours worked per week</Label>
            <Input type="number" value={hours} onChange={e => setHours(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <div className="rounded-[16px] border-[3px] border-black p-6 bg-[#f8d8a7] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-1">Hourly Wage</p>
          <p className="text-5xl font-black tracking-tight text-black mb-4">
            ${hourly.toFixed(2)}<span className="text-xl">/hr</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-[3px] border-black pt-4">
             <div>
               <p className="text-xs font-bold uppercase tracking-wider">Weekly</p>
               <p className="text-xl font-bold">${weekly.toFixed(2)}</p>
             </div>
             <div>
               <p className="text-xs font-bold uppercase tracking-wider">Monthly</p>
               <p className="text-xl font-bold">${monthly.toFixed(2)}</p>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
