import { Card, Code, H2, H3 } from "../components/Ui";

export const CsvDesign = () => {
    return (
        <section id="csv" className="space-y-6">
            <H2 id="csv">データ抽出・CSV出力の設計例</H2>

            <Card>
                <H3>要件（例）</H3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                    <li>条件に基づいて対象データを抽出し、CSVとして出力する</li>
                    <li>対象外エンティティ（マスタ）を管理画面から参照/追加/削除する</li>
                    <li>帳票（PDF等）は将来拡張</li>
                    <li>操作履歴の登録も将来拡張</li>
                </ul>
            </Card>

            <Card>
                <H3>処理フロー（安全側）</H3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    CSV出力は、プレビュー表示の結果をそのまま出すのではなく、{" "}
                    <span className="font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                        出力時に同条件で再抽出
                    </span>{" "}
                    するのがおすすめです（画面改ざんやセッション差分による事故を減らせます）。
                </p>

                <div className="mt-4">
                    <Code>{`1) 画面で条件入力 → UseCaseが抽出 → 対象外適用 → プレビュー表示
2) CSV出力アクション → 同条件で再抽出（安全）
3) UseCaseがCSV行データを生成（列順/フォーマット統一）
4) ControllerがCSVとしてダウンロード返却（header付与・必要に応じて文字コード変換）`}</Code>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            CSVで決めておくと良い項目
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>ファイル名規則（例：YYYYMMDD）</li>
                            <li>文字コード（Shift_JIS/UTF-8）</li>
                            <li>改行（CRLF推奨）</li>
                            <li>ヘッダ行の有無</li>
                            <li>対象外を含めるか（別CSVにするか）</li>
                        </ul>
                    </div>

                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            実装上のポイント
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>CSV行データ生成はUseCase、HTTP出力はController</li>
                            <li>対象外適用はUseCase（材料の取得はModel/SQL）</li>
                            <li>抽出条件はSQLテンプレートに寄せ、差分を追いやすくする</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </section>
    );
};
