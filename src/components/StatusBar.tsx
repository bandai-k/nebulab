export type StatusItem = {
  label: string;
  pulse?: boolean;
};

type StatusBarProps = {
  items: StatusItem[];
  className?: string;
};

export default function StatusBar({ items, className }: StatusBarProps) {
  const base = "status-text flex flex-wrap gap-x-4 gap-y-1";
  return (
    <div className={className ? `${base} ${className}` : base}>
      {items.map((item) => (
        <span key={item.label}>
          {item.pulse && (
            <span className="pulse-dot mr-1.5 inline-block align-middle" />
          )}
          {item.label}
        </span>
      ))}
    </div>
  );
}
