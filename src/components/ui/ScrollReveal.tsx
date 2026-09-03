/**
 * 指示書 v2 §4.4 により、カード・テキスト・見出しへのフェードインは
 * 禁止された。読もうとした瞬間に文字が動くと、かえって読みづらいため。
 *
 * 呼び出し側が11ファイルあるため、まずはここを素通しにして動きを止める。
 * 呼び出し自体の除去は各ページを作り直す Phase 4 で行う。
 */
export default function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  /** 旧 API の互換のために受けるだけで、もう使わない。 */
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
