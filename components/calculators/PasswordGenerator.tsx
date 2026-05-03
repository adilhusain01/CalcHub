"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [password, setPassword] = useState('Click generate to start');

  const generate = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let chars = lower;
    if (includeUppercase) chars += upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    
    if (chars.length === 0) return;
    
    let res = '';
    for (let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(res);
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Password Generator</CardTitle>
        <CardDescription>Create highly secure passwords instantly.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="relative group">
           <div className="w-full h-16 rounded-xl border-[3px] border-black bg-white flex items-center px-4 overflow-x-auto whitespace-nowrap shadow-[4px_4px_0_0_#000]">
              <span className="font-mono text-xl font-bold">{password}</span>
           </div>
           <Button onClick={copy} size="sm" className="absolute right-2 top-2 h-12 shadow-none border-2">Copy</Button>
        </div>

        <div className="space-y-4 rounded-xl border-[3px] border-black p-4 bg-[#f3e5ca]">
          <div className="space-y-2">
            <div className="flex justify-between">
               <Label>Length ({length})</Label>
            </div>
            <input 
              type="range" 
              min="8" 
              max="64" 
              value={length} 
              onChange={e => setLength(Number(e.target.value))} 
              className="w-full accent-black" 
            />
          </div>
          
          <div className="flex gap-4 flex-wrap">
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} className="w-5 h-5 accent-black border-[2px] border-black rounded" />
                <span className="font-bold">Uppercase</span>
             </label>
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)} className="w-5 h-5 accent-black border-[2px] border-black rounded" />
                <span className="font-bold">Numbers</span>
             </label>
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeSymbols} onChange={e => setIncludeSymbols(e.target.checked)} className="w-5 h-5 accent-black border-[2px] border-black rounded" />
                <span className="font-bold">Symbols</span>
             </label>
          </div>
        </div>

        <Button onClick={generate} className="w-full bg-[#ffab40] hover:bg-[#ffb95e]">
           Generate New
        </Button>

      </CardContent>
    </Card>
  );
}
