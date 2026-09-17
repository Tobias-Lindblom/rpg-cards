export default function StatIcon({ type }) {
  if (type === "health") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-3.6 7-10V5l-7-2-7 2v6c0 6.4 7 10 7 10Z" />
        <path d="M12 7v8M8 11h8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m4 3 7 7-3 3-4-4V3Zm16 0-7 7 3 3 4-4V3ZM8 13l-5 5 3 3 5-5m5-3 5 5-3 3-5-5" />
    </svg>
  );
}
