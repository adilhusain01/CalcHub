import { calculatorsList } from "@/lib/calculators";
import { getCalculatorComponent } from "@/components/calculators/registry";
import { notFound } from "next/navigation";
import { EmbedInstructions } from "@/components/EmbedInstructions";
import { BackButton } from "@/components/BackButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const calc = calculatorsList.find((c) => c.slug === slug);
  if (!calc) return { title: "Not Found" };

  const canonicalUrl = new URL(
    `/calculators/${calc.slug}`,
    "https://calchub.adilhusain.xyz",
  );

  return {
    title: `${calc.title} | CalcHub`,
    description: calc.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${calc.title} | CalcHub`,
      description: calc.description,
      url: canonicalUrl.toString(),
      siteName: "CalcHub",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${calc.title} | CalcHub`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${calc.title} | CalcHub`,
      description: calc.description,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  return calculatorsList.map((calc) => ({
    slug: calc.slug,
  }));
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const calc = calculatorsList.find((c) => c.slug === slug);
  if (!calc) return notFound();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <BackButton />
        <div className="inline-flex align-center px-3 py-1 rounded-full text-xs font-extrabold bg-[#4a8eff] text-white border-2 border-black uppercase tracking-wider shadow-[2px_2px_0_0_#000]">
          {calc.category}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto pb-12">
        {/* The robust component itself */}
        <div className="lg:col-span-7 xl:col-span-8 w-full">
          {getCalculatorComponent(calc.slug)}
        </div>

        {/* Embed Instructions */}
        <div className="lg:col-span-5 xl:col-span-4 w-full sticky top-8">
          <div className="bg-[#a7e0a5] border-[3px] border-black rounded-[24px] p-6 shadow-[4px_4px_0_0_#000]">
            <h3 className="font-black text-2xl text-black mb-2">
              Embed for Free
            </h3>
            <p className="text-base font-medium text-gray-800 mb-6">
              Drop this calculator into your site's HTML to give your visitors
              instant value.
            </p>
            <EmbedInstructions slug={calc.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
