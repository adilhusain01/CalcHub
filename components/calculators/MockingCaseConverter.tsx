"use client";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Label } from '../ui/label';

export function MockingCaseConverter() {
  const [text, setText] = useState<string>('This is a serious sentence.');

  const toMockingCase = (str: string) => {
    return str.split('').map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
  };

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">MoCkiNg CaSe GeNeRaToR</CardTitle>
        <CardDescription className="text-black font-bold">fOr WhEn YoU nEeD tO bE sArCaStIc.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label>Input Text</Label>
          <textarea 
            className="flex min-h-[100px] w-full rounded-xl border-[3px] border-black bg-white px-4 py-2 text-base font-bold shadow-[4px_4px_0_0_#e5e7eb] focus-visible:outline-none focus-visible:shadow-[4px_4px_0_0_#ff6e50] transition-shadow resize-y"
            value={text} 
            onChange={e => setText(e.target.value)} 
          />
        </div>

        <div className="space-y-2">
          <Label>Mocking Case Output</Label>
          <div className="min-h-[100px] w-full rounded-xl border-[3px] border-black bg-[#f9f9f9] px-4 py-4 text-lg font-black shadow-[4px_4px_0_0_#000] break-words">
            {toMockingCase(text)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
