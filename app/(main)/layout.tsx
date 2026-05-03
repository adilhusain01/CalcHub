import { Sidebar } from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1600px] mx-auto flex-1">
      <Sidebar />

      <main className="flex-1 w-full flex flex-col gap-6">
        <div className="border-[3px] border-black rounded-[32px] p-6 lg:p-10 flex flex-col bg-transparent lg:min-h-[calc(100vh-3rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}
