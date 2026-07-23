import {useEffect, useState} from "react";

const fmt = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }).format(new Date());

/** Live local-time chip (IST) — a thoughtful signal for remote/global clients. */
export default function LocalTime() {
  const [t, setT] = useState(fmt);

  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="localtime mono">
      <span className="localtime-dot" />
      India · IST {t}
      <span className="localtime-note"> · responsive across time zones</span>
    </span>
  );
}
