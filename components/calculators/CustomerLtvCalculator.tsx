"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function CustomerLtvCalculator() {
  const [averageOrderValue, setAverageOrderValue] = useState<number | ''>(50);
  const [purchaseFrequency, setPurchaseFrequency] = useState<number | ''>(4); // purchases per year
  const [customerLifespan, setCustomerLifespan] = useState<number | ''>(3); // years
  const [profitMargin, setProfitMargin] = useState<number | ''>(40); // %

  const calculateLTV = () => {
    if (!averageOrderValue || !purchaseFrequency || !customerLifespan) return null;
    
    const customerValue = averageOrderValue * purchaseFrequency;
    const ltv = customerValue * customerLifespan;
    const ltvProfit = ltv * (Number(profitMargin || 0) / 100);
    
    return {
      customerValue,
      ltv,
      ltvProfit
    };
  };

  const result = calculateLTV();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Customer LTV</CardTitle>
        <CardDescription className="text-black font-bold">Calculate the Lifetime Value of your average customer.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="averageOrderValue" className="font-bold">Average Order Value ($)</Label>
              <Input 
                id="averageOrderValue" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={averageOrderValue} 
                onChange={(e) => setAverageOrderValue(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="purchaseFrequency" className="font-bold">Purchases per Year</Label>
              <Input 
                id="purchaseFrequency" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={purchaseFrequency} 
                onChange={(e) => setPurchaseFrequency(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="customerLifespan" className="font-bold">Avg. Lifespan (Years)</Label>
              <Input 
                id="customerLifespan" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={customerLifespan} 
                onChange={(e) => setCustomerLifespan(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="profitMargin" className="font-bold">Profit Margin (%)</Label>
              <Input 
                id="profitMargin" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={profitMargin} 
                onChange={(e) => setProfitMargin(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Customer Lifetime Value (LTV)</p>
              <p className="text-5xl font-black text-black">${result.ltv.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              <p className="text-xs text-indigo-700 mt-2 font-medium">Total expected revenue from one customer over their lifetime.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl border-[3px] border-black text-center">
                <p className="font-bold text-black">LTV Profit</p>
                <p className="text-2xl font-black text-black">${result.ltvProfit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className="text-xs text-green-700 mt-1">Based on {profitMargin}% margin</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border-[3px] border-black text-center">
                <p className="font-bold text-black">Customer Value</p>
                <p className="text-2xl font-black text-black">${result.customerValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className="text-xs text-blue-700 mt-1">Revenue per year</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
