import Link from "next/link";

/**
 * /services 専用の CTA ボタン(依頼により追加)。
 *
 * 差し替え後の水彩ボタン画像は文言と矢印を画像側に焼き込み済みのため、
 * HTML テキストは視覚的に重ねず、スクリーンリーダー用に sr-only で残す。
 * 共通の .btn / Button コンポーネントとは別系統にし、他ページへは
 * 一切波及させない。
 */
export type ServiceCtaVariant = "01" | "02" | "03" | "04";

type Props = {
  href: string;
  variant: ServiceCtaVariant;
  children: React.ReactNode;
};

export default function ServiceCta({ href, variant, children }: Props) {
  return (
    <Link href={href} className={`service-cta service-cta--${variant}`}>
      <span className="sr-only">{children}</span>
    </Link>
  );
}
