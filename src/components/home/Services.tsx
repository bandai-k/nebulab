import Link from "next/link";

/**
 * サービス(指示書 §5.4)。4項目を横罫線で区切って縦に並べる。
 * 左に細い番号、中央に名前と説明、右に詳細リンク。アイコンは使わない。
 *
 * 04「地域のIT支援」は残すが、順序を下げることで優先度を表現する(§5.4)。
 * リンク先は /services の各項目。アンカーは Phase 4 で作成済み。
 */
type Service = {
  code: string;
  name: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    code: "01",
    name: "受託開発",
    description:
      "業務システムやWebサービスの設計・開発・運用までワンストップで",
    href: "/services#development",
  },
  {
    code: "02",
    name: "内製化支援",
    description:
      "技術力向上や開発プロセスの整備を通じて、チームの自走をサポート",
    href: "/services#enablement",
  },
  {
    code: "03",
    name: "自社プロダクト",
    description: "自ら課題を見つけ、プロダクトを開発・運用。得た知見を還元",
    href: "/services#products",
  },
  {
    code: "04",
    name: "地域のIT支援",
    description:
      "成田市を中心に、中小企業や地域団体のIT活用・DXを支援",
    href: "/services#local",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-cyber-border-dim py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
          SERVICES
        </p>

        <ul className="mt-14 border-t border-cyber-border-dim">
          {services.map((s) => (
            <li key={s.code} className="border-b border-cyber-border-dim">
              <Link
                href={s.href}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-8 md:grid-cols-[auto_1fr_auto] md:gap-x-12 md:py-10"
              >
                {/* 数字は細い明朝で大きめに、暗い面に浮かせる(§タイポグラフィ) */}
                <span className="font-display text-2xl font-extralight tracking-[0.08em] text-cyber-text-muted transition-colors group-hover:text-cyber-text-secondary md:text-3xl">
                  {s.code}
                </span>

                <div>
                  <h3 className="font-display text-base font-normal tracking-[0.06em] text-cyber-text md:text-lg">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-xs leading-7 text-cyber-text-secondary md:text-sm">
                    {s.description}
                  </p>
                </div>

                <span className="col-span-2 mt-4 font-mono text-[10px] tracking-[0.25em] text-cyber-text-muted transition-colors group-hover:text-cyber-text-secondary md:col-span-1 md:mt-0 md:justify-self-end">
                  詳しく →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
