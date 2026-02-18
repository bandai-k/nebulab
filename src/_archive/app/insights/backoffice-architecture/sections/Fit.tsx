import { Card, H2 } from "../components/Ui";

export const Fit = () => {
    return (
        <section id="fit" className="space-y-4">
            <H2 id="fit">この構成が向いているケース</H2>

            <Card>
                <ul className="list-disc space-y-2 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                    <li>バックオフィス中心の業務システム（抽出、データ出力、運用画面）</li>
                    <li>例外対応や運用ルールの追加が多い領域</li>
                    <li>レガシー基盤を活かしつつ段階的に改善したい</li>
                    <li>「どこに何を書くか」を固定して保守性を上げたい</li>
                    <li>設計〜実装〜検証の境界を明確にしたい</li>
                </ul>
            </Card>
        </section>
    );
};
