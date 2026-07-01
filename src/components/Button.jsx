import { Link } from "react-router-dom";

export function Button({ children, to, href, variant = "primary", className = "", ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();
  if (to) {
    return <Link className={classes} to={to} {...props}><span className="btn-label">{children}</span></Link>;
  }
  if (href) {
    return <a className={classes} href={href} {...props}><span className="btn-label">{children}</span></a>;
  }
  return <button className={classes} {...props}><span className="btn-label">{children}</span></button>;
}
