"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoremIpsumCalculator() {
  const [paragraphs, setParagraphs] = useState<number | ''>(3);

  const LOREM_TEXT = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi.",
    "Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu auctor dictum. Nam vitae ex et ligula congue convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi elementum, sem id viverra venenatis, dui tortor suscipit ligula, vel lacinia augue erat in risus.",
    "Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
  ];

  const generateLorem = () => {
    if (paragraphs === '' || paragraphs <= 0) return [];
    
    const count = Math.min(20, paragraphs); // Cap at 20 for sanity
    const result = [];
    
    for (let i = 0; i < count; i++) {
      result.push(LOREM_TEXT[i % LOREM_TEXT.length]);
    }
    
    return result;
  };

  const output = generateLorem();

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#f3e5ca] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Lorem Ipsum Generator</CardTitle>
        <CardDescription className="text-black font-bold">Generate placeholder text for your designs.</CardDescription>
      </CardHeader>
      <CardContent className="pt-8 pb-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="paragraphs" className="font-bold">Number of Paragraphs (Max 20)</Label>
            <Input 
              id="paragraphs" 
              type="number" 
              className="border-2 border-black rounded-xl w-32"
              value={paragraphs} 
              onChange={(e) => setParagraphs(e.target.value === '' ? '' : Math.min(20, Math.max(1, parseInt(e.target.value))))} 
            />
          </div>
        </div>

        {output.length > 0 && (
          <div className="mt-6 space-y-4 relative">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(output.join('\n\n'));
                alert('Copied to clipboard!');
              }}
              className="absolute -top-12 right-0 px-4 py-2 bg-black text-white text-sm font-bold rounded-lg border-2 border-black hover:bg-gray-800 transition-colors"
            >
              Copy All
            </button>
            <div className="bg-gray-50 p-6 rounded-2xl border-[3px] border-black text-gray-700 text-sm leading-relaxed space-y-4 max-h-96 overflow-y-auto">
              {output.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
