"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createBoardFromTemplate, saveBoard } from "@/lib/wiredesk";

/**
 * 新規ボード作成ロジック
 * useSearchParamsを使うため、Suspenseでラップが必要
 */
function NewBoardCreator() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const templateId = searchParams.get("template");
    const themeId = searchParams.get("theme");

    if (!templateId) {
      setError("テンプレートが指定されていません");
      return;
    }

    // テンプレートからボードを生成（テーマ指定可能）
    const newBoard = createBoardFromTemplate(templateId, themeId ?? undefined);

    if (!newBoard) {
      setError("不明なテンプレートです");
      return;
    }

    // localStorage に保存
    const saved = saveBoard(newBoard);

    if (!saved) {
      setError("ボードの保存に失敗しました。ブラウザの設定を確認してください。");
      return;
    }

    // 編集ページにリダイレクト
    router.replace(`/tools/wiredesk/board/${newBoard.id}`);
  }, [searchParams, router]);

  // エラー表示
  if (error) {
    return (
      <div className="text-center">
        <p className="text-[#b87333] font-semibold mb-4">{error}</p>
        <a
          href="/tools/wiredesk/templates"
          className="text-[#8b7355] underline hover:text-[#5c4d3c]"
        >
          テンプレート一覧に戻る
        </a>
      </div>
    );
  }

  // ローディング表示
  return (
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-[#8b7355]">ボードを作成中...</p>
    </div>
  );
}

/**
 * ローディングフォールバック
 */
function LoadingFallback() {
  return (
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-[#8b7355]">読み込み中...</p>
    </div>
  );
}

export default function WireDeskNewBoardPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] flex items-center justify-center px-4">
      <Suspense fallback={<LoadingFallback />}>
        <NewBoardCreator />
      </Suspense>
    </main>
  );
}
