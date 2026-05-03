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
    <Card className="w-full bg-white shadow-xl shadow-gray-200/50">
      <CardHeader className="bg-gray-50/50 border-b border-gray-100">
        <CardTitle>Lease vs Buy Calculator</CardTitle>
        <CardDescription>Compare monthly payments and true cost.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        
        <div className="flex gap-4">
          <div className="space-y-2 flex-1">
            <Label>Car Price</Label>
            <Input type="number" value={carPrice} onChange={e => setCarPrice(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
          <div className="space-y-2 flex-[0.5]">
            <Label>Term (mos)</Label>
            <Input type="number" value={term} onChange={e => setTerm(e.target.value === '' ? '' : Number(e.target.value))} />
          </div>
        </div>
        
        <div className="border-t border-gray-100 my-2 pt-2">
            <p className="text-sm font-semibold text-gray-900 mb-2">Lease Terms</p>
            <div className="flex gap-2 mb-2">
                <div className="space-y-2 flex-1"><Label>Residual Val</Label><Input type="number" value={residualValue} onChange={e => setResidualValue(e.target.value === '' ? '' : Number(e.target.value))}/></div>
                <div className="space-y-2 flex-1"><Label>Down Pmt</Label><Input type="number" value={leaseDown} onChange={e => setLeaseDown(e.target.value === '' ? '' : Number(e.target.value))}/></div>
                <div className="space-y-2 flex-1"><Label>Money Factor</Label><Input type="number" step="0.0001" value={moneyFactor} onChange={e => setMoneyFactor(e.target.value === '' ? '' : Number(e.target.value))}/></div>
            </div>
        </div>

        <div className="border-t border-gray-100 my-2 pt-2">
            <p className="text-sm font-semibold text-gray-900 mb-2">Loan Terms</p>
            <div className="flex gap-4">
                <div className="space-y-2 flex-1"><Label>Interest Rate (%)</Label><Input type="number" step="0.1" value={loanRate} onChange={e => setLoanRate(e.target.value === '' ? '' : Number(e.target.value))}/></div>
                <div className="space-y-2 flex-1"><Label>Down Pmt</Label><Input type="number" value={buyDown} onChange={e => setBuyDown(e.target.value === '' ? '' : Number(e.target.value))}/></div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center shadow-sm">
            <p className="text-blue-800 text-xs font-semibold uppercase tracking-wider mb-1">Lease Monthly</p>
            <p className="text-2xl font-bold text-blue-900 tracking-tight">
              ${results.leaseMonthly.toFixed(2)}
            </p>
            <p className="text-xs text-blue-700 mt-2">Total spent: ${results.totalLeaseCost.toFixed(0)}</p>
          </div>
          
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center shadow-sm">
            <p className="text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-1">Buy Monthly</p>
            <p className="text-2xl font-bold text-emerald-900 tracking-tight">
              ${results.buyMonthly.toFixed(2)}
            </p>
            <p className="text-xs text-emerald-700 mt-2">True Cost: ${(results.trueCostToOwn).toFixed(0)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
