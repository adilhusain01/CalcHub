import { calculatorsList } from "@/lib/calculators";

const baseUrl = "https://calchub.adilhusain.xyz";

export default function sitemap() {
  const calculatorUrls = calculatorsList.map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const embedUrls = calculatorsList.map((calc) => ({
    url: `${baseUrl}/embed/${calc.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const categoryUrls = Array.from(
    new Set(calculatorsList.map((calc) => calc.category.toLowerCase())),
  ).map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    ...calculatorUrls,
    ...embedUrls,
    ...categoryUrls,
  ];
}
