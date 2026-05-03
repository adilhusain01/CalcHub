"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PaypalFeeCalculator() {
  const [amount, setAmount] = useState<number | ''>(100);
  const [feePercentage, setFeePercentage] = useState<number | ''>(3.49);
  const [fixedFee, setFixedFee] = useState<number | ''>(0.49);

  const calculateFees = () => {
    if (!amount) return null;
    
    const percentageAmount = amount * ((Number(feePercentage) || 0) / 100);
    const totalFee = percentageAmount + Number(fixedFee || 0);
    const youReceive = amount - totalFee;
    const askFor = (amount + Number(fixedFee || 0)) / (1 - ((Number(feePercentage) || 0) / 100));

    return {
      totalFee,
      youReceive,
      askFor
    };
  };

  const result = calculateFees();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">PayPal Fee Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate exactly how much PayPal will deduct from a transaction.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount" className="font-bold">Transaction Amount ($)</Label>
            <Input 
              id="amount" 
              type="number" 
              className="border-2 border-black rounded-xl text-lg p-6"
              value={amount} 
              onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="feePercentage" className="font-bold">Fee Percentage (%)</Label>
              <Input 
                id="feePercentage" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={feePercentage} 
                onChange={(e) => setFeePercentage(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="fixedFee" className="font-bold">Fixed Fee ($)</Label>
              <Input 
                id="fixedFee" 
                type="number" 
                className="border-2 border-black rounded-xl"
                value={fixedFee} 
                onChange={(e) => setFixedFee(e.target.value === '' ? '' : Number(e.target.value))} 
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-[#4a8eff] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-black font-bold text-sm mb-1">You will receive</p>
              <p className="text-5xl font-black text-black">${result.youReceive > 0 ? result.youReceive.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}</p>
              <p className="text-sm text-blue-700 mt-2 font-bold">Total Fees: ${result.totalFee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border-[3px] border-black text-center">
              <p className="font-bold text-black">To receive exactly ${amount || 0}</p>
              <p className="text-3xl font-black text-black mt-1">${result.askFor.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              <p className="text-xs text-green-700 mt-1">You need to ask the buyer for this amount.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
