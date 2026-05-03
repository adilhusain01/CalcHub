export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-transparent p-4 flex items-center justify-center">
      {children}
    </div>
  );
}
