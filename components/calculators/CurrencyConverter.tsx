"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowUpDown } from 'lucide-react';

export function CurrencyConverter() {
  const [amount, setAmount] = useState<number | ''>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');

  // Static exchange rates (relative to USD for demonstration)
  // In a real app, you would fetch these from an API
  const rates: Record<string, number> = {
    'USD': 1,
    'EUR': 0.92,
    'GBP': 0.79,
    'JPY': 150.3,
    'AUD': 1.53,
    'CAD': 1.35,
    'CHF': 0.88,
    'CNY': 7.19,
    'INR': 82.9
  };

  const convert = () => {
    if (amount === '') return 0;
    
    // Convert from source to USD, then from USD to target
    const amountInUSD = Number(amount) / rates[fromCurrency];
    return amountInUSD * rates[toCurrency];
  };

  const result = convert();

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Currency Converter</CardTitle>
        <CardDescription className="text-black font-bold">Convert between major global currencies.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-6">
          <div className="space-y-2 w-full">
            <Label htmlFor="amount" className="font-bold">Amount</Label>
            <Input 
              id="amount" 
              type="number" 
              className="border-2 border-black rounded-xl p-4 text-xl font-bold"
              value={amount} 
              onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))} 
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="space-y-2 flex-1 w-full">
              <Label htmlFor="fromCurrency" className="font-bold">From</Label>
              <select 
                id="fromCurrency"
                className="w-full border-2 border-black rounded-xl p-4 text-lg font-bold bg-white"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {Object.keys(rates).map(curr => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-center pb-1">
              <button 
                onClick={handleSwap}
                className="p-3 bg-gray-100 rounded-full border-[3px] border-black hover:bg-gray-200 transition-colors"
                title="Swap currencies"
              >
                <ArrowUpDown className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="space-y-2 flex-1 w-full">
              <Label htmlFor="toCurrency" className="font-bold">To</Label>
              <select 
                id="toCurrency"
                className="w-full border-2 border-black rounded-xl p-4 text-lg font-bold bg-white"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {Object.keys(rates).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {result !== null && (
          <div className="mt-8">
            <div className="bg-[#9ed8a0] p-8 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000] relative">
              <p className="text-black font-bold text-sm mb-2">Converted Amount</p>
              <p className="text-4xl md:text-5xl font-black text-black break-words">
                {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xl font-bold text-emerald-700 mt-2">{toCurrency}</p>
              
              <div className="mt-4 pt-4 border-t-2 border-emerald-200">
                <p className="text-xs text-emerald-600 font-bold">
                  1 {fromCurrency} = {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)} {toCurrency}
                </p>
                <p className="text-[10px] text-emerald-500 mt-1">Note: Using static placeholder exchange rates.</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
