"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function LeaseVsBuyCalculator() {
  const [carPrice, setCarPrice] = useState<number | ''>(35000);
  const [term, setTerm] = useState<number | ''>(36);
  
  // Lease specific
  const [residualValue, setResidualValue] = useState<number | ''>(21000);
  const [moneyFactor, setMoneyFactor] = useState<number | ''>(0.002);
  const [leaseDown, setLeaseDown] = useState<number | ''>(2000);

  // Buy specific
  const [loanRate, setLoanRate] = useState<number | ''>(4.5);
  const [buyDown, setBuyDown] = useState<number | ''>(5000);

  const calculate = () => {
    const P = Number(carPrice) || 0;
    const t = Number(term) || 36;
    
    // Lease Math: (Depreciation Fee + Finance Fee)
    const res = Number(residualValue) || 0;
    const lDown = Number(leaseDown) || 0;
    const capCost = P - lDown;
    const mf = Number(moneyFactor) || 0;
    
    const depreciationFee = (capCost - res) / t;
    const financeFee = (capCost + res) * mf;
    const leaseMonthly = depreciationFee + financeFee;
    const totalLeaseCost = (leaseMonthly * t) + lDown;

    // Buy Math
    const bDown = Number(buyDown) || 0;
    const loanAmt = P - bDown;
    const r = (Number(loanRate) || 0) / 100 / 12;
    
    let buyMonthly = 0;
    if (r === 0) {
      buyMonthly = loanAmt / t;
    } else {
      buyMonthly = (loanAmt * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    }
    
    const totalBuyCostBeforeResale = (buyMonthly * t) + bDown;
    // Basic approximate cost assuming car is worth residual
    const trueCostToOwn = totalBuyCostBeforeResale - res;

    return { leaseMonthly, totalLeaseCost, buyMonthly, trueCostToOwn };
  };

  const results = calculate();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Lease vs Buy Calculator</CardTitle>
        <CardDescription className="text-black font-bold">Compare monthly payments and true cost.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="space-y-2 flex-1">
            <Label>Car Price</Label>
            <Input type="number" value={carPrice} onChange={e => setCarPrice(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2 flex-1 sm:flex-[0.5]">
            <Label>Term (mos)</Label>
            <Input type="number" value={term} onChange={e => setTerm(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>
        
        <div className="border-t border-gray-100 my-2 pt-2">
            <p className="text-sm font-semibold text-black mb-2">Lease Terms</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-2">
                <div className="space-y-2"><Label>Residual Val</Label><Input type="number" value={residualValue} onChange={e => setResidualValue(e.target.value === '' ? '' : Number(e.target.value))}/></div>
                <div className="space-y-2"><Label>Down Pmt</Label><Input type="number" value={leaseDown} onChange={e => setLeaseDown(e.target.value === '' ? '' : Number(e.target.value))}/></div>
                <div className="space-y-2"><Label>Money Factor</Label><Input type="number" step="0.0001" value={moneyFactor} onChange={e => setMoneyFactor(e.target.value === '' ? '' : Number(e.target.value))}/></div>
            </div>
        </div>

        <div className="border-t border-gray-100 my-2 pt-2">
            <p className="text-sm font-semibold text-black mb-2">Loan Terms</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>Interest Rate (%)</Label><Input type="number" step="0.1" value={loanRate} onChange={e => setLoanRate(e.target.value === '' ? '' : Number(e.target.value))}/></div>
                <div className="space-y-2"><Label>Down Pmt</Label><Input type="number" value={buyDown} onChange={e => setBuyDown(e.target.value === '' ? '' : Number(e.target.value))}/></div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
          <div className="rounded-[24px] border-[3px] border-black bg-[#4a8eff] p-4 text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black text-xs font-bold uppercase tracking-wider mb-1">Lease Monthly</p>
            <p className="text-3xl font-black text-black tracking-tight">
              ${results.leaseMonthly.toFixed(2)}
            </p>
            <p className="text-sm font-bold text-black mt-2">Total spent: ${results.totalLeaseCost.toFixed(0)}</p>
          </div>
          
          <div className="rounded-[24px] border-[3px] border-black bg-[#a7e0a5] p-4 text-center shadow-[4px_4px_0_0_#000]">
            <p className="text-black text-xs font-bold uppercase tracking-wider mb-1">Buy Monthly</p>
            <p className="text-3xl font-black text-black tracking-tight">
              ${results.buyMonthly.toFixed(2)}
            </p>
            <p className="text-sm font-bold text-black mt-2">True Cost: ${(results.trueCostToOwn).toFixed(0)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
