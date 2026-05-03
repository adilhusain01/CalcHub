"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function MarkupCalculator() {
  const [cost, setCost] = useState<number | ''>(50);
  const [markupPercent, setMarkupPercent] = useState<number | ''>(40);

  const calculateMarkup = () => {
    if (!cost || !markupPercent) return null;
    
    const markupAmount = cost * (markupPercent / 100);
    const sellingPrice = cost + markupAmount;
    
    const marginPercent = (markupAmount / sellingPrice) * 100;
    
    return {
      markupAmount,
      sellingPrice,
      marginPercent
    };
  };

  const result = calculateMarkup();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Markup Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Easily find the selling price based on cost and desired markup.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="cost" className="font-bold">Item Cost ($)</Label>
              <Input 
                id="cost" 
                type="number" 
                className="border-2 border-black rounded-xl text-lg p-6"
                value={cost} 
                onChange={(e) => setCost(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="markupPercent" className="font-bold">Markup (%)</Label>
              <Input 
                id="markupPercent" 
                type="number" 
                className="border-2 border-black rounded-xl text-lg p-6"
                value={markupPercent} 
                onChange={(e) => setMarkupPercent(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Recommended Selling Price</p>
              <p className="text-5xl font-black text-black">${result.sellingPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl border-[3px] border-black text-center">
                <p className="font-bold text-black">Gross Profit (Markup)</p>
                <p className="text-2xl font-black text-black">${result.markupAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
              <div className="bg-[#4a8eff] p-4 rounded-xl border-[3px] border-black text-center">
                <p className="font-bold text-black">Gross Margin</p>
                <p className="text-2xl font-black text-black">{result.marginPercent.toFixed(2)}%</p>
                <p className="text-xs text-blue-600 mt-1">Margin is not markup!</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
