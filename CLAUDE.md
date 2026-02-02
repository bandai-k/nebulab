# CLAUDE.md

このファイルは Claude Code がプロジェクトを理解するためのコンテキストを提供します。

## プロジェクト概要

Nebulab（ネビュラボ）のコーポレートサイト + 社内ツール群。Next.js 16 App Router + TypeScript + Tailwind CSS v4 で構築。

## コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run lint     # ESLint 実行
```

## アーキテクチャ

### ディレクトリ構成

- `src/app/` - App Router ページ（file-based routing）
- `src/components/` - 共有コンポーネント
  - `ui/` - Button, Card, Badge 等の汎用UI部品
  - `layout/` - Header, Footer, Navigation
  - `wiredesk/` - WireDesk Lite 専用コンポーネント
- `src/lib/` - ユーティリティ関数、定数、ロジック
- `src/types/` - TypeScript 型定義

### デザインパターン

- **カラーパレット**: セピア系（`#fff8e7` 背景、`#3d2f24` テキスト、`#b87333` アクセント）
- **コンポーネント**: 既存の `Card`, `Button`, `Badge` を再利用
- **アニメーション**: Framer Motion 使用
- **スタイリング**: Tailwind CSS v4 + `clsx` + `tailwind-merge`

### WireDesk Lite

営業用ワイヤーフレーム作成ツール（`/tools/wiredesk/`）

**ファイル構成**:
- `src/app/tools/wiredesk/templates/page.tsx` - テンプレート選択ページ
- `src/app/tools/wiredesk/board/new/page.tsx` - 新規ボード作成（リダイレクト）
- `src/app/tools/wiredesk/board/[id]/page.tsx` - ボード編集ページ
- `src/components/wiredesk/BoardEditor.tsx` - 左側フォーム
- `src/components/wiredesk/BoardPreview.tsx` - 右側プレビュー
- `src/components/wiredesk/TemplateThumb.tsx` - サムネイル
- `src/lib/wiredesk.ts` - ユーティリティ、テンプレート・テーマ定義
- `src/types/wiredesk.ts` - 型定義

**テンプレート**: `parking` | `reservation` | `campaign`

**テーマ**: `warm` | `clean` | `bold` | `forest` | `slate` | `cherry`

**テーマCSS変数**:
```css
--wd-bg      /* 背景色 */
--wd-panel   /* パネル色 */
--wd-border  /* ボーダー色 */
--wd-text    /* テキスト色 */
--wd-muted   /* サブテキスト色 */
--wd-accent  /* アクセント色 */
```

**データ保存**: localStorage（キー: `wiredesk_boards`）

## コーディング規約

- **言語**: 日本語コメント可、変数名は英語
- **コンポーネント**: `"use client"` は必要な場合のみ
- **Suspense**: `useSearchParams()` 使用時は必ず Suspense でラップ
- **インポート**: `@/` エイリアスを使用（例: `@/components/ui/Button`）
- **型**: 厳格な TypeScript、`any` 禁止

## 注意事項

- 認証機能なし（パブリックサイト + localStorage ベースのツール）
- DB 接続なし
- 外部API呼び出しなし（フォーム送信を除く）
- PNG出力は `html-to-image` ライブラリ使用
