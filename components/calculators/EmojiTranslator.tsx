"use client";

import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Label } from "../ui/label";

const emojiMap: Record<string, string> = {
  love: "❤️",
  fire: "🔥",
  cool: "😎",
  star: "⭐",
  coffee: "☕",
  happy: "😊",
  sad: "😢",
  party: "🎉",
  pizza: "🍕",
  money: "💰",
  fast: "⚡",
  cat: "🐱",
  dog: "🐶",
};

export function EmojiTranslator() {
  const [text, setText] = useState("I love coffee and pizza");

  const translated = useMemo(() => {
    return text
      .split(/\s+/)
      .map((word) => {
        const clean = word.toLowerCase().replace(/[^a-z]/g, "");
        return emojiMap[clean] ? `${word} ${emojiMap[clean]}` : word;
      })
      .join(" ");
  }, [text]);

  return (
    <Card className="w-full bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-[3px] border-black rounded-[24px]">
      <CardHeader className="bg-[#fff0f6] border-b-[3px] border-black rounded-t-[21px]">
        <CardTitle className="text-2xl font-black">Emoji Translator</CardTitle>
        <CardDescription className="text-black font-bold">
          Turn plain text into emoji-friendly messages.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emoji-input">Enter your sentence</Label>
            <textarea
              id="emoji-input"
              rows={5}
              className="w-full rounded-[16px] border-[3px] border-black p-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#ff6e50]"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-[24px] bg-[#e3fcef] p-6 text-black mt-6 shadow-[4px_4px_0_0_#000] border-[3px] border-black">
          <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2">
            Emoji output
          </p>
          <p className="text-lg whitespace-pre-wrap">{translated}</p>
        </div>
      </CardContent>
    </Card>
  );
}
