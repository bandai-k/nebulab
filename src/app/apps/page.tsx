import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import { STATUS_TONE } from "@/lib/statusStyle";
import Link from "next/link";
import ViewMore from "@/components/ui/ViewMore";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AppIcon from "@/components/apps/AppIcon";
import { apps, type AppEntry } from "@/data/apps";
import { company } from "@/data/company";

const DESCRIPTION =
  "Nebulab合同会社が開発・公開している iOS アプリの一覧。記録はすべて端末内に保存され、外部へ送信されることはありません。";

export const metadata: Metadata = {
  title: "アプリ",
  description: DESCRIPTION,
  alternates: { canonical: "/apps" },
  openGraph: {
    url: "/apps",
    title: `アプリ | ${company.name}`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `アプリ | ${company.name}`,
    description: DESCRIPTION,
  },
};

function AppCard({ app }: { app: AppEntry }) {
  const published = app.status === "PUBLISHED";

  return (
    <Link
      href={`/apps/${app.id}`}
      className="group panel flex h-full flex-col p-6 transition-colors md:p-8"
    >
      <div className="flex items-start gap-5 md:gap-6">
        <AppIcon
          src={app.icon}
          name={app.name}
          nameEn={app.nameEn}
          fallbackStyle={app.thumbStyle}
          className="w-20 md:w-24"
        />

        <div className="min-w-0 flex-1">
          <span
            className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] tracking-wider ${
              published
                ? STATUS_TONE.live
                : STATUS_TONE.upcoming
            }`}
          >
            {published ? "PUBLISHED" : "COMING SOON"}
          </span>

          <h2 className="mt-3 font-display text-2xl font-normal tracking-wide text-ink md:text-3xl">
            {app.name}
          </h2>

          <p className="mt-2 text-sm leading-7 text-ink">
            {app.tagline}
          </p>
        </div>
      </div>

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-5">
        <div>
          <dt className="text-[9px] uppercase tracking-[0.3em] text-ink-sub">
            Requires
          </dt>
          <dd className="mt-1.5 text-[11px] tracking-wider text-ink-sub">
            {app.osRequirement}
          </dd>
        </div>
        <div>
          <dt className="text-[9px] uppercase tracking-[0.3em] text-ink-sub">
            Price
          </dt>
          <dd className="mt-1.5 text-[11px] tracking-wider text-ink-sub">
            {app.price}
          </dd>
        </div>
      </dl>

      <span className="mt-6 inline-flex">
        <ViewMore
          label={`${app.name} の詳細を見る`}
          className="transition-opacity group-hover:opacity-80"
        />
      </span>
    </Link>
  );
}

export default function AppsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <SectionHeading
            level="h1"
            label="APPS"
            heading="アプリ"
            color="pink"
          />
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-ink-sub md:text-base">
            {company.name}が開発・公開している iOS アプリです。
            記録はすべて端末の中に保存され、外部のサーバーへ送信する仕組みは組み込んでいません。
          </p>
        </div>
        <div className="hidden md:block">
        </div>
      </div>

      <section className="mt-12 border-t border-rule pt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app, i) => (
            <ScrollReveal key={app.id} delay={(i % 2) * 0.08}>
              <AppCard app={app} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-rule pt-12">
        <ScrollReveal>
          <p className="text-sm leading-[2.1] text-ink-sub md:text-base">
            要望や不具合の報告は{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-ink-sub underline underline-offset-4 transition-colors hover:text-accent"
            >
              {company.email}
            </a>{" "}
            までお願いします。
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
}
