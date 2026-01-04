import { Card, H2, Subtle } from "../components/Ui";

export const Exclusion = () => {
    return (
        <section id="exclusion" className="space-y-4">
            <H2 id="exclusion">対象外マスタの管理（追加/削除）</H2>

            <Card>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    対象外マスタは、参照だけでなく追加・削除が運用上必要になることが多いです。
                    追加/削除は「Modelだけでも実装できる」一方で、重複登録・削除の扱い（復活させたい等）・権限・監査といった要件が増えがちです。
                    そのため責務としては{" "}
                    <span className="font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                        Model＝CRUD、UseCase＝業務ルール
                    </span>{" "}
                    の分担が安全です。
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            Modelが担当（CRUD）
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>一覧取得（有効な対象外）</li>
                            <li>追加（登録 or 再有効化）</li>
                            <li>削除（推奨：論理削除）</li>
                        </ul>
                    </div>

                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            UseCaseが担当（業務ルール）
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>重複時の扱い（エラー/無視/再有効化）</li>
                            <li>削除可否（運用ルールに従う）</li>
                            <li>メッセージ・例外の統一</li>
                            <li>将来の監査/履歴要件への拡張</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "var(--cosmic-latte)" }}>
                    <Subtle>
                        早期はModelに「insertOrReactivate」「deactivate」のような運用を見据えたI/Fを用意し、
                        ルールはUseCaseに寄せると、要件が増えた際にも崩れにくくなります。
                    </Subtle>
                </div>
            </Card>
        </section>
    );
};
