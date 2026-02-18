// app/insights/backoffice-architecture/components/OverviewDiagram.tsx
export const OverviewDiagram = () => {
    return (
      <div
        className="overflow-hidden rounded-2xl p-4 md:p-5"
        style={{
          backgroundColor: "var(--cosmic-latte)",
          border: "1px solid var(--cosmic-beige)",
        }}
      >
        {/* ヘッダ */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
              全体像：画面（MVC）→ 業務（UseCase）→ 永続化（Model/DB）
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--cosmic-brown)" }}>
              Controllerは薄く、業務フローはUseCaseへ。抽出条件はSQLテンプレートに寄せて差分が追える形にします。
            </p>
          </div>
  
          <div className="flex flex-wrap gap-2 text-xs">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{
                backgroundColor: "var(--cosmic-cream)",
                border: "1px solid var(--cosmic-beige)",
                color: "var(--cosmic-dark)",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent-gold)" }} />
              画面フロー
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{
                backgroundColor: "var(--cosmic-cream)",
                border: "1px solid var(--cosmic-beige)",
                color: "var(--cosmic-dark)",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--cosmic-tan)" }} />
              業務/永続化フロー
            </span>
          </div>
        </div>
  
        {/* 図 */}
        <div className="mt-4 overflow-x-auto">
          <svg
            viewBox="0 0 1000 430"
            className="h-auto w-[1000px] max-w-none"
            role="img"
            aria-label="全体アーキテクチャ図（上：MVC、下：UseCase/Model/SQL）"
          >
            {/* ========= 背景キャンバス ========= */}
            <rect x="20" y="20" width="960" height="390" rx="18" fill="var(--cosmic-cream)" opacity="0.55" />
  
            {/* ========= 上段レーン：MVC ========= */}
            <rect x="36" y="56" width="928" height="150" rx="16" fill="var(--cosmic-cream)" opacity="0.55" />
  
            <text
              x="52"
              y="74"
              fontSize="13"
              fontWeight="700"
              fill="var(--cosmic-darker)"
              dominantBaseline="hanging"
            >
              上段：画面（MVC）
            </text>
  
            {/* View */}
            <rect
              x="60"
              y="96"
              width="280"
              height="88"
              rx="16"
              fill="var(--cosmic-cream)"
              stroke="var(--cosmic-beige)"
            />
            <text x="80" y="122" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
              View（Template）
            </text>
            <text x="80" y="144" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              フォーム / 一覧 / エラー表示
            </text>
  
            {/* Controller */}
            <rect
              x="380"
              y="96"
              width="280"
              height="88"
              rx="16"
              fill="var(--cosmic-cream)"
              stroke="var(--cosmic-beige)"
            />
            <text x="400" y="122" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
              Controller
            </text>
            <text x="400" y="144" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              入力整理 / バリデーション / 出力制御
            </text>
  
            {/* View -> Controller */}
            <line x1="340" y1="140" x2="380" y2="140" stroke="var(--accent-gold)" strokeWidth="3" />
            <polygon points="380,140 368,132 368,148" fill="var(--accent-gold)" />
  
            {/* ========= セパレータ ========= */}
            <line x1="36" y1="222" x2="964" y2="222" stroke="var(--cosmic-beige)" strokeWidth="2" />
  
            {/* ========= 下段レーン：UseCase / Model / SQL ========= */}
            <rect x="36" y="238" width="928" height="158" rx="16" fill="var(--cosmic-cream)" opacity="0.55" />
  
            <text
              x="52"
              y="256"
              fontSize="13"
              fontWeight="700"
              fill="var(--cosmic-darker)"
              dominantBaseline="hanging"
            >
              下段：業務（UseCase）/ 永続化（Model・SQL）
            </text>
  
            {/* UseCase（中央の横長） */}
            <rect
              x="220"
              y="286"
              width="560"
              height="84"
              rx="16"
              fill="var(--cosmic-cream)"
              stroke="var(--cosmic-beige)"
            />
            <text x="240" y="312" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
              UseCase（業務ロジック層）
            </text>
            <text x="240" y="334" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              抽出 → 対象外適用 → 整形（CSV行生成など） / 例外とメッセージの統一
            </text>
            <text x="240" y="354" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
              拡張点：帳票生成・操作履歴などを後から積み上げる
            </text>
  
            {/* Model（左） */}
            <rect
              x="60"
              y="300"
              width="140"
              height="60"
              rx="14"
              fill="var(--cosmic-cream)"
              stroke="var(--cosmic-beige)"
            />
            <text x="78" y="324" fontSize="13" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
              Model
            </text>
            <text x="78" y="344" fontSize="11" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              CRUD
            </text>
  
            {/* SQL（右） */}
            <rect
              x="800"
              y="300"
              width="164"
              height="60"
              rx="14"
              fill="var(--cosmic-cream)"
              stroke="var(--cosmic-beige)"
            />
            <text x="818" y="324" fontSize="13" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
              SQL
            </text>
            <text x="818" y="344" fontSize="11" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              Templates
            </text>
  
            {/* UseCase -> Model */}
            <line x1="220" y1="330" x2="200" y2="330" stroke="var(--cosmic-tan)" strokeWidth="3" />
            <polygon points="200,330 212,322 212,338" fill="var(--cosmic-tan)" />
  
            {/* UseCase -> SQL */}
            <line x1="780" y1="330" x2="800" y2="330" stroke="var(--cosmic-tan)" strokeWidth="3" />
            <polygon points="800,330 788,322 788,338" fill="var(--cosmic-tan)" />
  
            {/* Controller -> UseCase（カーブでつなぐ） */}
            <path
              d="M520 184 C 520 220, 420 250, 360 286"
              fill="none"
              stroke="var(--accent-gold)"
              strokeWidth="3"
              opacity="0.95"
            />
            <polygon points="360,286 372,274 380,288" fill="var(--accent-gold)" />
  
            {/* ========= 注釈バッジ（レーン外に出ない位置で固定） ========= */}
            <rect
              x="60"
              y="200"
              width="300"
              height="34"
              rx="12"
              fill="var(--cosmic-latte)"
              stroke="var(--cosmic-beige)"
            />
            <text x="78" y="210" fontSize="11" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              Controllerは「入口」と「出力制御」だけに寄せる
            </text>
  
            <rect
              x="664"
              y="200"
              width="300"
              height="34"
              rx="12"
              fill="var(--cosmic-latte)"
              stroke="var(--cosmic-beige)"
            />
            <text x="682" y="210" fontSize="11" fill="var(--cosmic-dark)" dominantBaseline="hanging">
              抽出条件はSQLテンプレで差分管理しやすく
            </text>
  
            {/* ========= 補足（下部） ========= */}
            <text x="52" y="404" fontSize="11" fill="var(--cosmic-brown)" dominantBaseline="hanging">
              ポイント：業務ルールはUseCaseに集約し、永続化はModel/SQLへ。変更の影響範囲を小さく保つ。
            </text>
          </svg>
        </div>
      </div>
    );
  };
  