import React, { useState, useRef } from "react";
import classes from "./Resizablediv.module.css";
import useMouseClick from "../../hooks/useMouseClick";
import useMouseMove from "../../hooks/useMouseMove";

const Resizablediv = (props) => {
  const resizerRef = useRef(null);
  const resizable = useMouseClick(resizerRef);
  const initialDimensions = { height: 50, width: 50 };

  const [prevCoordinates, setPrevCoordinates] = useState({ x: 0, y: 0 });
  const dimensions = useMouseMove(
    resizable,
    { ...initialDimensions },
    prevCoordinates
  );

  const onMouseDown = (e) => {
    const x = e.clientX,
      y = e.clientY;
    setPrevCoordinates({ x, y });
  };

  const style = {
    height: dimensions.height + "px",
    width: dimensions.width + "px",
  };

  return (
    <div style={style} className={classes.resizablediv}>
      <div
        ref={resizerRef}
        onMouseDown={(e) => onMouseDown(e)}
        className={classes.resizer}
      ></div>
      {props.children}
    </div>
  );
};

export default Resizablediv;
