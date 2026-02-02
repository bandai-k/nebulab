"use client";

import { forwardRef } from "react";
import { ParkingFlowBoard } from "@/types/wiredesk";
import { getThemeCssVars } from "@/lib/wiredesk";

interface BoardPreviewProps {
  board: ParkingFlowBoard;
}

// ============================================================
// 共通コンポーネント（CSS変数参照）
// ============================================================

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[11px] font-bold tracking-wide mb-2"
      style={{ color: "var(--wd-text)" }}
    >
      {children}
    </h3>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="italic" style={{ color: "var(--wd-muted)", opacity: 0.6 }}>
      {children}
    </span>
  );
}

function WireframeBox({
  label,
  note,
  aspectRatio = "4/3",
}: {
  label: string;
  note?: string;
  aspectRatio?: string;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="border border-dashed rounded flex items-center justify-center"
        style={{
          aspectRatio,
          backgroundColor: "color-mix(in srgb, var(--wd-bg) 60%, var(--wd-panel))",
          borderColor: "var(--wd-border)",
        }}
      >
        <span className="text-[9px]" style={{ color: "var(--wd-muted)" }}>
          {label}
        </span>
      </div>
      {note && (
        <p
          className="text-[8px] mt-1 truncate"
          style={{ color: "var(--wd-muted)" }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function CtaWire({
  label,
  variant = "primary",
  showQr = false,
}: {
  label: string;
  variant?: "primary" | "secondary" | "muted";
  showQr?: boolean;
}) {
  const getStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "var(--wd-accent)",
          color: "#FFFFFF",
          borderColor: "var(--wd-accent)",
        };
      case "secondary":
        return {
          backgroundColor: "var(--wd-panel)",
          color: "var(--wd-text)",
          borderColor: "var(--wd-muted)",
        };
      case "muted":
      default:
        return {
          backgroundColor: "color-mix(in srgb, var(--wd-bg) 50%, var(--wd-panel))",
          color: "var(--wd-muted)",
          borderColor: "var(--wd-border)",
        };
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex-1 text-center text-[9px] font-semibold py-2 px-3 rounded border"
        style={getStyles()}
      >
        {label}
      </div>
      {showQr && (
        <div
          className="w-8 h-8 border border-dashed rounded flex items-center justify-center shrink-0"
          style={{ borderColor: "var(--wd-border)" }}
        >
          <span className="text-[7px]" style={{ color: "var(--wd-muted)" }}>
            QR
          </span>
        </div>
      )}
    </div>
  );
}

function Header({ storeName }: { storeName: string }) {
  return (
    <header
      className="px-4 py-2 flex items-center justify-between"
      style={{
        backgroundColor: "var(--wd-text)",
        color: "var(--wd-panel)",
      }}
    >
      <span className="text-[10px] font-semibold truncate max-w-[50%]">
        {storeName || <Placeholder>店舗名</Placeholder>}
      </span>
      <div className="flex items-center gap-1">
        {["電話", "地図", "予約"].map((item) => (
          <span
            key={item}
            className="text-[8px] px-2 py-0.5 rounded"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </header>
  );
}

function FooterCta({ label }: { label: string }) {
  return (
    <section
      className="pt-3"
      style={{ borderTop: "1px solid var(--wd-border)" }}
    >
      <CtaWire label={label} variant="primary" showQr />
      <div
        className="flex items-center justify-between mt-2 text-[8px]"
        style={{ color: "var(--wd-muted)" }}
      >
        <span>無料診断（15分）承ります</span>
        <span className="font-semibold" style={{ color: "var(--wd-text)" }}>
          NEBULAB
        </span>
      </div>
    </section>
  );
}

function StoreInfo({ board }: { board: ParkingFlowBoard }) {
  return (
    <section
      className="rounded-lg p-3"
      style={{
        backgroundColor: "color-mix(in srgb, var(--wd-bg) 40%, var(--wd-panel))",
      }}
    >
      <SectionHeading>店舗情報</SectionHeading>
      <div className="grid grid-cols-2 gap-2 text-[8px]">
        <div>
          <p style={{ color: "var(--wd-muted)" }} className="mb-0.5">
            住所
          </p>
          <p style={{ color: "var(--wd-text)" }}>
            {board.address || <Placeholder>未入力</Placeholder>}
          </p>
        </div>
        <div>
          <p style={{ color: "var(--wd-muted)" }} className="mb-0.5">
            営業時間
          </p>
          <p style={{ color: "var(--wd-text)" }}>
            <Placeholder>10:00-19:00</Placeholder>
          </p>
        </div>
        <div>
          <p style={{ color: "var(--wd-muted)" }} className="mb-0.5">
            定休日
          </p>
          <p style={{ color: "var(--wd-text)" }}>
            <Placeholder>日曜日</Placeholder>
          </p>
        </div>
        <div>
          <p style={{ color: "var(--wd-muted)" }} className="mb-0.5">
            地図
          </p>
          {board.mapUrl ? (
            <p className="underline truncate" style={{ color: "var(--wd-accent)" }}>
              Googleマップ
            </p>
          ) : (
            <p style={{ color: "var(--wd-text)" }}>
              <Placeholder>URL未設定</Placeholder>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function StepFlow({ steps }: { steps: { step: string; label: string }[] }) {
  return (
    <div className="flex items-center justify-between gap-1">
      {steps.map((item, i) => (
        <div key={item.step} className="flex items-center flex-1">
          <div
            className="flex-1 rounded py-2 text-center border"
            style={{
              backgroundColor: "color-mix(in srgb, var(--wd-bg) 60%, var(--wd-panel))",
              borderColor: "var(--wd-border)",
            }}
          >
            <span
              className="block text-[8px] mb-0.5"
              style={{ color: "var(--wd-muted)" }}
            >
              STEP {item.step}
            </span>
            <span
              className="text-[9px] font-semibold"
              style={{ color: "var(--wd-text)" }}
            >
              {item.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span className="text-xs px-0.5" style={{ color: "var(--wd-accent)" }}>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div
      className="rounded p-2 border"
      style={{
        backgroundColor: "var(--wd-panel)",
        borderColor: "var(--wd-border)",
      }}
    >
      <p className="text-[9px] font-semibold" style={{ color: "var(--wd-text)" }}>
        Q. {q}
      </p>
      <p className="text-[8px] mt-0.5" style={{ color: "var(--wd-muted)" }}>
        A. {a}
      </p>
    </div>
  );
}

// ============================================================
// 駐車場案内LP（parking）
// ============================================================

function ParkingPreview({ board }: { board: ParkingFlowBoard }) {
  const faqItems = [
    board.pains.parkingUnknown && {
      q: "駐車場はどこですか？",
      a: board.landmark || "地図でご確認ください",
    },
    board.pains.entranceUnknown && {
      q: "入口はどこですか？",
      a: "写真でご案内しています",
    },
    board.pains.nightHard && {
      q: "夜でも分かりますか？",
      a: "目印の写真を掲載しています",
    },
  ].filter(Boolean) as { q: string; a: string }[];

  const ctaLabel =
    board.cta.primary === "navigate_parking"
      ? "駐車場まで案内"
      : "駐車場の場所を見る";

  return (
    <div className="p-4 space-y-4">
      {/* HERO */}
      <section
        className="rounded-lg p-4 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--wd-accent) 10%, var(--wd-panel))",
        }}
      >
        <h1
          className="text-sm font-bold mb-1"
          style={{ color: "var(--wd-text)" }}
        >
          迷わず駐車場に着けます
        </h1>
        <p className="text-[9px] mb-3" style={{ color: "var(--wd-muted)" }}>
          {board.address || <Placeholder>住所を入力</Placeholder>}
          {" / "}
          <Placeholder>営業時間</Placeholder>
        </p>
        <div className="space-y-2">
          <CtaWire label={ctaLabel} variant="primary" showQr />
          {board.cta.secondary === "call" && (
            <CtaWire label="電話で問い合わせ" variant="secondary" />
          )}
          {board.cta.secondary === "line" && (
            <CtaWire label="LINEで問い合わせ" variant="muted" />
          )}
        </div>
      </section>

      {/* 駐車場案内 */}
      <section>
        <SectionHeading>駐車場のご案内</SectionHeading>
        <p className="text-[9px] mb-2" style={{ color: "var(--wd-text)" }}>
          {board.landmark ? (
            <>目印: {board.landmark}</>
          ) : (
            <Placeholder>目印を入力すると表示されます</Placeholder>
          )}
        </p>
        <div className="grid grid-cols-3 gap-2">
          <WireframeBox
            label="1. 駐車場入口"
            note={board.photoNotes.parkingEntrance}
          />
          <WireframeBox
            label="2. 駐車区画"
            note={board.photoNotes.parkingSpot}
          />
          <WireframeBox
            label="3. 駐車場→入口"
            note={board.photoNotes.parkingToEntrance}
          />
        </div>
      </section>

      {/* 来店までの流れ */}
      <section>
        <SectionHeading>来店までの流れ</SectionHeading>
        <StepFlow
          steps={[
            { step: "1", label: "地図で確認" },
            { step: "2", label: "駐車" },
            { step: "3", label: "入店" },
          ]}
        />
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section>
          <SectionHeading>よくあるご質問</SectionHeading>
          <div className="space-y-1.5">
            {faqItems.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
          {board.pains.note && (
            <p
              className="text-[8px] mt-1.5 italic"
              style={{ color: "var(--wd-muted)" }}
            >
              補足: {board.pains.note}
            </p>
          )}
        </section>
      )}

      <StoreInfo board={board} />
      <FooterCta label={ctaLabel} />
    </div>
  );
}

// ============================================================
// 予約獲得LP（reservation）
// ============================================================

function LineCtaWithWarning({
  lineUrl,
  showQr = false,
}: {
  lineUrl?: string;
  showQr?: boolean;
}) {
  const hasLineUrl = lineUrl && lineUrl.trim() !== "";
  return (
    <div>
      <CtaWire label="LINEで予約" variant="primary" showQr={showQr} />
      {!hasLineUrl && (
        <p
          className="text-[7px] mt-1 text-center"
          style={{ color: "var(--wd-accent)" }}
        >
          ※ LINEリンク未設定（要設定）
        </p>
      )}
    </div>
  );
}

function ReservationPreview({ board }: { board: ParkingFlowBoard }) {
  return (
    <div className="p-4 space-y-4">
      {/* HERO */}
      <section
        className="rounded-lg p-4 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--wd-accent) 10%, var(--wd-panel))",
        }}
      >
        <h1
          className="text-sm font-bold mb-1"
          style={{ color: "var(--wd-text)" }}
        >
          {board.storeName || <Placeholder>店舗名</Placeholder>}
        </h1>
        <p className="text-[9px] mb-3" style={{ color: "var(--wd-muted)" }}>
          <Placeholder>キャッチコピーを入力</Placeholder>
        </p>
        <div className="space-y-2">
          <LineCtaWithWarning lineUrl={board.lineUrl} showQr />
          <CtaWire label="電話で予約" variant="secondary" />
        </div>
      </section>

      {/* 信頼・実績 */}
      <section>
        <SectionHeading>選ばれる理由</SectionHeading>
        <div className="grid grid-cols-3 gap-2">
          <WireframeBox label="実績・受賞" aspectRatio="1/1" />
          <WireframeBox label="口コミ" aspectRatio="1/1" />
          <WireframeBox label="メディア掲載" aspectRatio="1/1" />
        </div>
      </section>

      {/* メニュー */}
      <section>
        <SectionHeading>メニュー・料金</SectionHeading>
        <div className="space-y-2">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex items-center gap-2 rounded p-2 border"
              style={{
                backgroundColor: "var(--wd-panel)",
                borderColor: "var(--wd-border)",
              }}
            >
              <div
                className="w-12 h-12 border border-dashed rounded flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--wd-bg) 60%, var(--wd-panel))",
                  borderColor: "var(--wd-border)",
                }}
              >
                <span className="text-[8px]" style={{ color: "var(--wd-muted)" }}>
                  写真
                </span>
              </div>
              <div className="flex-1">
                <p
                  className="text-[9px] font-semibold"
                  style={{ color: "var(--wd-text)" }}
                >
                  <Placeholder>メニュー名 {n}</Placeholder>
                </p>
                <p className="text-[8px]" style={{ color: "var(--wd-muted)" }}>
                  <Placeholder>¥X,XXX〜</Placeholder>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 予約導線 */}
      <section>
        <SectionHeading>ご予約の流れ</SectionHeading>
        <StepFlow
          steps={[
            { step: "1", label: "LINE予約" },
            { step: "2", label: "確認連絡" },
            { step: "3", label: "ご来店" },
          ]}
        />
      </section>

      {/* FAQ */}
      <section>
        <SectionHeading>よくあるご質問</SectionHeading>
        <div className="space-y-1.5">
          <FaqItem q="予約なしでも大丈夫？" a="ご予約優先です" />
          <FaqItem q="キャンセル料はかかる？" a="前日までは無料です" />
        </div>
      </section>

      <StoreInfo board={board} />

      {/* フッターCTA */}
      <section
        className="pt-3"
        style={{ borderTop: "1px solid var(--wd-border)" }}
      >
        <LineCtaWithWarning lineUrl={board.lineUrl} showQr />
        <div
          className="flex items-center justify-between mt-2 text-[8px]"
          style={{ color: "var(--wd-muted)" }}
        >
          <span>無料診断（15分）承ります</span>
          <span className="font-semibold" style={{ color: "var(--wd-text)" }}>
            NEBULAB
          </span>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// キャンペーンLP（campaign）
// ============================================================

function CampaignPreview({ board }: { board: ParkingFlowBoard }) {
  return (
    <div className="p-4 space-y-4">
      {/* オファー（HERO） */}
      <section
        className="rounded-lg p-4 text-center"
        style={{
          backgroundColor: "var(--wd-accent)",
          color: "#FFFFFF",
        }}
      >
        <p className="text-[8px] mb-1 opacity-90">期間限定キャンペーン</p>
        <h1 className="text-base font-bold mb-2">
          <span style={{ color: "#FFFFFF" }}>
            <Placeholder>特典内容を入力</Placeholder>
          </span>
        </h1>
        <p className="text-[9px] opacity-90">
          {board.storeName || <Placeholder>店舗名</Placeholder>}
        </p>
      </section>

      {/* 期限 */}
      <section
        className="rounded-lg p-3 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--wd-accent) 10%, var(--wd-panel))",
        }}
      >
        <p className="text-[8px] mb-1" style={{ color: "var(--wd-muted)" }}>
          キャンペーン期間
        </p>
        <p className="text-sm font-bold" style={{ color: "var(--wd-accent)" }}>
          <Placeholder>〜 2024/XX/XX まで</Placeholder>
        </p>
      </section>

      {/* 特典内容 */}
      <section>
        <SectionHeading>特典内容</SectionHeading>
        <div
          className="rounded p-3 border"
          style={{
            backgroundColor: "var(--wd-panel)",
            borderColor: "var(--wd-border)",
          }}
        >
          <div className="flex items-start gap-2">
            <span
              className="text-[8px] px-2 py-0.5 rounded shrink-0"
              style={{
                backgroundColor: "var(--wd-accent)",
                color: "#FFFFFF",
              }}
            >
              特典
            </span>
            <p className="text-[9px]" style={{ color: "var(--wd-text)" }}>
              <Placeholder>具体的な特典内容を記載</Placeholder>
            </p>
          </div>
        </div>
      </section>

      {/* 対象 */}
      <section>
        <SectionHeading>対象となる方</SectionHeading>
        <div
          className="rounded-lg p-3"
          style={{
            backgroundColor: "color-mix(in srgb, var(--wd-bg) 40%, var(--wd-panel))",
          }}
        >
          <ul className="text-[9px] space-y-1" style={{ color: "var(--wd-text)" }}>
            {["対象条件1", "対象条件2", "対象条件3"].map((item, i) => (
              <li key={i} className="flex items-start gap-1">
                <span style={{ color: "var(--wd-accent)" }}>✓</span>
                <Placeholder>{item}</Placeholder>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 利用の流れ */}
      <section>
        <SectionHeading>ご利用の流れ</SectionHeading>
        <StepFlow
          steps={[
            { step: "1", label: "申込" },
            { step: "2", label: "確認" },
            { step: "3", label: "利用" },
          ]}
        />
      </section>

      {/* 注意事項 */}
      <section>
        <SectionHeading>注意事項</SectionHeading>
        <div
          className="rounded p-2 border"
          style={{
            backgroundColor: "var(--wd-panel)",
            borderColor: "var(--wd-border)",
          }}
        >
          <ul
            className="text-[8px] space-y-0.5"
            style={{ color: "var(--wd-muted)" }}
          >
            <li>・他キャンペーンとの併用不可</li>
            <li>・1組様1回限り</li>
            <li>
              <Placeholder>・その他注意事項</Placeholder>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <CtaWire label="キャンペーンに申し込む" variant="primary" showQr />
        {board.cta.secondary === "call" && (
          <div className="mt-2">
            <CtaWire label="電話で申し込む" variant="secondary" />
          </div>
        )}
        {board.cta.secondary === "line" && (
          <div className="mt-2">
            <CtaWire label="LINEで申し込む" variant="muted" />
          </div>
        )}
      </section>

      <StoreInfo board={board} />
      <FooterCta label="キャンペーンに申し込む" />
    </div>
  );
}

// ============================================================
// メインコンポーネント
// ============================================================

const BoardPreview = forwardRef<HTMLDivElement, BoardPreviewProps>(
  ({ board }, ref) => {
    const renderContent = () => {
      switch (board.templateId) {
        case "reservation":
          return <ReservationPreview board={board} />;
        case "campaign":
          return <CampaignPreview board={board} />;
        case "parking":
        default:
          return <ParkingPreview board={board} />;
      }
    };

    // テーマのCSS変数を取得
    const themeCssVars = getThemeCssVars(board.themeId);

    return (
      <div
        ref={ref}
        className="border shadow-lg overflow-hidden"
        style={{
          ...themeCssVars,
          width: "100%",
          maxWidth: "420px",
          aspectRatio: "210 / 297",
          fontFamily:
            "-apple-system, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
          backgroundColor: "var(--wd-bg)",
          borderColor: "var(--wd-border)",
        }}
      >
        <Header storeName={board.storeName} />
        {renderContent()}
      </div>
    );
  }
);

BoardPreview.displayName = "BoardPreview";

export default BoardPreview;
