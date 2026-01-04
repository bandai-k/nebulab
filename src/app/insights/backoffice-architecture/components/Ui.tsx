import type { ReactNode } from "react";

type WithClassName = { children: ReactNode; className?: string };

export const Code = ({ children, className }: WithClassName) => (
    <pre
        className={`overflow-x-auto rounded-xl p-4 text-sm leading-relaxed ${className ?? ""}`}
        style={{
            backgroundColor: "var(--cosmic-beige)",
            color: "var(--cosmic-darker)",
            border: "1px solid var(--cosmic-tan)",
        }}
    >
        <code>{children}</code>
    </pre>
);

export const H2 = ({ id, children, className }: { id: string; children: ReactNode; className?: string }) => (
    <h2
        id={id}
        className={`scroll-mt-(--header-offset) text-xl font-semibold tracking-tight md:text-2xl ${className ?? ""}`}
        style={{ color: "var(--cosmic-darker)" }}
    >
        {children}
    </h2>
);

export const H3 = ({ children, className }: WithClassName) => (
    <h3 className={`text-lg font-semibold tracking-tight ${className ?? ""}`} style={{ color: "var(--cosmic-dark)" }}>
        {children}
    </h3>
);

export const Card = ({ children, className }: WithClassName) => (
    <div
        className={`rounded-2xl p-5 shadow-sm ${className ?? ""}`}
        style={{
            backgroundColor: "var(--cosmic-cream)",
            border: "1px solid var(--cosmic-beige)",
        }}
    >
        {children}
    </div>
);

export const Badge = ({ children, className }: WithClassName) => (
    <span
        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${className ?? ""}`}
        style={{
            backgroundColor: "var(--cosmic-beige)",
            color: "var(--cosmic-dark)",
            border: "1px solid var(--cosmic-tan)",
        }}
    >
        {children}
    </span>
);

export const Subtle = ({ children, className }: WithClassName) => (
    <p className={`text-sm leading-relaxed ${className ?? ""}`} style={{ color: "var(--cosmic-brown)" }}>
        {children}
    </p>
);

export const Hr = ({ className }: { className?: string }) => (
    <div className={`h-px w-full ${className ?? ""}`} style={{ backgroundColor: "var(--cosmic-beige)" }} />
);
