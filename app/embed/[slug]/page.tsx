import { calculatorsList } from "@/lib/calculators";
import { getCalculatorComponent } from "@/components/calculators/registry";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const calc = calculatorsList.find((c) => c.slug === slug);
  if (!calc) return { title: "Not Found" };

  const canonicalUrl = new URL(
    `/embed/${calc.slug}`,
    "https://calchub.adilhusain.xyz",
  );

  return {
    title: `${calc.title} | CalcHub Embed`,
    description: calc.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${calc.title} | CalcHub Embed`,
      description: calc.description,
      url: canonicalUrl.toString(),
      siteName: "CalcHub",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${calc.title} | CalcHub Embed`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${calc.title} | CalcHub Embed`,
      description: calc.description,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EmbedCalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const calc = calculatorsList.find((c) => c.slug === slug);
  if (!calc) return notFound();

  return (
    <div className="w-full max-w-md mx-auto">
      {getCalculatorComponent(calc.slug)}

      {/* Optional powered by tag inside embeds */}
      <div className="mt-3 text-center text-xs text-gray-400 font-medium">
        Powered by{" "}
        <a
          href="/"
          target="_blank"
          className="hover:text-gray-600 transition-colors"
        >
          CalcHub
        </a>
      </div>
    </div>
  );
}
