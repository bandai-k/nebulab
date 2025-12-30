import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="tracking-[0.2em] text-sm text-neutral-300">
            NEBULAB
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <Link className="hover:text-white" href="#about">
              About
            </Link>
            <Link className="hover:text-white" href="#works">
              Works
            </Link>
            <Link className="hover:text-white" href="#contact">
              Contact
            </Link>
          </nav>
        </header>

        <section className="mt-16">
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Build quietly.
            <br />
            Connect deeply.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            NEBULAB is a small studio for engineering, design, and community.
            Minimal, practical, and calm.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
            >
              Get in touch
            </Link>
            <Link
              href="#about"
              className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-50 hover:bg-neutral-900"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section id="about" className="mt-24">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-4 max-w-3xl text-neutral-300">
            NEBULABは「星雲（Nebula）」のように、点が集まって輪郭が生まれる場所。
            技術と実務をベースに、静かに価値を積み上げます。
          </p>
        </section>

        <section id="works" className="mt-20">
          <h2 className="text-xl font-semibold">Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { title: "Web / App Development", desc: "Next.js / React / TypeScript" },
              { title: "DX & AI Consulting", desc: "業務設計 / 自動化 / 生成AI活用" },
              { title: "NRT LOFT", desc: "小さな拠点コミュニティ（準備中）" },
              { title: "Workshops", desc: "PC/AI講座（準備中）" },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6"
              >
                <div className="text-base font-medium">{c.title}</div>
                <div className="mt-2 text-sm text-neutral-300">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-neutral-300">
            お問い合わせはメールでどうぞ。
          </p>
          <a
            className="mt-6 inline-flex rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium hover:bg-neutral-900"
            href="mailto:hello@nebulab.jp"
          >
            hello@nebulab.jp
          </a>
        </section>

        <footer className="mt-24 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} NEBULAB
        </footer>
      </div>
    </main>
  );
}
