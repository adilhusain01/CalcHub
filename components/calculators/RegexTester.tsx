"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function RegexTester() {
  const [pattern, setPattern] = useState<string>('[A-Z]\\w+');
  const [flags, setFlags] = useState<string>('g');
  const [text, setText] = useState<string>('Hello World! Testing Regex in React.');

  const testRegex = () => {
    if (!pattern) return { error: null, matches: [] };
    
    try {
      const regex = new RegExp(pattern, flags);
      const matches = [];
      let match;
      
      // If global flag is set
      if (flags.includes('g')) {
        while ((match = regex.exec(text)) !== null) {
          matches.push({
            value: match[0],
            index: match.index
          });
          // Prevent infinite loops with zero-length matches
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }
        }
      } else {
        // If no global flag
        match = regex.exec(text);
        if (match) {
          matches.push({
            value: match[0],
            index: match.index
          });
        }
      }
      
      return { error: null, matches };
    } catch (e: any) {
      return { error: e.message, matches: [] };
    }
  };

  const { error, matches } = testRegex();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Regex Tester</CardTitle>
        <CardDescription className="text-black font-bold">Test your Regular Expressions against custom text instantly.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4 items-end">
            <div className="space-y-2 flex-[3]">
              <Label htmlFor="pattern" className="font-bold">Regular Expression</Label>
              <div className="flex items-center border-2 border-black rounded-xl overflow-hidden bg-gray-50 px-3">
                <span className="font-mono text-gray-500 font-bold">/</span>
                <input 
                  id="pattern" 
                  type="text" 
                  className="flex-1 p-4 font-mono text-lg bg-transparent outline-none"
                  value={pattern} 
                  onChange={(e) => setPattern(e.target.value)} 
                />
                <span className="font-mono text-gray-500 font-bold">/</span>
              </div>
            </div>
            
            <div className="space-y-2 flex-1">
              <Label htmlFor="flags" className="font-bold">Flags</Label>
              <Input 
                id="flags" 
                type="text" 
                className="border-2 border-black rounded-xl p-4 font-mono text-lg text-center"
                value={flags} 
                onChange={(e) => setFlags(e.target.value)} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text" className="font-bold">Test Text</Label>
            <textarea 
              id="text" 
              className="w-full border-2 border-black rounded-xl p-4 min-h-[150px] font-mono text-sm resize-y"
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Label className="font-bold text-lg">Results</Label>
          
          {error ? (
            <div className="bg-[#ff94e0] p-4 rounded-xl border-[3px] border-black text-black font-mono text-sm font-bold">
              {error}
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-2xl border-[3px] border-black">
              <div className="flex justify-between items-center mb-4">
                <p className="font-bold text-gray-700">{matches.length} match{matches.length !== 1 ? 'es' : ''} found</p>
              </div>
              
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {matches.length === 0 ? (
                  <p className="text-gray-500 italic">No matches found.</p>
                ) : (
                  matches.map((m, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border-[3px] border-black flex justify-between items-center">
                      <span className="font-mono bg-[#ffd043] px-2 py-1 rounded border border-yellow-300 font-bold break-all">
                        {m.value}
                      </span>
                      <span className="text-xs text-gray-500 font-bold ml-4 whitespace-nowrap">
                        Index: {m.index}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
