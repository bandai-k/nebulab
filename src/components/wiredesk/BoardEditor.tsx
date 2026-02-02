"use client";

import { ParkingFlowBoard } from "@/types/wiredesk";

interface BoardEditorProps {
  board: ParkingFlowBoard;
  onChange: (board: ParkingFlowBoard) => void;
}

/**
 * フォームのラベル付きフィールドラッパー
 */
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-[#5c4d3c]">
        {label}
        {required && <span className="text-[#b87333] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

/**
 * テキスト入力の共通スタイル
 */
const inputClass =
  "w-full px-3 py-2 text-sm rounded-lg border border-[#ddc9a3] bg-white/80 text-[#3d2f24] placeholder:text-[#8b7355]/60 focus:outline-none focus:ring-2 focus:ring-[#d4a574]/50 focus:border-[#d4a574]";

const textareaClass =
  "w-full px-3 py-2 text-sm rounded-lg border border-[#ddc9a3] bg-white/80 text-[#3d2f24] placeholder:text-[#8b7355]/60 focus:outline-none focus:ring-2 focus:ring-[#d4a574]/50 focus:border-[#d4a574] resize-none";

const checkboxClass =
  "w-4 h-4 rounded border-[#ddc9a3] text-[#b87333] focus:ring-[#d4a574]";

const selectClass =
  "w-full px-3 py-2 text-sm rounded-lg border border-[#ddc9a3] bg-white/80 text-[#3d2f24] focus:outline-none focus:ring-2 focus:ring-[#d4a574]/50 focus:border-[#d4a574]";

export default function BoardEditor({ board, onChange }: BoardEditorProps) {
  // フィールド更新ヘルパー
  const updateField = <K extends keyof ParkingFlowBoard>(
    key: K,
    value: ParkingFlowBoard[K]
  ) => {
    onChange({ ...board, [key]: value, updatedAt: Date.now() });
  };

  const updatePains = (updates: Partial<ParkingFlowBoard["pains"]>) => {
    onChange({
      ...board,
      pains: { ...board.pains, ...updates },
      updatedAt: Date.now(),
    });
  };

  const updateCta = (updates: Partial<ParkingFlowBoard["cta"]>) => {
    onChange({
      ...board,
      cta: { ...board.cta, ...updates },
      updatedAt: Date.now(),
    });
  };

  const updatePhotoNotes = (
    updates: Partial<ParkingFlowBoard["photoNotes"]>
  ) => {
    onChange({
      ...board,
      photoNotes: { ...board.photoNotes, ...updates },
      updatedAt: Date.now(),
    });
  };

  const updateActions = (updates: Partial<ParkingFlowBoard["actions"]>) => {
    onChange({
      ...board,
      actions: { ...board.actions, ...updates },
      updatedAt: Date.now(),
    });
  };

  const updateOffers = (updates: Partial<ParkingFlowBoard["offers"]>) => {
    onChange({
      ...board,
      offers: { ...board.offers, ...updates },
      updatedAt: Date.now(),
    });
  };

  return (
    <div className="space-y-6">
      {/* 基本情報セクション */}
      <section>
        <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3 pb-2 border-b border-[#ddc9a3]">
          基本情報
        </h3>
        <div className="space-y-4">
          <Field label="店舗名" required>
            <input
              type="text"
              className={inputClass}
              value={board.storeName}
              onChange={(e) => updateField("storeName", e.target.value)}
              placeholder="例: カフェ ネビュラ"
            />
          </Field>

          <Field label="住所">
            <input
              type="text"
              className={inputClass}
              value={board.address ?? ""}
              onChange={(e) => updateField("address", e.target.value)}
              placeholder="例: 東京都渋谷区..."
            />
          </Field>

          <Field label="目印">
            <input
              type="text"
              className={inputClass}
              value={board.landmark ?? ""}
              onChange={(e) => updateField("landmark", e.target.value)}
              placeholder="例: コンビニの隣のビル"
            />
          </Field>

          <Field label="GoogleマップURL">
            <input
              type="url"
              className={inputClass}
              value={board.mapUrl ?? ""}
              onChange={(e) => updateField("mapUrl", e.target.value)}
              placeholder="https://maps.google.com/..."
            />
          </Field>

          <Field label="LINE URL（予約用）">
            <input
              type="url"
              className={inputClass}
              value={board.lineUrl ?? ""}
              onChange={(e) => updateField("lineUrl", e.target.value)}
              placeholder="https://line.me/R/ti/p/..."
            />
          </Field>
        </div>
      </section>

      {/* Before（課題）セクション */}
      <section>
        <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3 pb-2 border-b border-[#ddc9a3]">
          Before（お客様の課題）
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClass}
              checked={board.pains.parkingUnknown}
              onChange={(e) =>
                updatePains({ parkingUnknown: e.target.checked })
              }
            />
            <span className="text-sm text-[#5c4d3c]">
              駐車場の場所が分からない
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClass}
              checked={board.pains.entranceUnknown}
              onChange={(e) =>
                updatePains({ entranceUnknown: e.target.checked })
              }
            />
            <span className="text-sm text-[#5c4d3c]">入口が分からない</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClass}
              checked={board.pains.nightHard}
              onChange={(e) => updatePains({ nightHard: e.target.checked })}
            />
            <span className="text-sm text-[#5c4d3c]">夜だと分かりづらい</span>
          </label>

          <Field label="補足メモ">
            <textarea
              className={textareaClass}
              rows={2}
              value={board.pains.note ?? ""}
              onChange={(e) => updatePains({ note: e.target.value })}
              placeholder="その他の課題があれば..."
            />
          </Field>
        </div>
      </section>

      {/* After（CTA）セクション */}
      <section>
        <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3 pb-2 border-b border-[#ddc9a3]">
          After（解決後のアクション）
        </h3>
        <div className="space-y-4">
          <Field label="メインCTA">
            <select
              className={selectClass}
              value={board.cta.primary}
              onChange={(e) =>
                updateCta({
                  primary: e.target.value as ParkingFlowBoard["cta"]["primary"],
                })
              }
            >
              <option value="parking_place">駐車場の場所を見る</option>
              <option value="navigate_parking">駐車場まで案内</option>
            </select>
          </Field>

          <Field label="サブCTA（任意）">
            <select
              className={selectClass}
              value={board.cta.secondary ?? "none"}
              onChange={(e) =>
                updateCta({
                  secondary: e.target.value as ParkingFlowBoard["cta"]["secondary"],
                })
              }
            >
              <option value="none">なし</option>
              <option value="call">電話する</option>
              <option value="line">LINEで問い合わせ</option>
            </select>
          </Field>
        </div>
      </section>

      {/* 写真3点セットのメモ */}
      <section>
        <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3 pb-2 border-b border-[#ddc9a3]">
          写真3点セット（撮影メモ）
        </h3>
        <div className="space-y-4">
          <Field label="駐車場入口">
            <input
              type="text"
              className={inputClass}
              value={board.photoNotes.parkingEntrance ?? ""}
              onChange={(e) =>
                updatePhotoNotes({ parkingEntrance: e.target.value })
              }
              placeholder="例: 大通りからの入口を撮影"
            />
          </Field>

          <Field label="駐車区画">
            <input
              type="text"
              className={inputClass}
              value={board.photoNotes.parkingSpot ?? ""}
              onChange={(e) =>
                updatePhotoNotes({ parkingSpot: e.target.value })
              }
              placeholder="例: 店舗専用の区画番号を入れて"
            />
          </Field>

          <Field label="駐車場から入口まで">
            <input
              type="text"
              className={inputClass}
              value={board.photoNotes.parkingToEntrance ?? ""}
              onChange={(e) =>
                updatePhotoNotes({ parkingToEntrance: e.target.value })
              }
              placeholder="例: 階段を上がって右手"
            />
          </Field>
        </div>
      </section>

      {/* 改善ポイント */}
      <section>
        <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3 pb-2 border-b border-[#ddc9a3]">
          改善ポイント
        </h3>
        <div className="space-y-4">
          <Field label="今日やること">
            <input
              type="text"
              className={inputClass}
              value={board.actions.today ?? ""}
              onChange={(e) => updateActions({ today: e.target.value })}
              placeholder="例: 写真撮影"
            />
          </Field>

          <Field label="今週やること">
            <input
              type="text"
              className={inputClass}
              value={board.actions.thisWeek ?? ""}
              onChange={(e) => updateActions({ thisWeek: e.target.value })}
              placeholder="例: 導線ページ作成"
            />
          </Field>

          <Field label="次のステップ">
            <input
              type="text"
              className={inputClass}
              value={board.actions.next ?? ""}
              onChange={(e) => updateActions({ next: e.target.value })}
              placeholder="例: Googleマップに写真追加"
            />
          </Field>
        </div>
      </section>

      {/* 提案メニュー */}
      <section>
        <h3 className="text-sm font-semibold text-[#5c4d3c] mb-3 pb-2 border-b border-[#ddc9a3]">
          提案メニュー
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClass}
              checked={board.offers.meoSetup}
              onChange={(e) => updateOffers({ meoSetup: e.target.checked })}
            />
            <span className="text-sm text-[#5c4d3c]">MEO初期整備</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClass}
              checked={board.offers.onePageSite}
              onChange={(e) => updateOffers({ onePageSite: e.target.checked })}
            />
            <span className="text-sm text-[#5c4d3c]">導線サイト（1ページ）</span>
          </label>

          <Field label="補足メモ">
            <textarea
              className={textareaClass}
              rows={2}
              value={board.offers.note ?? ""}
              onChange={(e) => updateOffers({ note: e.target.value })}
              placeholder="追加の提案があれば..."
            />
          </Field>
        </div>
      </section>
    </div>
  );
}
