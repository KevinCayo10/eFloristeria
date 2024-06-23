import React, { useEffect, useState } from "react";

function Counter({ target, color }) {
  const [count, setCount] = useState(0);
  const duration = 2000; // Duración en milisegundos

  useEffect(() => {
    let start = target - target * 0.4;
    const increment = target / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50); // Incremento cada 50 ms

    return () => clearInterval(counter);
  }, [target, duration]);

  return (
    <h2>
      <span className="count font-mono text-5xl font-bold text-pink-600">
        {count}
      </span>
      <span className={`text-${color}`}>+</span>
    </h2>
  );
}

export default Counter;
