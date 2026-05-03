"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function CryptoProfitCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState<number | ''>(1000);
  const [buyPrice, setBuyPrice] = useState<number | ''>(50000);
  const [sellPrice, setSellPrice] = useState<number | ''>(65000);
  const [investmentFee, setInvestmentFee] = useState<number | ''>(0);
  const [exitFee, setExitFee] = useState<number | ''>(0);

  const calculateProfit = () => {
    if (!investmentAmount || !buyPrice || !sellPrice) return null;
    
    // Total coins bought after investment fee
    const effectiveInvestment = investmentAmount - (investmentFee || 0);
    const coins = effectiveInvestment / buyPrice;
    
    // Gross return
    const grossReturn = coins * sellPrice;
    
    // Net return after exit fee
    const netReturn = grossReturn - (exitFee || 0);
    
    // Net profit
    const netProfit = netReturn - investmentAmount;
    
    // ROI %
    const roi = (netProfit / investmentAmount) * 100;
    
    return {
      coins,
      netReturn,
      netProfit,
      roi
    };
  };

  const result = calculateProfit();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Crypto Profit Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Determine potential profits or losses from crypto trading.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="investmentAmount" className="font-bold">Investment Amount ($)</Label>
            <Input 
              id="investmentAmount" 
              type="number" 
              className="border-2 border-black rounded-xl"
              value={investmentAmount} 
              onChange={(e) => setInvestmentAmount(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="buyPrice" className="font-bold">Buy Price ($)</Label>
              <Input 
                id="buyPrice" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={buyPrice} 
                onChange={(e) => setBuyPrice(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="sellPrice" className="font-bold">Sell Price ($)</Label>
              <Input 
                id="sellPrice" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={sellPrice} 
                onChange={(e) => setSellPrice(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="investmentFee" className="font-bold">Investment Fee ($)</Label>
              <Input 
                id="investmentFee" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={investmentFee} 
                onChange={(e) => setInvestmentFee(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="exitFee" className="font-bold">Exit Fee ($)</Label>
              <Input 
                id="exitFee" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={exitFee} 
                onChange={(e) => setExitFee(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className={`p-6 rounded-2xl border-2 text-center shadow-[4px_4px_0_0_#000] ${result.netProfit >= 0 ? 'bg-[#9ed8a0] border-green-300' : 'bg-[#ff94e0] border-red-300'}`}>
              <p className={`font-bold text-sm mb-1 ${result.netProfit >= 0 ? 'text-black' : 'text-black'}`}>
                {result.netProfit >= 0 ? 'Total Profit' : 'Total Loss'}
              </p>
              <p className={`text-3xl font-black ${result.netProfit >= 0 ? 'text-black' : 'text-black'}`}>
                ${Math.abs(result.netProfit).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </p>
              <p className={`text-xs mt-2 font-bold ${result.netProfit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                ROI: {result.roi > 0 ? '+' : ''}{result.roi.toFixed(2)}%
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">Total Return</p>
              <p className="text-3xl font-black text-black">
                ${result.netReturn > 0 ? result.netReturn.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
              </p>
              <p className="text-xs text-gray-700 mt-2 font-medium">Coins owned: {result.coins.toFixed(6)}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
