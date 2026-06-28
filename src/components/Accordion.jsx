import { useState } from "react";

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.title}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{item.title}</span>
            <span>{open === index ? "-" : "+"}</span>
          </button>
          {open === index && <p>{item.body}</p>}
        </div>
      ))}
    </div>
  );
}
