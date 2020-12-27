import { useState, useEffect } from "react";

function useMouse() {
  const [position, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handle = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", handle);

    return () => document.removeEventListener("mousemove", handle);
  });

  return position;
}

export default useMouse;
