import Image from "next/image";
import { LABEL_ASSETS, type LabelColor } from "@/components/decor/brushAssets";
import type { Project } from "@/data/projects";

/**
 * 画面キャプチャが用意できていないプロジェクトの代わりに置く面。
 *
 * 旧実装(ProjectThumb)は暗い背景を前提にした手続き的な SVG で、
 * コズミックラテの地の上では線がほとんど見えず、空の枠に見えていた。
 *
 * 名前や分類は書かない。カード側に同じ文字が出るため、ここに置くと
 * 重複して読みづらくなる。装飾として筆を薄く敷くだけにしている。
 *
 * 実際のキャプチャが用意できたら data/projects.ts に imageUrl を足すだけで
 * 自動的に差し替わる。
 */

// 分類ごとに色を固定する。同じ分類のカードが並んでも印象が揃う。
const COLOR_BY_CATEGORY: Record<Project["category"], LabelColor> = {
  "LOCAL × TECH": "teal",
  "EC BRAND": "amber",
  "AI PRODUCT": "indigo",
};

export default function ProjectPlaceholder({ project }: { project: Project }) {
  const asset = LABEL_ASSETS[COLOR_BY_CATEGORY[project.category] ?? "teal"];

  return (
    <div className="absolute inset-0 bg-surface">
      <Image
        src={asset.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
        style={{ opacity: 0.2 }}
      />
    </div>
  );
}
