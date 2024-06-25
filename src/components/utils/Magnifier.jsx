import { useState } from "react";

export const Magnifier = ({ imageURL }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    // Calcula la posición x, y
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });

    // Actualizar la posición del cursor
    setCursorPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <img src={imageURL} alt="" className="w-full h-full object-cover" />
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            width: "200px", // Tamaño del magnificador
            height: "200px", // Tamaño del magnificador
            borderRadius: "50%", // Para hacer el magnificador redondo
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Fondo blanco con transparencia
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <div
            className="magnifier-image"
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: "200%",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};
