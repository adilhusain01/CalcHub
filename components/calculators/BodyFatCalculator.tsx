"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function BodyFatCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [waist, setWaist] = useState<number | ''>(85); // cm
  const [neck, setNeck] = useState<number | ''>(40); // cm
  const [height, setHeight] = useState<number | ''>(175); // cm
  const [hip, setHip] = useState<number | ''>(100); // cm for women only

  const calculateBodyFat = () => {
    if (!waist || !neck || !height) return null;
    if (gender === 'female' && !hip) return null;
    
    // U.S. Navy Method (metric)
    let bodyFatPercent = 0;
    
    if (gender === 'male') {
      bodyFatPercent = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      bodyFatPercent = 495 / (1.29579 - 0.35004 * Math.log10(waist + Number(hip) - neck) + 0.22100 * Math.log10(height)) - 450;
    }
    
    // Ensure it's not NaN or impossible value
    if (isNaN(bodyFatPercent) || bodyFatPercent < 1 || bodyFatPercent > 80) return null;

    let category = '';
    if (gender === 'male') {
      if (bodyFatPercent < 6) category = 'Essential Fat';
      else if (bodyFatPercent < 14) category = 'Athletes';
      else if (bodyFatPercent < 18) category = 'Fitness';
      else if (bodyFatPercent < 25) category = 'Average';
      else category = 'Obese';
    } else {
      if (bodyFatPercent < 14) category = 'Essential Fat';
      else if (bodyFatPercent < 21) category = 'Athletes';
      else if (bodyFatPercent < 25) category = 'Fitness';
      else if (bodyFatPercent < 32) category = 'Average';
      else category = 'Obese';
    }

    return {
      percent: bodyFatPercent,
      category
    };
  };

  const result = calculateBodyFat();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Body Fat %</CardTitle>
        <CardDescription className="text-black font-bold">Estimate your body fat percentage using standard measurements.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="font-bold">Biological Sex</Label>
            <div className="flex gap-2">
              <button 
                onClick={() => setGender('male')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${gender === 'male' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Male
              </button>
              <button 
                onClick={() => setGender('female')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${gender === 'female' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Female
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="height" className="font-bold">Height (cm)</Label>
              <Input id="height" type="number" className="border-2 border-black rounded-xl" value={height} onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="neck" className="font-bold">Neck (cm)</Label>
              <Input id="neck" type="number" className="border-2 border-black rounded-xl" value={neck} onChange={(e) => setNeck(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="waist" className="font-bold">Waist (cm)</Label>
              <Input id="waist" type="number" className="border-2 border-black rounded-xl" value={waist} onChange={(e) => setWaist(e.target.value === '' ? '' : Number(e.target.value))} />
            </div>
            {gender === 'female' && (
              <div className="space-y-2 flex-1">
                <Label htmlFor="hip" className="font-bold">Hip (cm)</Label>
                <Input id="hip" type="number" className="border-2 border-black rounded-xl" value={hip} onChange={(e) => setHip(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
            )}
          </div>
        </div>

        {result ? (
          <div className="mt-6">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Estimated Body Fat</p>
              <p className="text-5xl font-black text-black">{result.percent.toFixed(1)}%</p>
              <div className="mt-3 inline-block bg-white px-4 py-1 rounded-full border-[3px] border-black">
                <p className="text-sm font-bold text-black">Category: {result.category}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 bg-gray-100 p-4 rounded-xl text-center text-sm font-bold text-gray-500">
            Please enter valid measurements to calculate.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
