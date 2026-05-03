"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function UuidCalculator() {
  const [uuid, setUuid] = useState<string>('');

  const generateUUID = () => {
    // Generate UUID v4
    const newUuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    setUuid(newUuid);
  };

  useEffect(() => {
    generateUUID();
  }, []);

  const copyToClipboard = () => {
    if (uuid) {
      navigator.clipboard.writeText(uuid);
      alert('UUID copied to clipboard!');
    }
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">UUID Generator</CardTitle>
        <CardDescription className="text-black font-bold">Generate random Version 4 UUIDs instantly.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6 text-center">
        <div className="bg-gray-100 p-8 rounded-2xl border-[3px] border-black">
          <p className="font-mono text-2xl font-bold text-black break-all select-all">{uuid}</p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={generateUUID}
            className="px-6 py-3 bg-black text-white font-bold rounded-xl border-2 border-black hover:bg-gray-800 transition-colors"
          >
            Generate New UUID
          </button>
          <button 
            onClick={copyToClipboard}
            className="px-6 py-3 bg-white text-black font-bold rounded-xl border-2 border-black hover:bg-gray-100 transition-colors"
          >
            Copy
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
