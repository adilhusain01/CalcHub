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

  return {
    title: `${calc.title} | CalcHub`,
    description: calc.description,
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
