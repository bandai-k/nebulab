import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { NUMBER_ASSETS } from "@/components/decor/brushAssets";
import ViewMore from "@/components/ui/ViewMore";

/**
 * サービス(指示書 v2 §5.4)。4項目を横罫線で区切って縦に並べる。
 * 左に番号、中央に名前と説明、右に「View More」の導線。アイコンは使わない。
 *
 * 番号は筆の画像。装飾なので aria-hidden を付け、サービス名はテキストで書く。
 * 04「地域のIT支援」は必ず残す。順序を下げることで優先度を表現する(§5.4)。
 */
type ServiceCode = keyof typeof NUMBER_ASSETS;

type Service = {
  code: ServiceCode;
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
    description: "成田市を中心に、中小企業や地域団体のIT活用・DXを支援",
    href: "/services#local",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-rule py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <Reveal stagger={0}>
          <SectionHeading
            label="SERVICES"
            heading="つくることと、つくれるようにすること。"
            color="amber"
          />
        </Reveal>

        <Reveal as="ul" className="mt-16 border-t border-rule" delay={120}>
          {services.map((s) => {
            const num = NUMBER_ASSETS[s.code];
            return (
              <li key={s.code} className="border-b border-rule">
                <Link
                  href={s.href}
                  className="group grid grid-cols-[3.5rem_1fr] items-center gap-x-6 py-8 md:grid-cols-[5rem_1fr_auto] md:gap-x-12 md:py-10"
                >
                  <Image
                    src={num.src}
                    alt=""
                    aria-hidden="true"
                    width={num.width}
                    height={num.height}
                    sizes="80px"
                    className="pointer-events-none h-auto w-full max-w-[3.5rem] md:max-w-[4.25rem]"
                  />

                  <div>
                    <h3 className="font-display text-base font-normal tracking-[0.04em] text-ink md:text-lg">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-xs leading-7 text-ink-sub md:text-sm">
                      {s.description}
                    </p>
                  </div>

                  <span className="col-start-2 mt-4 md:col-start-3 md:mt-0 md:justify-self-end">
                    <ViewMore
                      label={`${s.name} の詳細を見る`}
                      className="transition-opacity group-hover:opacity-80"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
