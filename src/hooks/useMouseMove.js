import { useEffect, useState } from "react";

const useMouseMove = (resizable, PrevDimensions, coordinates) => {
  const [dimensions, setDimensions] = useState({ ...PrevDimensions });
  const [prevCoordinates, setPrevCoordinates] = useState(coordinates);
  useEffect(() => {
    const MouseMove = (e) => {
      if (resizable) {
        const height = dimensions.height + (e.clientX - prevCoordinates.x);
        const width = dimensions.width + (e.clientY - prevCoordinates.y);

        setDimensions({ height, width });
        const x = e.clientX,
          y = e.clientY;
        setPrevCoordinates({ x, y });
      }
    };
    window.addEventListener("mousemove", MouseMove);

    return () => {
      window.removeEventListener("mousemove", MouseMove);
    };
  });

  return dimensions;
};

export default useMouseMove;
