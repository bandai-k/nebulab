import { Card, H2, H3 } from "../components/Ui";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";

export const Architecture = () => {
    return (
        <section id="prereq" className="space-y-4">
            <H2 id="prereq">前提となる構成</H2>

            <ArchitectureDiagram />

            <Card>
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <H3>ベース（MVC）</H3>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                            既存の業務システムでは、MVCに近い構造（Controller / Model / View）が採用されていることが多いです。
                            ここでは「画面の入口」「表示」「永続化」の責務をまず分け、変更の影響を限定できる状態を作ります。
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>View：テンプレート（フォーム/一覧/エラー表示）</li>
                            <li>Model：ORM/ActiveRecordなど（DB操作）</li>
                            <li>Controller：入力受付と画面制御</li>
                        </ul>
                    </div>

                    <div>
                        <H3>拡張（UseCase + DI）</H3>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                            バックオフィス機能は例外や条件追加が増えやすく、ControllerやViewに業務判断を書き始めると保守が難しくなります。
                            そこで「業務フロー」をまとめる{" "}
                            <span className="font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                                UseCase（業務ロジック層）
                            </span>{" "}
                            を置き、依存や設定はDI（YAML等）で管理します。
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>UseCase：業務手順（抽出/判定/整形）を集約</li>
                            <li>DI：設定値/差し替え点を明示し、変更を安全にする</li>
                            <li>SQLテンプレート：抽出条件の根拠を管理しやすくする</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </section>
    );
};
