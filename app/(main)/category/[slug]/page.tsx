import { calculatorsList } from "@/lib/calculators";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slug.toLowerCase();
  const canonicalUrl = new URL(
    `/category/${category}`,
    "https://calchub.adilhusain.xyz",
  );

  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Calculators | CalcHub`,
    description: `Browse our collection of free, embeddable calculators in the ${category} category.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Calculators | CalcHub`,
      description: `Browse our collection of free, embeddable calculators in the ${category} category.`,
      url: canonicalUrl.toString(),
      siteName: "CalcHub",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${category} calculators | CalcHub`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Calculators | CalcHub`,
      description: `Browse our collection of free, embeddable calculators in the ${category} category.`,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const categories = Array.from(
    new Set(calculatorsList.map((c) => c.category.toLowerCase())),
  );
  return categories.map((c) => ({ slug: c }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filteredList = calculatorsList.filter(
    (calc) => calc.category.toLowerCase() === slug.toLowerCase(),
  );

  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-black mb-6 leading-tight max-w-4xl capitalize">
          {slug} Calculators
        </h2>
        <p className="text-xl font-medium text-gray-800 mb-8 max-w-2xl">
          Browse our collection of free, embeddable calculators in the {slug}{" "}
          category.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredList.map((calc, i) => {
          const colors = [
            "bg-[#ff6e50]",
            "bg-[#9ed8a0]",
            "bg-[#ffd043]",
            "bg-[#4a8eff]",
            "bg-[#ff94e0]",
          ];
          const bgColor = colors[i % colors.length];

          return (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="group h-full"
            >
              <div className="h-full rounded-[24px] border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 flex flex-col gap-4">
                <div
                  className={`h-14 w-14 rounded-2xl ${bgColor} border-[3px] border-black flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="text-black font-black text-2xl">
                    {calc.title.charAt(0)}
                  </span>
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
          );
        })}
      </div>
    </div>
  );
}
