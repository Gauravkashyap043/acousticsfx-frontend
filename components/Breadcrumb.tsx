import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site-url";

export type BreadcrumbItem = { name: string; href: string };

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className = "" }: Props) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.href.startsWith("http") ? it.href : `${SITE_URL}${it.href === "/" ? "" : it.href}`,
    })),
  };

  return (
    <>
      <SchemaMarkup schema={schema} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 list-none p-0 m-0">
          {items.map((it, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${it.href}-${it.name}`} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-gray-400" aria-hidden>
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span className="text-orange-500 font-medium" aria-current="page">
                    {it.name}
                  </span>
                ) : (
                  <Link href={it.href} className="hover:text-gray-800 transition">
                    {it.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
