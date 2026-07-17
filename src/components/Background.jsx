/**
 * Fixed ambient background: drifting aurora blobs + hex grid + film grain.
 */
export default function Background() {
  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
