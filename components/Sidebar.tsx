"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calculator, Menu, X } from "lucide-react";
import { ReactNode, useState, useEffect } from "react";

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  color?: string;
  activeColor?: string;
}

export function SidebarItem({
  href,
  icon,
  label,
  color = "bg-[#f8d8a7]",
  activeColor = "bg-[#ff6e50]",
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-[20px] transition-all font-bold text-black border-[3px]",
        isActive
          ? `${activeColor} border-black shadow-[2px_2px_0_0_#000]`
          : `bg-transparent border-transparent hover:${color} hover:border-black hover:shadow-[2px_2px_0_0_#000]`,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full border-[2px] transition-colors",
          isActive ? "bg-white border-black" : "bg-black/5 border-transparent",
        )}
      >
        <div className={cn("w-5 h-5", isActive ? "text-black" : "text-black")}>
          {icon}
        </div>
      </div>
      {label}
    </Link>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="w-full lg:w-72 shrink-0 flex flex-col gap-4 self-start lg:sticky lg:top-6">
      <div className="lg:hidden w-full flex items-center justify-between p-4 border-[3px] border-black rounded-[24px] bg-white font-bold text-lg shadow-[4px_4px_0_0_#000]">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#4a8eff] border-[2px] border-black rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="CalcHub Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-black">CalcHub</span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2 flex items-center justify-center">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <aside className={cn(
        "w-full border-[3px] border-black rounded-[32px] p-6 flex-col gap-8 bg-[#f3e5ca]",
        isOpen ? "flex" : "hidden lg:flex"
      )}>
        <Link
          href="/"
          className="hidden lg:flex items-center gap-3 bg-white border-[3px] border-black rounded-[24px] p-4 group hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
        >
          <div className="bg-[#4a8eff] border-[2px] border-black rounded-full w-12 h-12 flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform">
            {/* <Calculator className="h-6 w-6 text-white" /> */}
            <img src="logo.png" alt="" className="rounded-full" />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl tracking-tight leading-none text-black">
              CalcHub
            </h1>
            <p className="text-xs font-bold text-gray-700 mt-1 uppercase tracking-wider">
              500+ Calculators
            </p>
          </div>
        </Link>

        <nav className="flex flex-col gap-2">
          <SidebarItem
            href="/"
            icon={<Calculator />}
            label="All Calculators"
            activeColor="bg-[#ff6e50]"
          />
          <SidebarItem
            href="/category/fun"
            icon={<span className="text-lg leading-none font-bold">F</span>}
            label="Fun"
            activeColor="bg-[#2cdbc2]"
            color="bg-[#cdfff7]"
          />
          <SidebarItem
            href="/category/finance"
            icon={<span className="text-lg leading-none font-bold">$</span>}
            label="Finance"
            activeColor="bg-[#9ed8a0]"
            color="bg-[#e2f5e3]"
          />
          <SidebarItem
            href="/category/health"
            icon={<span className="text-lg leading-none font-bold">♥</span>}
            label="Health"
            activeColor="bg-[#ff94e0]"
            color="bg-[#ffe4f6]"
          />
          <SidebarItem
            href="/category/business"
            icon={<span className="text-lg leading-none font-bold">B</span>}
            label="Business"
            activeColor="bg-[#4895ff]"
            color="bg-[#d2e5ff]"
          />
          <SidebarItem
            href="/category/math"
            icon={<span className="text-lg leading-none font-bold">∑</span>}
            label="Math"
            activeColor="bg-[#ffd043]"
            color="bg-[#fff1c7]"
          />
          <SidebarItem
            href="/category/everyday"
            icon={<span className="text-lg leading-none font-bold">☀</span>}
            label="Everyday"
            activeColor="bg-[#af8fff]"
            color="bg-[#e4d9ff]"
          />
          <SidebarItem
            href="/category/auto"
            icon={<span className="text-lg leading-none font-bold">A</span>}
            label="Auto"
            activeColor="bg-[#ffab40]"
            color="bg-[#ffe8cc]"
          />
          <SidebarItem
            href="/category/tools"
            icon={<span className="text-lg leading-none font-bold">T</span>}
            label="Tools"
            activeColor="bg-[#2cdbc2]"
            color="bg-[#cdfff7]"
          />

        </nav>

        <div className="mt-auto pt-2">
          <div className="bg-white border-[3px] border-black rounded-[24px] p-5 shadow-[4px_4px_0_0_#000]">
            <h4 className="font-extrabold text-lg mb-2">Embed for Free!</h4>
            <p className="text-sm font-medium text-gray-700 mb-4">
              Add these calculators to your own website with 1 line of HTML.
            </p>
            <button className="w-full bg-black text-white border-2 border-black rounded-xl py-2 font-bold hover:bg-transparent hover:text-black transition-colors">
              Learn How
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
