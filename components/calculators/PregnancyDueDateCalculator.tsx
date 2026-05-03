"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PregnancyDueDateCalculator() {
  const [lmpDate, setLmpDate] = useState<string>('');

  const calculateDueDate = () => {
    if (!lmpDate) return null;
    
    const lmp = new Date(lmpDate);
    // Add 280 days (40 weeks) to the first day of the last menstrual period
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    
    // Calculate current weeks
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - lmp.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let currentWeeks = Math.floor(diffDays / 7);
    let currentDays = diffDays % 7;
    
    // Handle future dates (not pregnant yet or just starting)
    if (today < lmp) {
      currentWeeks = 0;
      currentDays = 0;
    }

    return {
      dueDate: dueDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      currentWeeks,
      currentDays
    };
  };

  const result = calculateDueDate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Pregnancy Due Date</CardTitle>
        <CardDescription className="text-black font-bold">Estimate your baby's due date based on your last cycle.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="lmpDate" className="font-bold text-lg block">First day of last menstrual period (LMP):</Label>
            <Input 
              id="lmpDate" 
              type="date" 
              className="border-2 border-black rounded-xl text-lg p-6 w-full"
              value={lmpDate} 
              onChange={(e) => setLmpDate(e.target.value)} 
            />
          </div>
        </div>

        {result && (
          <div className="mt-8 space-y-6">
            <div className="bg-pink-100 p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-2 uppercase tracking-wide">Estimated Due Date</p>
              <p className="text-3xl md:text-4xl font-black text-black">{result.dueDate}</p>
              <p className="text-xs text-pink-700 mt-3 font-medium">
                * Only 4% of babies are born on their exact due date.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">You are currently</p>
              <p className="text-3xl font-black text-black">
                {result.currentWeeks} <span className="text-xl font-bold">weeks</span> {result.currentDays > 0 && `& ${result.currentDays} days`}
              </p>
              <p className="text-sm text-blue-700 mt-1 font-bold">pregnant</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
