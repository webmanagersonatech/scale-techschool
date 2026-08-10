import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Use "onDark" when the breadcrumb sits on a dark/royal background section */
  theme?: "onLight" | "onDark";
  className?: string;
}

export default function Breadcrumb({ items, theme = "onLight", className = "" }: BreadcrumbProps) {
  const styles =
    theme === "onDark"
      ? {
          link: "text-white/60 hover:text-gold",
          current: "text-white",
          chevron: "text-white/30",
          icon: "text-white/60",
        }
      : {
          link: "text-gray-500 hover:text-gold",
          current: "text-royal",
          chevron: "text-gray-300",
          icon: "text-gray-500",
        };

  return (
    <nav aria-label="Breadcrumb" className={`font-body ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className={`flex items-center gap-1 font-medium transition-colors duration-200 ${styles.link}`}
          >
            <Home size={14} className={styles.icon} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              <ChevronRight size={14} className={styles.chevron} />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${styles.link}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-semibold ${styles.current}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
