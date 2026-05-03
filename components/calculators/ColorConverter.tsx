"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';

export function ColorConverter() {
  const [hex, setHex] = useState('#ff6e50');
  const [rgb, setRgb] = useState('rgb(255, 110, 80)');

  const hexToRgb = (h: string) => {
    let r = 0, g = 0, b = 0;
    if (h.length === 4) {
      r = parseInt(h[1] + h[1], 16);
      g = parseInt(h[2] + h[2], 16);
      b = parseInt(h[3] + h[3], 16);
    } else if (h.length === 7) {
      r = parseInt(h[1] + h[2], 16);
      g = parseInt(h[3] + h[4], 16);
      b = parseInt(h[5] + h[6], 16);
    }
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const val = e.target.value;
     setHex(val);
     if (/^#([0-9A-F]{3}){1,2}$/i.test(val)) {
        setRgb(hexToRgb(val));
     }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Color Converter</CardTitle>
        <CardDescription>Convert HEX to RGB quickly.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div 
          className="w-full h-32 rounded-xl border-[3px] border-black shadow-[4px_4px_0_0_#000] transition-colors"
          style={{ backgroundColor: /^#([0-9A-F]{3}){1,2}$/i.test(hex) ? hex : '#ffffff' }}
        />

        <div className="space-y-4">
           <div>
              <label className="font-extrabold uppercase text-xs mb-1 block">HEX Color</label>
              <Input value={hex} onChange={handleHexChange} className="font-mono text-lg uppercase" placeholder="#FFFFFF" />
           </div>
           <div>
              <label className="font-extrabold uppercase text-xs mb-1 block">RGB Value</label>
              <Input value={rgb} readOnly className="font-mono text-lg bg-gray-50 text-gray-500" />
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
