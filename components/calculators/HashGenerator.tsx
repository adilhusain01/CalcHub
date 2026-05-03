"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";

export function HashGenerator() {
  const [input, setInput] = useState<string>('hello world');
  const [hashes, setHashes] = useState<Record<string, string>>({
    'SHA-1': '',
    'SHA-256': '',
    'SHA-384': '',
    'SHA-512': ''
  });

  useEffect(() => {
    const generateHashes = async () => {
      if (!input) {
        setHashes({ 'SHA-1': '', 'SHA-256': '', 'SHA-384': '', 'SHA-512': '' });
        return;
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      
      const newHashes: Record<string, string> = {};
      
      for (const algo of ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512']) {
        try {
          const hashBuffer = await crypto.subtle.digest(algo, data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          newHashes[algo] = hashHex;
        } catch (e) {
          newHashes[algo] = 'Error generating hash';
        }
      }
      
      setHashes(newHashes);
    };

    generateHashes();
  }, [input]);

  const copyToClipboard = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert('Hash copied to clipboard!');
    }
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Hash Generator</CardTitle>
        <CardDescription className="text-black font-bold">Generate secure cryptographic hashes for any text instantly.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="input" className="font-bold">Input Text</Label>
          <textarea 
            id="input" 
            className="w-full border-2 border-black rounded-xl p-4 min-h-[100px] text-sm resize-y"
            placeholder="Enter text to hash..."
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
        </div>

        {input && (
          <div className="space-y-4">
            {Object.entries(hashes).map(([algo, hash]) => (
              <div key={algo} className="space-y-1">
                <div className="flex justify-between items-center">
                  <Label className="font-bold text-gray-700">{algo}</Label>
                  <button 
                    onClick={() => copyToClipboard(hash)}
                    className="text-xs bg-gray-200 text-black px-2 py-1 rounded font-bold hover:bg-gray-300"
                  >
                    Copy
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border-[3px] border-black break-all">
                  <p className="font-mono text-sm text-black">{hash || 'Generating...'}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
