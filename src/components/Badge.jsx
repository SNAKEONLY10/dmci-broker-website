export function Badge({ children, tone = "gold" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
