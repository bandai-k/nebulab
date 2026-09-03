import { Fragment } from "react";
import Link from "next/link";
import type { AppParagraph } from "@/data/apps";

// プライバシーポリシーページと同じリンク表現に揃える
const linkClass =
  "text-accent underline underline-offset-4 transition-colors hover:text-ink";

function InlineNodes({ value }: { value: Exclude<AppParagraph, string> }) {
  return (
    <>
      {value.map((node, i) => {
        if (typeof node === "string") {
          return <Fragment key={i}>{node}</Fragment>;
        }
        if (node.href.startsWith("/")) {
          return (
            <Link key={i} href={node.href} className={linkClass}>
              {node.text}
            </Link>
          );
        }
        return (
          <a key={i} href={node.href} className={linkClass}>
            {node.text}
          </a>
        );
      })}
    </>
  );
}

type AppParagraphsProps = {
  items: AppParagraph[];
  className?: string;
};

/** AppParagraph の配列を <p> の連なりとして描画する。 */
export default function AppParagraphs({
  items,
  className = "",
}: AppParagraphsProps) {
  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {items.map((item, i) =>
        typeof item === "string" ? (
          <p key={i}>{item}</p>
        ) : (
          <p key={i}>
            <InlineNodes value={item} />
          </p>
        )
      )}
    </div>
  );
}
