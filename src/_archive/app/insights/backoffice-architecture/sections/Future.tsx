import { Card, H2, Subtle } from "../components/Ui";

export const Future = () => {
    return (
        <section id="future" className="space-y-4">
            <H2 id="future">将来拡張（帳票生成・履歴管理）</H2>

            <Card>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    まずは「抽出」「対象外適用」「CSV出力」を安定させると、その後の拡張（帳票生成・操作履歴）が積み上げやすくなります。
                    最初から全部を同時に作ると、要件が揺れた時に設計が崩れやすいので、段階的に進めるのが安全です。
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            帳票生成（後日）
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>ReportGeneratorサービスを追加</li>
                            <li>DIで設定/実装を注入（テンプレ・フォーマット等）</li>
                            <li>UseCaseから呼び出し（I/F固定）</li>
                        </ul>
                    </div>

                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            履歴管理（後日）
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>履歴テーブル（ヘッダ/明細）</li>
                            <li>抽出条件の保存（再現性）</li>
                            <li>作成者/作成日時など監査項目</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "var(--cosmic-latte)" }}>
                    <Subtle>拡張は「UseCaseに機能を追加する」形で積み上げると、影響範囲が読みやすくなります。</Subtle>
                </div>
            </Card>
        </section>
    );
};
