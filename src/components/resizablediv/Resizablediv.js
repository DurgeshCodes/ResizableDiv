import React, { useState, useRef, useEffect } from "react";
import classes from "./Resizablediv.module.css";

const Resizablediv = (props) => {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ height: 50, width: 50 });

  useEffect(() => {
    const height = divRef.current.getBoundingClientRect().height;
    const width = divRef.current.getBoundingClientRect().width;
    setDimensions({ height, width });
  }, [divRef]);

  const onMouseDown = (e, type) => {
    let prevX = e.clientX;
    let prevY = e.clientY;

    const mousemove = (e) => {
      const height = dimensions.height - (prevX - e.clientX);
      const width = dimensions.width - (prevY - e.clientY);
      setDimensions({ height, width });
    };

    prevX = e.clientX;
    prevY = e.clientY;

    const mouseup = () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
    };
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
  };

  const style = {
    height: dimensions.height + "px",
    width: dimensions.width + "px",
  };

  return (
    <div style={style} ref={divRef} className={classes.resizablediv}>
      <div
        onMouseDown={(e) => onMouseDown(e, "se")}
        className={[classes.resizer, classes.se].join(" ")}
      ></div>
      {props.childern}
    </div>
  );
};

export default Resizablediv;
