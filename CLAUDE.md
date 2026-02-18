# CLAUDE.md

このファイルは Claude Code がプロジェクトを理解するためのコンテキストを提供します。

## プロジェクト概要

Nebulab — 「思考と行動の間」を埋めるAIプロダクトを複数開発するラボのコーポレートサイト + 社内ツール群。
Next.js 16 App Router + TypeScript + Tailwind CSS v4 で構築。

**サイトの役割**: AIプロダクト開発組織のコーポレートサイト。Naviを筆頭に複数プロダクトを開発。

## コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run lint     # ESLint 実行
```

## アーキテクチャ

### ディレクトリ構成

- `src/app/` - App Router ページ（file-based routing）
  - `/` - Home（MVV + Products + Status）
  - `/navi` - Navi体験フロー説明
  - `/demo` - デモ導線
  - `/lab` - 開発ログ
  - `/contact` - 連絡（メールリンクのみ）
  - `/privacy`, `/terms`, `/sitemap` - 法的ページ
  - `/tools/wiredesk/` - WireDesk Lite（社内ツール）
- `src/components/` - 共有コンポーネント
  - `layout/` - Header, Footer
  - `ui/` - Button, Card（WireDesk用に残存）
  - `wiredesk/` - WireDesk Lite 専用コンポーネント
- `src/constants/` - brand, navigation, mvv（Mission/Vision/Values）
- `src/lib/` - ユーティリティ関数
- `src/types/` - TypeScript 型定義
- `src/_archive/` - 旧サイトのアーカイブ（ビルド・lint対象外）

### デザインパターン

- **世界観**: サイバー / 電脳空間（参照: Navi LP のビジュアル言語）
- **カラーパレット**: ダークネイビー `#060d16` + シアン `#00d4ff`
- **フォント**: Orbitron（見出し・ブランド）、Share Tech Mono（ステータス・コード表示）、システムフォント（本文）
- **エフェクト**: グリッド背景、スキャンライン、グローディバイダー、パルスドット、ボックスグロー
- **CSS**: Tailwind CSS v4 `@theme` で色登録、カスタムクラスは `globals.css` に定義
- **レイアウト幅**: `max-w-2xl`（ページ）、`max-w-3xl`（ヘッダー）

### WireDesk Lite

営業用ワイヤーフレーム作成ツール（`/tools/wiredesk/`）— 独自のデザイン体系を持つ。

**データ保存**: localStorage（キー: `wiredesk_boards`）

## コーディング規約

- **言語**: 日本語コメント可、変数名は英語
- **コンポーネント**: `"use client"` は必要な場合のみ（新ページはすべてサーバーコンポーネント）
- **インポート**: `@/` エイリアスを使用（例: `@/constants/brand`）
- **型**: 厳格な TypeScript、`any` 禁止

## 注意事項

- 認証機能なし（パブリックサイト + localStorage ベースのツール）
- DB 接続なし
- 外部API呼び出しなし
- PNG出力は `html-to-image` ライブラリ使用（WireDesk用）
- Pre-existing lint errors: Button.tsx (any types), wiredesk board/new (setState in effect)
