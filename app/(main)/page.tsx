import { calculatorsList } from '@/lib/calculators';
import Link from 'next/link';

export default function DirectoryPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black mb-6 leading-tight max-w-4xl">
          The internet's free, embeddable calculator library.
        </h2>
        <p className="text-xl font-medium text-gray-800 mb-8 max-w-2xl">
          From splitting bills to gross margins. Fully SEO-optimized calculators ready to drop into your site.
        </p>
        <div className="flex justify-start">
          <input
            type="text"
            placeholder="Search 500+ calculators..."
            className="w-full max-w-lg h-14 rounded-2xl border-[3px] border-black px-6 focus:ring-0 focus:outline-none focus:border-[#ff6e50] shadow-[6px_6px_0_0_#000] text-lg font-bold placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Grid of Catalogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {calculatorsList.map((calc, i) => {
          const colors = ['bg-[#ff6e50]', 'bg-[#9ed8a0]', 'bg-[#ffd043]', 'bg-[#4a8eff]', 'bg-[#ff94e0]'];
          const bgColor = colors[i % colors.length];

          return (
            <Link key={calc.slug} href={`/calculators/${calc.slug}`} className="group h-full">
              <div className="h-full rounded-[24px] border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 flex flex-col gap-4">
                <div className={`h-14 w-14 rounded-2xl ${bgColor} border-[3px] border-black flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <span className="text-black font-black text-2xl">{calc.title.charAt(0)}</span>
                </div>

                <div className="flex-1">
                  <div className="text-sm font-extrabold uppercase tracking-wider text-gray-600 mb-2">
                    {calc.category}
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 leading-tight">
                    {calc.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-base leading-relaxed">
                    {calc.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <span className="inline-block bg-black text-white font-bold text-sm px-4 py-2 rounded-xl border-2 border-black group-hover:bg-transparent group-hover:text-black transition-colors">
                    Open Calculator
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
