export default function AmbientBackground() {
  return (
    <div aria-hidden="true">
      {/* Viewport-locked nebula blobs (drift slowly, hidden on small screens for perf) */}
      <div
        className="nebula-fixed nebula-fixed--drift-1 hidden md:block"
        style={{ width: 720, height: 720, top: "-160px", left: "-200px" }}
      />
      <div
        className="nebula-fixed nebula-fixed--drift-2 hidden md:block"
        style={{
          width: 560,
          height: 560,
          bottom: "-120px",
          right: "-160px",
          opacity: 0.85,
        }}
      />
      <div
        className="nebula-fixed nebula-fixed--drift-3 hidden lg:block"
        style={{
          width: 420,
          height: 420,
          top: "40vh",
          left: "55vw",
          opacity: 0.55,
        }}
      />

      {/* Film grain overlay sits above nebula, below content */}
      <div className="ambient-noise" />
    </div>
  );
}
