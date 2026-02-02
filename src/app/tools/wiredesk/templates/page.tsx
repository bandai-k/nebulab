"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { TEMPLATES, THEMES } from "@/lib/wiredesk";
import { TemplateId, ThemeId } from "@/types/wiredesk";
import TemplateThumb from "@/components/wiredesk/TemplateThumb";

/**
 * テーマ選択チップグループ
 */
function ThemeChipGroup({
  availableThemes,
  selectedTheme,
  onSelect,
}: {
  availableThemes: ThemeId[];
  selectedTheme: ThemeId;
  onSelect: (themeId: ThemeId) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {availableThemes.map((themeId) => {
        const theme = THEMES.find((t) => t.id === themeId);
        const isSelected = themeId === selectedTheme;
        return (
          <button
            key={themeId}
            onClick={() => onSelect(themeId)}
            className={`
              flex items-center gap-1.5 px-2 py-1 rounded-full text-xs transition-all
              ${
                isSelected
                  ? "bg-[#3d2f24] text-white shadow-sm"
                  : "bg-white/80 text-[#5c4d3c] border border-[#ddc9a3] hover:border-[#b87333]"
              }
            `}
          >
            {/* カラードット */}
            <span
              className="w-3 h-3 rounded-full border border-white/50 shrink-0"
              style={{ backgroundColor: theme?.colors.accent }}
            />
            <span className="font-medium">{theme?.name}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * テンプレートカード
 */
function TemplateCard({
  templateId,
  name,
  description,
  defaultThemeId,
  availableThemes,
}: {
  templateId: TemplateId;
  name: string;
  description: string;
  defaultThemeId: ThemeId;
  availableThemes: ThemeId[];
}) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>(defaultThemeId);

  const createUrl = `/tools/wiredesk/board/new?template=${templateId}&theme=${selectedTheme}`;

  return (
    <Card variant="highlight" className="p-0 overflow-hidden">
      {/* サムネイル */}
      <div className="p-3 pb-0">
        <TemplateThumb templateId={templateId} themeId={selectedTheme} />
      </div>

      {/* コンテンツ */}
      <div className="p-4 pt-3">
        <h3 className="text-base font-semibold text-[#3d2f24] mb-2">{name}</h3>
        <p className="text-xs text-[#8b7355] leading-relaxed mb-3">
          {description}
        </p>

        {/* テーマ選択 */}
        <div className="mb-4">
          <p className="text-[10px] text-[#8b7355] mb-1.5 font-medium">テーマ</p>
          <ThemeChipGroup
            availableThemes={availableThemes}
            selectedTheme={selectedTheme}
            onSelect={setSelectedTheme}
          />
        </div>

        <Button
          as="a"
          href={createUrl}
          variant="primary"
          size="sm"
          className="w-full"
        >
          このテンプレで作成
        </Button>
      </div>
    </Card>
  );
}

export default function WireDeskTemplatesPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#3d2f24] tracking-wide mb-2">
            WireDesk Lite
          </h1>
          <p className="text-[#8b7355]">
            営業用の導線図・LPワイヤーを作成・編集できるツールです。
          </p>
        </div>

        {/* テンプレート一覧（3枚カード） */}
        <section>
          <h2 className="text-lg font-semibold text-[#5c4d3c] mb-4">
            テンプレートを選択
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {TEMPLATES.map((template) => (
              <TemplateCard
                key={template.id}
                templateId={template.id}
                name={template.name}
                description={template.description}
                defaultThemeId={template.defaultThemeId}
                availableThemes={template.availableThemes}
              />
            ))}
          </div>
        </section>

        {/* 使い方ヒント */}
        <section className="mt-12">
          <Card className="p-6 bg-white/40">
            <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3">
              使い方
            </h3>
            <ol className="text-sm text-[#8b7355] space-y-2">
              <li>1. テンプレートを選び、好みのテーマ（配色）をクリック</li>
              <li>2. 「このテンプレで作成」をクリック</li>
              <li>3. 左側のフォームで店舗情報・課題・提案内容を入力</li>
              <li>4. 右側のプレビューをリアルタイムで確認</li>
              <li>5. ヘッダーの「テーマ」セレクトで後から配色を変更可能</li>
              <li>6. 「PNG（LP）」でプレビューのみ、「PNG（全体）」で編集画面込みで画像保存</li>
            </ol>
          </Card>
        </section>
      </div>
    </main>
  );
}
