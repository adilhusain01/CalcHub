"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";

export function JsonFormatter() {
  const [input, setInput] = useState<string>('');

  const getFormatResult = () => {
    if (!input.trim()) {
      return { output: '', error: null };
    }
    
    try {
      const parsed = JSON.parse(input);
      return { output: JSON.stringify(parsed, null, 2), error: null };
    } catch (e: any) {
      return { output: input, error: e.message || 'Invalid JSON' };
    }
  };

  const { output, error } = getFormatResult();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">JSON Formatter</CardTitle>
        <CardDescription className="text-black font-bold">Format and validate your JSON data instantly.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="jsonInput" className="font-bold">Input JSON</Label>
              {error && <span className="text-xs font-bold text-red-600 bg-[#ff94e0] px-2 py-1 rounded">{error}</span>}
              {!error && input.trim() && <span className="text-xs font-bold text-green-600 bg-[#9ed8a0] px-2 py-1 rounded">Valid JSON ✅</span>}
            </div>
            <textarea 
              id="jsonInput" 
              className={`w-full border-4 rounded-xl p-4 min-h-[150px] font-mono text-sm resize-y focus:outline-none focus:ring-0 ${error ? 'border-red-400' : 'border-black'}`}
              placeholder={'{"hello": "world", "numbers": [1, 2, 3]}'}
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              spellCheck="false"
            />
          </div>
        </div>

        {output && !error && (
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <Label className="font-bold text-gray-700">Formatted Output</Label>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(output);
                  alert('Formatted JSON copied!');
                }}
                className="text-xs bg-black text-white px-3 py-1 rounded font-bold hover:bg-gray-800"
              >
                Copy
              </button>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] overflow-x-auto">
              <pre className="font-mono text-green-400 text-sm whitespace-pre">{output}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
