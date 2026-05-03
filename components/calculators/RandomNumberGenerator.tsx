"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function RandomNumberGenerator() {
  const [min, setMin] = useState<number | ''>(1);
  const [max, setMax] = useState<number | ''>(100);
  const [result, setResult] = useState<number>(42);

  const generate = () => {
    let lower = Number(min) || 0;
    let upper = Number(max) || 0;
    if (lower > upper) {
       const temp = lower;
       lower = upper;
       upper = temp;
    }
    const rand = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    setResult(rand);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Random Number</CardTitle>
        <CardDescription>Generate a random number within a specific range.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Min Number</Label>
            <Input type="number" value={min} onChange={e => setMin(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label>Max Number</Label>
            <Input type="number" value={max} onChange={e => setMax(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>

        <Button onClick={generate} className="w-full" variant="outline">
           Roll / Generate
        </Button>

        <div className="rounded-[16px] border-[3px] border-black p-8 text-center bg-[#cdfff7] shadow-[4px_4px_0_0_#000]">
          <p className="text-black text-sm font-extrabold uppercase tracking-wider mb-2">Result</p>
          <p className="text-8xl font-black tracking-tight text-white" style={{textShadow: '4px 4px 0 #000'}}>
             {result}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
