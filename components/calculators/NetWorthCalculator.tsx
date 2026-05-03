"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function NetWorthCalculator() {
  // Assets
  const [cash, setCash] = useState<number | ''>(15000);
  const [investments, setInvestments] = useState<number | ''>(50000);
  const [realEstate, setRealEstate] = useState<number | ''>(300000);
  const [vehicles, setVehicles] = useState<number | ''>(25000);

  // Liabilities
  const [mortgage, setMortgage] = useState<number | ''>(240000);
  const [loans, setLoans] = useState<number | ''>(15000);
  const [creditCards, setCreditCards] = useState<number | ''>(2000);

  const totalAssets = (Number(cash) || 0) + (Number(investments) || 0) + (Number(realEstate) || 0) + (Number(vehicles) || 0);
  const totalLiabilities = (Number(mortgage) || 0) + (Number(loans) || 0) + (Number(creditCards) || 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Net Worth Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Calculate your total net worth by balancing assets and liabilities.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-8">
        
        <div className={`p-6 rounded-2xl border-4 text-center shadow-[4px_4px_0_0_#000] ${netWorth >= 0 ? 'bg-[#9ed8a0] border-green-400' : 'bg-[#ff94e0] border-red-400'}`}>
          <p className={`font-bold text-sm mb-1 ${netWorth >= 0 ? 'text-black' : 'text-black'}`}>Total Net Worth</p>
          <p className={`text-4xl font-black ${netWorth >= 0 ? 'text-black' : 'text-black'}`}>
            ${netWorth.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-blue-50 p-6 rounded-2xl border-[3px] border-black">
            <h3 className="text-xl font-black text-black border-b-2 border-blue-200 pb-2">Assets (+)</h3>
            <div className="space-y-3">
              <div>
                <Label className="font-bold text-black">Cash & Bank Accounts</Label>
                <Input type="number" className="border-[3px] border-black" value={cash} onChange={(e) => setCash(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <Label className="font-bold text-black">Investments & Retirement</Label>
                <Input type="number" className="border-[3px] border-black" value={investments} onChange={(e) => setInvestments(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <Label className="font-bold text-black">Real Estate Value</Label>
                <Input type="number" className="border-[3px] border-black" value={realEstate} onChange={(e) => setRealEstate(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <Label className="font-bold text-black">Vehicles & Other Assets</Label>
                <Input type="number" className="border-[3px] border-black" value={vehicles} onChange={(e) => setVehicles(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
            </div>
            <p className="text-lg font-black text-black text-right mt-4 pt-2 border-t-2 border-blue-200">
              Total: ${totalAssets.toLocaleString()}
            </p>
          </div>

          <div className="space-y-4 bg-orange-50 p-6 rounded-2xl border-[3px] border-black">
            <h3 className="text-xl font-black text-black border-b-2 border-orange-200 pb-2">Liabilities (-)</h3>
            <div className="space-y-3">
              <div>
                <Label className="font-bold text-black">Mortgage Balance</Label>
                <Input type="number" className="border-[3px] border-black" value={mortgage} onChange={(e) => setMortgage(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <Label className="font-bold text-black">Student & Auto Loans</Label>
                <Input type="number" className="border-[3px] border-black" value={loans} onChange={(e) => setLoans(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <Label className="font-bold text-black">Credit Card Debt</Label>
                <Input type="number" className="border-[3px] border-black" value={creditCards} onChange={(e) => setCreditCards(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
            </div>
            <p className="text-lg font-black text-black text-right mt-4 pt-2 border-t-2 border-orange-200">
              Total: ${totalLiabilities.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
