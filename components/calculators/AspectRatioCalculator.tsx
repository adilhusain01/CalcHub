"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function AspectRatioCalculator() {
  const [w1, setW1] = useState<number | ''>(1920);
  const [h1, setH1] = useState<number | ''>(1080);
  
  const [w2, setW2] = useState<number | ''>(1280);
  const [h2, setH2] = useState<number | ''>(720);

  const calculateH2 = (newW2: string) => {
     const width2 = Number(newW2);
     setW2(newW2 === '' ? '' : width2);
     const width1 = Number(w1);
     const height1 = Number(h1);
     if (width1 > 0 && height1 > 0) {
        setH2(newW2 === '' ? '' : Math.round((height1 / width1) * width2));
     }
  };

  const calculateW2 = (newH2: string) => {
     const height2 = Number(newH2);
     setH2(newH2 === '' ? '' : height2);
     const width1 = Number(w1);
     const height1 = Number(h1);
     if (width1 > 0 && height1 > 0 && height2 > 0) {
        setW2(newH2 === '' ? '' : Math.round((width1 / height1) * height2));
     }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Aspect Ratio Calculator</CardTitle>
        <CardDescription>Scale dimensions perfectly without distortion.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 rounded-xl border-[3px] border-black p-5 bg-[#e4d9ff] shadow-[4px_4px_0_0_#000]">
           <p className="font-extrabold uppercase text-sm mb-2">Original Dimensions</p>
           <div className="flex gap-4 items-center">
             <div className="space-y-2 flex-1">
               <Label>Width (W1)</Label>
               <Input className="bg-white shadow-none border-2" type="number" value={w1} onChange={e => {setW1(e.target.value === '' ? '' : Number(e.target.value));}} />
             </div>
             <span className="font-black text-2xl mt-8">:</span>
             <div className="space-y-2 flex-1">
               <Label>Height (H1)</Label>
               <Input className="bg-white shadow-none border-2" type="number" value={h1} onChange={e => {setH1(e.target.value === '' ? '' : Number(e.target.value));}} />
             </div>
           </div>
        </div>

        <div className="space-y-4 rounded-xl border-[3px] border-black p-5 bg-[#fff1c7] shadow-[4px_4px_0_0_#000]">
           <p className="font-extrabold uppercase text-sm mb-2">New Dimensions</p>
           <div className="flex gap-4 items-center">
             <div className="space-y-2 flex-1">
               <Label>Width (W2)</Label>
               <Input className="bg-white shadow-none border-2" type="number" value={w2} onChange={e => calculateH2(e.target.value)} />
             </div>
             <span className="font-black text-2xl mt-8">:</span>
             <div className="space-y-2 flex-1">
               <Label>Height (H2)</Label>
               <Input className="bg-white shadow-none border-2" type="number" value={h2} onChange={e => calculateW2(e.target.value)} />
             </div>
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
