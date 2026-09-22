import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 40, delay = 0, className = "" }) {

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    let interval;

    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-0.5 h-[0.9em] bg-current ml-0.5 align-middle animate-caret" />
    </span>
  );
}