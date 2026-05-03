"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-sm font-bold text-black hover:underline border-[2px] border-black px-4 py-2 rounded-xl bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-shadow"
    >
      &larr; Back to Directory
    </button>
  );
}
