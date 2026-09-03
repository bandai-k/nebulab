/**
 * ステータスバッジの見た目。
 *
 * 指示書 §4 が「アクセントは主ボタンとごく一部のラベルのみ。多用しない。
 * これ以外の差し色は使わない」と定めているため、緑・青・紫の差し色をやめ、
 * パレット内の明度差だけで段階を表す。稼働中ほど明るく、構想段階ほど沈む。
 */
export const STATUS_TONE = {
  /** 稼働中・公開中 */
  live: "border-rule bg-white/5 text-cyber-text",
  /** まもなく・準備中 */
  upcoming: "border-cyber-border-dim text-cyber-text-secondary",
  /** 試作・研究段階 */
  early: "border-cyber-border-dim text-cyber-text-muted",
} as const;

export type StatusTone = keyof typeof STATUS_TONE;
