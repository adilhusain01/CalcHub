import { calculatorsList } from "@/lib/calculators";
import { getCalculatorComponent } from "@/components/calculators/registry";
import { notFound } from "next/navigation";
import { EmbedInstructions } from "@/components/EmbedInstructions";
import Link from "next/link";

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
      <Link
        href="/"
        className="inline-flex items-center text-sm font-bold text-black hover:underline mb-8 border-[2px] border-black px-4 py-2 rounded-xl bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-shadow"
      >
        &larr; Back to Directory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Col - App info and SEO text */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          <div className="inline-flex align-center w-max px-3 py-1 rounded-full text-sm font-extrabold bg-[#4a8eff] text-white border-2 border-black mb-6 uppercase tracking-wider">
            {calc.category}
          </div>
          <h1 className="text-5xl font-black tracking-tight text-black mb-6 leading-tight">
            {calc.title}
          </h1>
          <p className="text-xl font-medium text-gray-800 mb-10 leading-relaxed">
            {calc.description}
          </p>

          <div className="bg-[#a7e0a5] border-[3px] border-black rounded-[24px] p-6 mb-8 shadow-[4px_4px_0_0_#000]">
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

        {/* Right Col - The robust component itself */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end lg:pt-14">
          <div className="w-full max-w-lg lg:scale-[1.05] origin-top">
            {getCalculatorComponent(calc.slug)}
          </div>
        </div>
      </div>
    </div>
  );
}
