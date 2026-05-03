"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function PercentageCalculator() {
  const [val1, setVal1] = useState<number | ''>(25);
  const [val2, setVal2] = useState<number | ''>(1000);
  
  const [val3, setVal3] = useState<number | ''>(40);
  const [val4, setVal4] = useState<number | ''>(160);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Percentage Calculator</CardTitle>
        <CardDescription>Perform precise percentage math.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Mode 1 */}
        <div className="space-y-4 rounded-[16px] border-[3px] border-black p-5 bg-[#ffd043] shadow-[4px_4px_0_0_#000]">
          <div className="flex items-center gap-3">
             <Input className="w-24 bg-white shadow-none" type="number" value={val1} onChange={e => setVal1(e.target.value === '' ? '' : Number(e.target.value))} />
             <span className="font-extrabold text-black">% of</span>
             <Input className="flex-1 bg-white shadow-none" type="number" value={val2} onChange={e => setVal2(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="text-right">
             <span className="font-extrabold uppercase text-xs mr-2">Result:</span>
             <span className="text-3xl font-black">
               {((Number(val1) || 0) * (Number(val2) || 0) / 100).toFixed(2)}
             </span>
          </div>
        </div>

        {/* Mode 2 */}
        <div className="space-y-4 rounded-[16px] border-[3px] border-black p-5 bg-[#ff94e0] shadow-[4px_4px_0_0_#000]">
          <div className="flex items-center gap-3">
             <Input className="flex-1 bg-white shadow-none" type="number" value={val3} onChange={e => setVal3(e.target.value === '' ? '' : Number(e.target.value))} />
             <span className="font-extrabold text-black text-center leading-tight">is what<br/>% of</span>
             <Input className="flex-1 bg-white shadow-none" type="number" value={val4} onChange={e => setVal4(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="text-right">
             <span className="font-extrabold uppercase text-xs mr-2">Result:</span>
             <span className="text-3xl font-black">
               {(Number(val4) ? ((Number(val3) || 0) / Number(val4)) * 100 : 0).toFixed(2)}%
             </span>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
