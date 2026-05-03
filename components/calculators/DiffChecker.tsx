"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";

export function DiffChecker() {
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');

  const checkDiff = () => {
    if (!text1 && !text2) return null;
    
    if (text1 === text2) {
      return { match: true, message: "Texts are identical.", lengthDiff: 0 };
    }
    
    // Very basic comparison
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    
    const maxLines = Math.max(lines1.length, lines2.length);
    let diffLines = 0;
    
    for (let i = 0; i < maxLines; i++) {
      if (lines1[i] !== lines2[i]) diffLines++;
    }
    
    return { 
      match: false, 
      message: `Found differences in ${diffLines} line(s).`,
      lengthDiff: text1.length - text2.length
    };
  };

  const result = checkDiff();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Diff Checker</CardTitle>
        <CardDescription className="text-black font-bold">Compare two text snippets to check if they match.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="text1" className="font-bold">Original Text</Label>
              <span className="text-xs font-bold text-gray-500">{text1.length} chars</span>
            </div>
            <textarea 
              id="text1" 
              className="w-full border-2 border-black rounded-xl p-4 min-h-[200px] font-mono text-sm resize-y bg-red-50"
              placeholder="Paste original text here..."
              value={text1} 
              onChange={(e) => setText1(e.target.value)} 
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="text2" className="font-bold">Modified Text</Label>
              <span className="text-xs font-bold text-gray-500">{text2.length} chars</span>
            </div>
            <textarea 
              id="text2" 
              className="w-full border-2 border-black rounded-xl p-4 min-h-[200px] font-mono text-sm resize-y bg-green-50"
              placeholder="Paste modified text here..."
              value={text2} 
              onChange={(e) => setText2(e.target.value)} 
            />
          </div>
        </div>

        {result && (
          <div className="mt-8">
            {result.match ? (
              <div className="bg-[#9ed8a0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-3xl font-black text-black">✅ Identical</p>
                <p className="text-black font-bold mt-2">{result.message}</p>
              </div>
            ) : (
              <div className="bg-[#ff94e0] p-6 rounded-2xl border-[3px] border-black text-center shadow-[4px_4px_0_0_#000]">
                <p className="text-3xl font-black text-black">❌ Differences Found</p>
                <p className="text-black font-bold mt-2">{result.message}</p>
                {result.lengthDiff !== 0 && (
                  <p className="text-red-700 text-sm mt-1 font-medium">
                    Length difference: {Math.abs(result.lengthDiff)} characters {result.lengthDiff > 0 ? 'less' : 'more'}.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
