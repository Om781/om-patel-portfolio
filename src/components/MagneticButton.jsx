import {useRef} from "react";

/**
 * Button/link that leans toward the cursor on hover, then springs back.
 * Renders <a> when href is given, otherwise <button>.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
  target,
  rel,
  ariaLabel,
  ...rest
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const magneticStyle = {
    transition:
      "transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease"
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={className}
        style={magneticStyle}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        data-hover
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={magneticStyle}
      aria-label={ariaLabel}
      data-hover
      {...rest}
    >
      {children}
    </button>
  );
}
