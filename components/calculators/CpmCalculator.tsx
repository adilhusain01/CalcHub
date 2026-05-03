"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function CpmCalculator() {
  const [cost, setCost] = useState<number | ''>(500);
  const [impressions, setImpressions] = useState<number | ''>(250000);

  const calculateCpm = () => {
    if (!cost || !impressions) return null;
    
    // CPM = Cost / (Impressions / 1000)
    const cpm = cost / (impressions / 1000);
    
    return cpm;
  };

  const cpm = calculateCpm();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">CPM Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate the Cost Per Mille (thousand impressions) for ad campaigns.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cost" className="font-bold">Total Cost of Campaign ($)</Label>
            <Input 
              id="cost" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={cost} 
              onChange={(e) => setCost(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="impressions" className="font-bold">Total Impressions</Label>
            <Input 
              id="impressions" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={impressions} 
              onChange={(e) => setImpressions(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
        </div>

        {cpm !== null && (
          <div className="mt-6">
            <div className="bg-[#ffd043] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Your CPM is</p>
              <p className="text-5xl font-black text-black">${cpm.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              <p className="text-sm text-yellow-700 mt-2 font-bold">Cost per 1,000 impressions</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
