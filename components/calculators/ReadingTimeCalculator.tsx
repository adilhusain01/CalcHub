"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function ReadingTimeCalculator() {
  const [totalPages, setTotalPages] = useState<number | ''>(350);
  const [daysToFinish, setDaysToFinish] = useState<number | ''>(14);

  const pagesPerDay = (Number(totalPages) || 0) / Math.max(1, (Number(daysToFinish) || 1));

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#e2d5f8] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Reading Planner</CardTitle>
        <CardDescription className="text-black font-bold">Find out how many pages a day you need to read.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Total Book Pages</Label><Input type="number" value={totalPages} onChange={e => setTotalPages(e.target.value === '' ? '' : Number(e.target.value))} /></div>
          <div className="space-y-2"><Label>Days to Finish Book</Label><Input type="number" value={daysToFinish} onChange={e => setDaysToFinish(e.target.value === '' ? '' : Number(e.target.value))} /></div>
        </div>

        <div className="mt-6 rounded-[24px] border-[3px] border-black bg-white p-6 text-center shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-bold uppercase tracking-wider mb-2">Daily Goal</p>
          <p className="text-5xl font-black text-black">{Math.ceil(pagesPerDay)} pages</p>
          <p className="mt-2 text-sm font-bold opacity-75">per day</p>
        </div>
      </CardContent>
    </Card>
  );
}
