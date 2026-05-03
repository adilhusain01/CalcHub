"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

export function EmbedInstructions({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const embedCode = `<iframe src="${origin}/embed/${slug}" width="100%" height="560" style="border: 3px solid black; border-radius: 24px; box-shadow: 4px 4px 0px black;"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!origin) return <div className="h-20 bg-white/50 border-[3px] border-black animate-pulse rounded-2xl"></div>;

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-white border-[3px] border-black rounded-2xl text-black font-medium text-sm overflow-x-auto whitespace-pre-wrap word-break shadow-[4px_4px_0_0_#000]">
        {embedCode}
      </div>
      <div>
        <Button 
          size="default" 
          variant="default" 
          onClick={handleCopy}
          className="w-full shadow-[2px_2px_0_0_#000]"
        >
          {copied ? <Check className="h-5 w-5 mr-2" /> : <Copy className="h-5 w-5 mr-2" />}
          {copied ? 'Copied HTML' : 'Copy Embed Code'}
        </Button>
      </div>
    </div>
  );
}
