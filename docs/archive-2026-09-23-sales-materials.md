# 営業資料（public/docs/）を破棄した記録 — 2026-09-23

**社長の判断で、`public/docs/` 配下の営業資料をすべて削除した。**物は残さず、この記録だけを残す。

- 削除した日: 2026-09-23
- 削除した物: `public/docs/` の11ファイル（合計 約316KB）
- **中身は Git の履歴に残っている。**削除の直前のコミットは `67e28d5`

## 何があったか

| ファイル | 中身 |
|---|---|
| `index.html` | 営業資料の索引（この一覧のページ。`/docs/` で開いていた） |
| `flyer.html` | ポスティングチラシ。A4両面、地域配布・店頭設置向け |
| `pricing-list.html` | 受託サービスの価格表。受託開発・コンサルの メニューと価格レンジ |
| `homepage-guide.html` | ホームページ制作の詳細ガイド（価格表の別冊）。プラン選びの判断フロー、含む／含まない作業の境界 |
| `concerns-guide.html` | お困りごと別サービスガイド。よくある困りごと13件と対応サービスの一覧 |
| `hp-trial.html` | HP お試し公開プラン（無料）。事例化への協力と引き換えに1ページ。先着10社・地域限定 |
| `it-support.html` | PC・スマホおたすけサービス。単発 3,000円/30分、月額 3,000円（LINE 質問無制限） |
| `samples.html` | 業種別ホームページの見本一覧（`public/sample/` へのリンク集） |
| `proposal-sample.html` | 提案書のテンプレート（構成のサンプル） |
| `business-card.html` | 名刺のデザインデータ（入稿前のレイアウト確認用） |
| `line-qr.png` | LINE の QR コード画像 |

## なぜ消したか

- 使っていない営業資料を残しておくと、**古い価格や古いサービス内容が生き続ける**（公開ディレクトリに置いてあるため、URL を知っていれば誰でも開ける状態だった）
- 検索よけ（`robots.ts` の `disallow: /docs/`）はしていたが、それは公開されていないことを意味しない
- 会社として営業のやり方を変える判断をしたため、資料そのものを持たない形にする

## 一緒に直したもの

- `src/app/hp-trial/page.tsx`: 「詳細資料(PDF 風)↗」のボタン（`/docs/hp-trial` へのリンク）を外した。**サイトから `public/docs/` への参照はこれが唯一だった**
- `~/company/index.html`（会社の資料の入口。Git 管理外）: 「Nebulab のサイトの営業資料」の行を外した
- `src/app/robots.ts` の `disallow: ["/tools/", "/docs/", "/preview/"]` は**そのまま残した**（消えたパスを拒否していても害がないため）

## 残したもの（削除していない）

- `public/sample/`（業種別の見本サイト6つ）と `public/pt/`（公開している事例2件。`/showcase` から参照）はそのまま
- 価格や売り方の考え方は、事業部（`~/company/business/`、機密・Git 管理外）にある

## 戻し方

中身が要るときは、削除の直前のコミットから取り出す。

```bash
cd ~/company/dev/nebulab
git show 67e28d5:public/docs/pricing-list.html > /tmp/pricing-list.html   # 1つだけ
git checkout 67e28d5 -- public/docs                                       # 丸ごと戻す
```
