import Link from "next/link";
import { BRAND } from "@/constants/brand";

export default function Footer() {
  return (
    <footer className="border-t border-cyber-border-dim">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8 sm:px-10">
        <span className="text-xs text-cyber-text-muted">
          &copy; {new Date().getFullYear()} {BRAND.name}
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-xs text-cyber-text-muted transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-cyber-text-muted transition-colors hover:text-white"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
