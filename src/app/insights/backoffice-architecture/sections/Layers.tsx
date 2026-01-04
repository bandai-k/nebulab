import { Card, H2, H3, Subtle } from "../components/Ui";

export const Layers = () => {
    return (
        <section id="layers" className="space-y-6">
            <H2 id="layers">各レイヤーの責務</H2>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <H3>Controller</H3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                        Controllerは「入口」と「画面制御」を担当します。処理の中心を持たせず、入力の受け取りとバリデーションを行い、
                        UseCaseへ渡して結果を表示します。CSV出力のようにレスポンス制御が必要な機能はControllerが担当するのが自然です。
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                        <li>リクエスト受信、入力整理</li>
                        <li>バリデーション（必須/形式）</li>
                        <li>UseCase呼び出し</li>
                        <li>テンプレートへデータ渡し</li>
                        <li>CSVダウンロードのヘッダ付与・出力</li>
                    </ul>
                </Card>

                <Card>
                    <H3>View（Template）</H3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                        Viewは表示専用です。業務判断やDBアクセスを持たせると、「表示条件」と「業務条件」が混ざって改修難易度が上がります。
                        テンプレートはフォームと一覧表示に専念し、条件分岐は必要最小限に留めます。
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                        <li>抽出条件フォーム</li>
                        <li>抽出結果の一覧・件数表示</li>
                        <li>バリデーションエラーの表示</li>
                        <li>CSV出力ボタン</li>
                    </ul>
                </Card>

                <Card>
                    <H3>UseCase（業務ロジック層）</H3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                        UseCaseはユースケース（業務フロー）の中核です。抽出条件を受け取り、SQLテンプレートを実行して候補を取得し、
                        対象外ルールを適用したうえでCSV出力用のデータに整形します。ここに業務ルールを集約することで、仕様追加や例外対応が局所化します。
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                        <li>抽出（SQL実行）</li>
                        <li>対象外適用（対象外Model/参照SQL）</li>
                        <li>CSV列定義・フォーマット整形（列順/0埋め/結合等）</li>
                        <li>例外・エラーハンドリングの統一</li>
                    </ul>
                    <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "var(--cosmic-latte)" }}>
                        <Subtle>※帳票生成や履歴登録は、UseCaseを拡張ポイントとして後から積み上げられます。</Subtle>
                    </div>
                </Card>

                <Card>
                    <H3>Model（ORM / ActiveRecord）</H3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                        ModelはDB操作に専念させます。対象外マスタの一覧取得・追加・削除など、永続化の詳細を隠蔽し、
                        UseCase側は「何をしたいか」だけを記述できるようにします。業務ルール（重複扱い、削除可否など）はUseCase側で決めると責務が明確になります。
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                        <li>対象外マスタの参照/追加/削除（推奨：論理削除）</li>
                        <li>永続化の詳細（テーブル/カラム）を隠蔽</li>
                        <li>UseCaseが必要とする最小I/Fを提供</li>
                    </ul>
                </Card>
            </div>

            <Card>
                <H3>SQLテンプレート</H3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    抽出条件は複雑化しやすく、条件追加や微調整も頻繁に発生します。SQLテンプレートとして切り出しておくと、
                    改修時の差分が明確になり、チューニングもしやすくなります。UseCase側はSQLを呼び出して結果を加工する役に徹します。
                </p>
            </Card>
        </section>
    );
};
