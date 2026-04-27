import Link from "next/link";
import { company } from "@/data/company";

const externalProjects = [
  { href: "https://www.nrt-loft.jp", label: "NRT-LOFT" },
  { href: "https://www.narita-guide.com", label: "narita-guide.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyber-border-dim">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="text-xs text-cyber-text-muted">
          &copy; 2026 {company.name}
        </span>
        <div className="flex flex-col items-center gap-3 text-xs md:flex-row md:gap-6">
          <div className="flex items-center gap-4">
            {externalProjects.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-cyber-text-muted transition-colors hover:text-white"
              >
                {p.label} ↗
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-cyber-text-muted transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-cyber-text-muted transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
