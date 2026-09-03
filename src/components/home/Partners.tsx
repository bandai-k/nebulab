/**
 * Partners(指示書 §5.6)。3社ではなく2社。
 *
 * 注意: 指示書 §10-3 / §10-4 のとおり、MMPR合同会社の事業内容と掲載可否、
 * および AIM の掲載許諾はいずれも未確認のまま。公開前に必ず確認すること。
 * MMPR は事業内容が確定していないため、事実を作らず社名のみを出している。
 *
 * デザイン案にあった「ヒカリコンサルティング」「ナリタデザイン」
 * 「クラウドプランツ」(架空)および「cloudpack」「GOODLIFE」「SMARTCAMP」
 * (無関係な実在企業)は使用しない(§11)。
 */
type Partner = {
  name: string;
  url?: string;
  representative?: string;
  description?: string;
};

const partners: Partner[] = [
  {
    name: "MMPR合同会社",
    // 事業内容は確認中のため未記載。確認でき次第 description を追加する。
  },
  {
    name: "株式会社AIM",
    url: "https://ai-management.biz/",
    representative: "代表取締役 石井一之",
    description:
      "生成AI活用の企業研修。初級者向けに、ChatGPTなどの生成AIを業務にどう活かすかを、企業の課題に合わせて設計した研修として提供。",
  },
];

/** NRT LOFT → AIM → NEBULAB の三層構造(§5.6)。 */
const layers: { label: string; note: string }[] = [
  { label: "NRT LOFT", note: "一般向けにAIものづくりを発信" },
  { label: "AIM", note: "法人向けに生成AI活用研修" },
  { label: "NEBULAB", note: "本格的なシステム・サービス開発" },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="border-b border-cyber-border-dim py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
          PARTNERS
        </p>

        <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          {partners.map((p) => (
            <li
              key={p.name}
              className="border-t border-cyber-border-dim pt-8"
            >
              <h3 className="font-display text-lg font-normal tracking-[0.06em] text-cyber-text">
                {p.name}
              </h3>
              {p.representative && (
                <p className="mt-2 text-xs text-cyber-text-muted">
                  {p.representative}
                </p>
              )}
              {p.description && (
                <p className="mt-4 max-w-md text-sm leading-[2] text-cyber-text-secondary">
                  {p.description}
                </p>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-block font-mono text-[10px] tracking-[0.2em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
                >
                  {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* 三層構造 — 単なる相互リンクではないことを示す */}
        <ol className="mt-20 border-t border-cyber-border-dim pt-10">
          {layers.map((l, i) => (
            <li
              key={l.label}
              className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-3 md:grid-cols-[10rem_1fr]"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-cyber-text">
                {l.label}
              </span>
              <span className="text-xs leading-6 text-cyber-text-secondary">
                {l.note}
                {i < layers.length - 1 && (
                  <span className="ml-3 text-cyber-text-muted">↓</span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
