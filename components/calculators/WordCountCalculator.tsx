"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

export function WordCountCalculator() {
  const [text, setText] = useState('');

  const calculate = () => {
    const chars = text.length;
    const charsNoSpace = text.replace(/\s+/g, '').length;
    
    // Basic word split by spaces and word boundaries
    const wordsMatch = text.match(/\S+/g);
    const words = wordsMatch ? wordsMatch.length : 0;
    
    // Average reading speed 238 words per minute
    const readingTime = Math.ceil((words / 238) * 60) || 0; // in seconds

    return { words, chars, charsNoSpace, readingTime };
  };

  const stats = calculate();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Word Counter</CardTitle>
        <CardDescription>Instant word, character, and reading time stats.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <textarea
           className="w-full h-48 p-4 rounded-xl border-[3px] border-black font-medium resize-y focus:outline-none focus:ring-2 focus:ring-black shadow-[4px_4px_0_0_#e5e7eb] focus:shadow-[4px_4px_0_0_#000] transition-shadow text-black"
           placeholder="Type or paste text here..."
           value={text}
           onChange={e => setText(e.target.value)}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
           <div className="bg-[#f8d8a7] border-[3px] border-black rounded-xl p-4 text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-3xl font-black text-black">{stats.words}</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-1 text-black">Words</p>
           </div>
           <div className="bg-[#9ed8a0] border-[3px] border-black rounded-xl p-4 text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-3xl font-black text-black">{stats.chars}</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-1 text-black">Chars</p>
           </div>
           <div className="bg-[#ff94e0] border-[3px] border-black rounded-xl p-4 text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-3xl font-black text-black">{stats.charsNoSpace}</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-1 text-black">No Spaces</p>
           </div>
           <div className="bg-[#4895ff] border-[3px] border-black rounded-xl p-4 text-center shadow-[4px_4px_0_0_#000]">
              <p className="text-3xl font-black text-white" style={{textShadow: '1px 1px 0 #000'}}>{stats.readingTime}s</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-1 text-black">Read Time</p>
           </div>
        </div>

      </CardContent>
    </Card>
  );
}
