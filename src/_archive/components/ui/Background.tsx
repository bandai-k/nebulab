export default function Background() {
  return (
    <div className="nb-noise pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(212,165,116,0.15),transparent_60%),radial-gradient(700px_450px_at_80%_25%,rgba(232,184,109,0.12),transparent_60%),radial-gradient(900px_500px_at_50%_90%,rgba(221,201,163,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,248,231,0.95),rgba(245,230,203,1))]" />
    </div>
  );
}
