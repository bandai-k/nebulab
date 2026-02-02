"use client";

import { TemplateId, ThemeId } from "@/types/wiredesk";
import { getThemeCssVars } from "@/lib/wiredesk";

interface TemplateThumbProps {
  templateId: TemplateId;
  themeId: ThemeId;
}

// ============================================================
// 共通パーツ
// ============================================================

function ThumbHeader() {
  return (
    <div
      className="h-3 px-2 flex items-center justify-between"
      style={{ backgroundColor: "var(--wd-text)" }}
    >
      <div
        className="w-8 h-1 rounded-sm"
        style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
      />
      <div className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-3 h-1 rounded-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          />
        ))}
      </div>
    </div>
  );
}

function ThumbFooter() {
  return (
    <div
      className="h-3 px-2 flex items-center justify-center"
      style={{ borderTop: "1px solid var(--wd-border)" }}
    >
      <div
        className="w-12 h-1.5 rounded-sm"
        style={{ backgroundColor: "var(--wd-accent)" }}
      />
    </div>
  );
}

function CtaBox({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  return (
    <div
      className="h-2 rounded-sm"
      style={{
        backgroundColor:
          variant === "primary" ? "var(--wd-accent)" : "var(--wd-panel)",
        border: variant === "secondary" ? "1px solid var(--wd-border)" : "none",
      }}
    />
  );
}

function SectionTitle() {
  return (
    <div
      className="w-8 h-1 rounded-sm mb-1"
      style={{ backgroundColor: "var(--wd-text)" }}
    />
  );
}

function PhotoGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex-1 aspect-square rounded-sm border border-dashed"
          style={{
            backgroundColor: "color-mix(in srgb, var(--wd-bg) 60%, var(--wd-panel))",
            borderColor: "var(--wd-border)",
          }}
        />
      ))}
    </div>
  );
}

function StepRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center flex-1">
          <div
            className="flex-1 h-3 rounded-sm"
            style={{
              backgroundColor: "color-mix(in srgb, var(--wd-bg) 60%, var(--wd-panel))",
              border: "1px solid var(--wd-border)",
            }}
          />
          {i < 3 && (
            <span
              className="text-[4px] px-0.5"
              style={{ color: "var(--wd-accent)" }}
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function InfoBlock() {
  return (
    <div
      className="h-4 rounded-sm p-1"
      style={{
        backgroundColor: "color-mix(in srgb, var(--wd-bg) 40%, var(--wd-panel))",
      }}
    >
      <div className="flex gap-1">
        <div
          className="w-4 h-1 rounded-sm"
          style={{ backgroundColor: "var(--wd-muted)", opacity: 0.5 }}
        />
        <div
          className="w-6 h-1 rounded-sm"
          style={{ backgroundColor: "var(--wd-muted)", opacity: 0.5 }}
        />
      </div>
    </div>
  );
}

// ============================================================
// 駐車場案内 サムネ
// ============================================================

function ParkingThumb() {
  return (
    <div className="p-1.5 space-y-1.5">
      {/* Hero */}
      <div
        className="rounded-sm p-1.5 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--wd-accent) 10%, var(--wd-panel))",
        }}
      >
        <div
          className="w-16 h-1.5 mx-auto rounded-sm mb-1"
          style={{ backgroundColor: "var(--wd-text)" }}
        />
        <div
          className="w-10 h-1 mx-auto rounded-sm mb-1.5"
          style={{ backgroundColor: "var(--wd-muted)", opacity: 0.5 }}
        />
        <CtaBox variant="primary" />
      </div>

      {/* 駐車場案内 */}
      <div>
        <SectionTitle />
        <PhotoGrid count={3} />
      </div>

      {/* 流れ */}
      <div>
        <SectionTitle />
        <StepRow />
      </div>

      {/* 店舗情報 */}
      <InfoBlock />
    </div>
  );
}

// ============================================================
// 予約獲得 サムネ
// ============================================================

function ReservationThumb() {
  return (
    <div className="p-1.5 space-y-1.5">
      {/* Hero */}
      <div
        className="rounded-sm p-1.5 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--wd-accent) 10%, var(--wd-panel))",
        }}
      >
        <div
          className="w-12 h-1.5 mx-auto rounded-sm mb-1"
          style={{ backgroundColor: "var(--wd-text)" }}
        />
        <div
          className="w-8 h-1 mx-auto rounded-sm mb-1.5"
          style={{ backgroundColor: "var(--wd-muted)", opacity: 0.5 }}
        />
        <div className="space-y-0.5">
          <CtaBox variant="primary" />
          <CtaBox variant="secondary" />
        </div>
      </div>

      {/* 選ばれる理由 */}
      <div>
        <SectionTitle />
        <PhotoGrid count={3} />
      </div>

      {/* メニュー */}
      <div>
        <SectionTitle />
        <div className="space-y-0.5">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex gap-1 p-0.5 rounded-sm"
              style={{
                backgroundColor: "var(--wd-panel)",
                border: "1px solid var(--wd-border)",
              }}
            >
              <div
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--wd-bg) 60%, var(--wd-panel))",
                  border: "1px dashed var(--wd-border)",
                }}
              />
              <div className="flex-1">
                <div
                  className="w-6 h-1 rounded-sm mb-0.5"
                  style={{ backgroundColor: "var(--wd-text)" }}
                />
                <div
                  className="w-4 h-0.5 rounded-sm"
                  style={{ backgroundColor: "var(--wd-muted)", opacity: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 店舗情報 */}
      <InfoBlock />
    </div>
  );
}

// ============================================================
// キャンペーン サムネ
// ============================================================

function CampaignThumb() {
  return (
    <div className="p-1.5 space-y-1.5">
      {/* オファーHero */}
      <div
        className="rounded-sm p-1.5 text-center"
        style={{ backgroundColor: "var(--wd-accent)" }}
      >
        <div
          className="w-6 h-0.5 mx-auto rounded-sm mb-0.5"
          style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
        />
        <div
          className="w-14 h-2 mx-auto rounded-sm mb-0.5"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        />
        <div
          className="w-8 h-0.5 mx-auto rounded-sm"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        />
      </div>

      {/* 期限 */}
      <div
        className="rounded-sm p-1 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--wd-accent) 10%, var(--wd-panel))",
        }}
      >
        <div
          className="w-10 h-1.5 mx-auto rounded-sm"
          style={{ backgroundColor: "var(--wd-accent)" }}
        />
      </div>

      {/* 特典内容 */}
      <div>
        <SectionTitle />
        <div
          className="rounded-sm p-1 flex items-center gap-1"
          style={{
            backgroundColor: "var(--wd-panel)",
            border: "1px solid var(--wd-border)",
          }}
        >
          <div
            className="w-3 h-1.5 rounded-sm shrink-0"
            style={{ backgroundColor: "var(--wd-accent)" }}
          />
          <div
            className="flex-1 h-1 rounded-sm"
            style={{ backgroundColor: "var(--wd-muted)", opacity: 0.4 }}
          />
        </div>
      </div>

      {/* 対象 */}
      <div>
        <SectionTitle />
        <div
          className="rounded-sm p-1"
          style={{
            backgroundColor: "color-mix(in srgb, var(--wd-bg) 40%, var(--wd-panel))",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-0.5 mb-0.5 last:mb-0">
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "var(--wd-accent)" }}
              />
              <div
                className="flex-1 h-0.5 rounded-sm"
                style={{ backgroundColor: "var(--wd-muted)", opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 店舗情報 */}
      <InfoBlock />
    </div>
  );
}

// ============================================================
// メインコンポーネント
// ============================================================

export default function TemplateThumb({
  templateId,
  themeId,
}: TemplateThumbProps) {
  const themeCssVars = getThemeCssVars(themeId);

  const renderContent = () => {
    switch (templateId) {
      case "reservation":
        return <ReservationThumb />;
      case "campaign":
        return <CampaignThumb />;
      case "parking":
      default:
        return <ParkingThumb />;
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border" style={{ borderColor: "var(--wd-border)" }}>
      {/* 縮小表示用のコンテナ */}
      <div
        className="origin-top-left"
        style={{
          ...themeCssVars,
          width: "200%",
          transform: "scale(0.5)",
          transformOrigin: "top left",
        }}
      >
        {/* A4縦比率 */}
        <div
          className="border-0"
          style={{
            aspectRatio: "210 / 297",
            backgroundColor: "var(--wd-bg)",
            fontFamily:
              "-apple-system, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
          }}
        >
          <ThumbHeader />
          {renderContent()}
          <ThumbFooter />
        </div>
      </div>
      {/* 実際の高さを確保 */}
      <div style={{ paddingBottom: "148.5%" }} /> {/* 297/210 * 50% */}
    </div>
  );
}
