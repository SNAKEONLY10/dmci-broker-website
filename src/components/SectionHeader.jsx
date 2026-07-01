export function SectionHeader({ eyebrow, title, text, align = "center", as: Heading = "h2" }) {
  return (
    <div className={`section-header align-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading>{title}</Heading>
      {text && <p>{text}</p>}
    </div>
  );
}
