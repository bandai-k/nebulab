# Nebulab

Nebulab（ネビュラボ）のコーポレートサイト＆社内ツール群

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Package Manager**: npm

## Getting Started

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start

# リント
npm run lint
```

開発サーバー起動後、[http://localhost:3000](http://localhost:3000) でアクセス可能。

## Project Structure

```
src/
├── app/                    # App Router ページ
│   ├── page.tsx           # トップページ
│   ├── about/             # 会社概要
│   ├── philosophy/        # 経営理念
│   ├── history/           # 沿革
│   ├── services/          # サービス一覧
│   │   └── meo/           # MEO LP
│   ├── projects/          # プロジェクト実績
│   ├── products/          # プロダクト紹介
│   ├── news/              # お知らせ
│   ├── insights/          # インサイト記事
│   ├── recruit/           # 採用情報
│   ├── contact/           # お問い合わせ
│   ├── privacy/           # プライバシーポリシー
│   ├── terms/             # 利用規約
│   ├── sitemap/           # サイトマップ
│   └── tools/             # 社内ツール
│       └── wiredesk/      # WireDesk Lite
├── components/            # 共通コンポーネント
│   ├── ui/               # UI部品（Button, Card等）
│   ├── layout/           # レイアウト（Header, Footer等）
│   └── wiredesk/         # WireDesk専用コンポーネント
├── lib/                   # ユーティリティ・ロジック
└── types/                 # 型定義
```

## Tools

### WireDesk Lite

営業用の導線図・LPワイヤーフレームを作成するツール。

- **URL**: `/tools/wiredesk/templates`
- **機能**:
  - 3種類のテンプレート（駐車場案内、予約獲得LP、キャンペーンLP）
  - 6種類のテーマカラー
  - リアルタイムプレビュー
  - PNG出力（LP単体 / 編集画面込み）
- **データ保存**: localStorage（認証なし、DB不要）

## Design System

サイト全体のデザインは温かみのあるセピア系カラーパレットを採用：

- **Primary Text**: `#3d2f24`
- **Secondary Text**: `#5c4d3c`
- **Muted Text**: `#8b7355`
- **Background**: `#fff8e7`
- **Accent**: `#b87333`（銅色）
- **Border**: `#ddc9a3`

## License

Private - All rights reserved.
