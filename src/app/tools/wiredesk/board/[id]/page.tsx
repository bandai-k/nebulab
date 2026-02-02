"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { toPng } from "html-to-image";
import { ParkingFlowBoard, ThemeId } from "@/types/wiredesk";
import {
  getBoardById,
  saveBoard,
  getTemplateById,
  THEMES,
} from "@/lib/wiredesk";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BoardEditor from "@/components/wiredesk/BoardEditor";
import BoardPreview from "@/components/wiredesk/BoardPreview";

// 依存: html-to-image
// 理由: DOM要素をPNG画像として書き出すため。軽量で依存が少ないライブラリ。

export default function WireDeskBoardPage() {
  const params = useParams();
  const router = useRouter();
  const boardId = params.id as string;

  const [board, setBoard] = useState<ParkingFlowBoard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [exporting, setExporting] = useState<"lp" | "full" | null>(null);

  // PNG書き出し対象
  const previewRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ボード読み込み
  useEffect(() => {
    const loadedBoard = getBoardById(boardId);
    if (loadedBoard) {
      setBoard(loadedBoard);
    } else {
      setError("ボードが見つかりません");
    }
    setLoading(false);
  }, [boardId]);

  // 自動保存（throttle: 500ms）
  const handleChange = useCallback((updatedBoard: ParkingFlowBoard) => {
    setBoard(updatedBoard);

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      setSaving(true);
      const success = saveBoard(updatedBoard);
      if (!success) {
        console.error("Failed to save board");
      }
      setSaving(false);
    }, 500);
  }, []);

  // クリーンアップ
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  // テーマ変更
  const handleThemeChange = (themeId: ThemeId) => {
    if (!board) return;
    const updatedBoard = { ...board, themeId, updatedAt: Date.now() };
    setBoard(updatedBoard);
    saveBoard(updatedBoard);
  };

  // テンプレートで使用可能なテーマ一覧
  const availableThemes = board
    ? getTemplateById(board.templateId)?.availableThemes ?? ["warm", "clean", "bold"]
    : [];

  // ファイル名生成
  const getFilename = (suffix: string) => {
    if (!board) return `wiredesk${suffix}.png`;
    const name = board.storeName
      ? board.storeName.replace(
          /[^a-zA-Z0-9\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g,
          "_"
        )
      : board.id;
    return `wiredesk-${name}${suffix}.png`;
  };

  // PNG書き出し（LPワイヤーのみ）
  const handleExportLp = async () => {
    if (!previewRef.current || !board) return;

    setExporting("lp");
    try {
      const element = previewRef.current;
      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 2,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const link = document.createElement("a");
      link.download = getFilename("");
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("PNG export failed:", err);
      alert("PNG書き出しに失敗しました。");
    } finally {
      setExporting(null);
    }
  };

  // PNG書き出し（全体）
  const handleExportFull = async () => {
    if (!exportRef.current || !board) return;

    setExporting("full");
    try {
      const element = exportRef.current;
      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#fff8e7",
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const link = document.createElement("a");
      link.download = getFilename("-full");
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("PNG export failed:", err);
      alert("PNG書き出しに失敗しました。");
    } finally {
      setExporting(null);
    }
  };

  // ローディング
  if (loading) {
    return (
      <main className="min-h-screen bg-[#fff8e7] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#8b7355]">読み込み中...</p>
        </div>
      </main>
    );
  }

  // エラー
  if (error || !board) {
    return (
      <main className="min-h-screen bg-[#fff8e7] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-[#b87333] font-semibold mb-4">
            {error || "ボードが見つかりません"}
          </p>
          <a
            href="/tools/wiredesk/templates"
            className="text-[#8b7355] underline hover:text-[#5c4d3c]"
          >
            テンプレート一覧に戻る
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8e7]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-10 bg-[#fff8e7]/95 backdrop-blur-sm border-b border-[#ddc9a3]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/tools/wiredesk/templates")}
              className="text-[#8b7355] hover:text-[#5c4d3c] transition-colors"
              aria-label="戻る"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-semibold text-[#3d2f24]">
                {board.storeName || "新規ボード"}
              </h1>
              <p className="text-xs text-[#8b7355]">
                {saving ? "保存中..." : "自動保存済み"}
              </p>
            </div>
          </div>

          {/* テーマ選択 & PNG書き出しボタン */}
          <div className="flex items-center gap-3">
            {/* テーマセレクト */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="theme-select"
                className="text-xs text-[#8b7355] hidden sm:inline"
              >
                テーマ
              </label>
              <select
                id="theme-select"
                value={board.themeId}
                onChange={(e) => handleThemeChange(e.target.value as ThemeId)}
                className="px-2 py-1.5 text-xs rounded-lg border border-[#ddc9a3] bg-white text-[#3d2f24] focus:outline-none focus:ring-2 focus:ring-[#d4a574]/50"
              >
                {availableThemes.map((themeId) => {
                  const theme = THEMES.find((t) => t.id === themeId);
                  return (
                    <option key={themeId} value={themeId}>
                      {theme?.name ?? themeId}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* PNG書き出しボタン */}
            <Button
              variant="secondary"
              size="sm"
              onClick={handleExportLp}
              disabled={exporting !== null}
            >
              {exporting === "lp" ? "..." : "PNG（LP）"}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleExportFull}
              disabled={exporting !== null}
            >
              {exporting === "full" ? "..." : "PNG（全体）"}
            </Button>
          </div>
        </div>
      </header>

      {/* メインコンテンツ（2カラム） */}
      <div ref={exportRef} className="max-w-7xl mx-auto px-4 py-6 bg-[#fff8e7]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左カラム: 編集フォーム */}
          <div>
            <Card className="p-6">
              <BoardEditor board={board} onChange={handleChange} />
            </Card>
          </div>

          {/* 右カラム: プレビュー */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#8b7355] mb-4">プレビュー</p>
            <BoardPreview ref={previewRef} board={board} />
          </div>
        </div>
      </div>
    </main>
  );
}
