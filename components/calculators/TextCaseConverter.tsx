"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';

export function TextCaseConverter() {
  const [text, setText] = useState('');

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () => {
    setText(text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  };
  const toSentence = () => {
     setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase()));
  };

  const copy = () => navigator.clipboard.writeText(text);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Case Converter</CardTitle>
        <CardDescription>Convert your text to any casing format.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <textarea
           className="w-full h-40 p-4 rounded-xl border-[3px] border-black font-medium resize-y focus:outline-none focus:ring-2 focus:ring-black shadow-[4px_4px_0_0_#e5e7eb] focus:shadow-[4px_4px_0_0_#000] transition-shadow text-black"
           placeholder="Enter your text here..."
           value={text}
           onChange={e => setText(e.target.value)}
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
           <Button variant="secondary" onClick={toUpper} className="h-10 text-sm">UPPERCASE</Button>
           <Button variant="secondary" onClick={toLower} className="h-10 text-sm">lowercase</Button>
           <Button variant="secondary" onClick={toTitle} className="h-10 text-sm">Title Case</Button>
           <Button variant="secondary" onClick={toSentence} className="h-10 text-sm">Sentence case</Button>
        </div>

        <Button onClick={copy} className="w-full mt-4" variant="default">
           Copy Result
        </Button>
      </CardContent>
    </Card>
  );
}
