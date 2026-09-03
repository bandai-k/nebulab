import Image from "next/image";

/**
 * 「詳細を見る」の導線に使う支給素材(View More)。
 *
 * 文字が画像に焼き込まれているため、リンク名は sr-only のテキストで別に
 * 持たせる。画像自体は装飾として扱い、支援技術には読ませない。
 * こうしないと、リンクの読み上げが「画像」だけになるか、行き先が
 * 分からない「View More」の連続になる。
 */
const ASSET = { src: "/ui/view-more.webp", width: 1506, height: 294 };

export default function ViewMore({
  /** スクリーンリーダーに読ませるリンク名。行き先が分かる文言にすること。 */
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <>
      <span className="sr-only">{label}</span>
      <Image
        src={ASSET.src}
        alt=""
        aria-hidden="true"
        width={ASSET.width}
        height={ASSET.height}
        sizes="150px"
        className={`pointer-events-none h-auto w-[7.5rem] ${className ?? ""}`}
      />
    </>
  );
}
