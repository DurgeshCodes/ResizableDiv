import { useState, useEffect } from "react";

function useMouse(ref) {
  const [resizable, setResizable] = useState(false);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setResizable(true);
    };
    const handleMouseUp = (e) => {
      setResizable(false);
    };
    let refrence = ref.current;
    refrence.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      refrence.removeEventListener("mousedown", handleMouseDown);
    };
  });

  return resizable;
}

export default useMouse;
