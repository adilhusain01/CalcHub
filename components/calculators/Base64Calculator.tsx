"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";

export function Base64Calculator() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState<string>('');

  const processBase64 = () => {
    if (!input) return '';
    try {
      if (mode === 'encode') {
        return btoa(input);
      } else {
        return atob(input);
      }
    } catch (e) {
      return 'Invalid Input for Decoding';
    }
  };

  const output = processBase64();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Base64 Encoder/Decoder</CardTitle>
        <CardDescription className="text-black font-bold">Quickly encode or decode text using Base64 format.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="font-bold">Mode</Label>
            <div className="flex gap-2">
              <button 
                onClick={() => setMode('encode')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${mode === 'encode' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Encode
              </button>
              <button 
                onClick={() => setMode('decode')}
                className={`flex-1 py-2 rounded-xl font-bold border-2 ${mode === 'decode' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
              >
                Decode
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="input" className="font-bold">Input Text</Label>
            <textarea 
              id="input" 
              className="w-full border-2 border-black rounded-xl p-4 min-h-[120px] font-mono text-sm resize-y"
              placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
            />
          </div>
        </div>

        {output && (
          <div className="mt-6 space-y-2">
            <Label className="font-bold text-black">Result</Label>
            <div className="bg-indigo-50 p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_#000] relative">
              <p className="font-mono text-black break-all whitespace-pre-wrap">{output}</p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(output);
                  alert('Copied to clipboard!');
                }}
                className="absolute top-2 right-2 text-xs bg-indigo-200 text-black px-2 py-1 rounded font-bold hover:bg-indigo-300"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
