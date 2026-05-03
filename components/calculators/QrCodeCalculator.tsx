"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";

export function QrCodeCalculator() {
  const [data, setData] = useState<string>('https://example.com');
  const [size, setSize] = useState<number>(200);

  // Using a reliable public API for QR code generation
  const qrUrl = data ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}` : '';

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">QR Code Generator</CardTitle>
        <CardDescription className="text-black font-bold">Instantly generate a QR code for any link or text.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="data" className="font-bold">Text or URL</Label>
            <textarea 
              id="data" 
              className="w-full border-2 border-black rounded-xl p-4 min-h-[100px] text-lg resize-y"
              placeholder="Enter text or URL here..."
              value={data} 
              onChange={(e) => setData(e.target.value)} 
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center space-y-6">
          <div className="p-4 bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] min-h-[240px] min-w-[240px] flex items-center justify-center">
            {data ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={qrUrl} 
                alt="Generated QR Code" 
                width={size} 
                height={size} 
                className="rounded-lg"
              />
            ) : (
              <p className="font-bold text-gray-400">Enter data to see QR</p>
            )}
          </div>
          
          {data && (
            <a 
              href={qrUrl} 
              download="qrcode.png"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl border-[3px] border-black hover:bg-indigo-700 transition-colors shadow-[4px_4px_0_0_#000]"
            >
              Download QR Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
