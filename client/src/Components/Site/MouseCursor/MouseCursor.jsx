import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MouseCursor.scss";
const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant,setCursorVariant]=useState("default")
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x-16,
      y: mousePosition.y-16,
    },
    // text:{
        
    // }
  };
//   const textEnter=()=>setCursorVariant("text")
//   const textLeave=()=>setCursorVariant("default")

  return (
    <section className="mouse__cursor">
      <motion.div className="mouse__outer" variants={variants}
      animate={cursorVariant} />
      <motion.div className="mouse__inner" variants={variants}
      animate={cursorVariant} />
    </section>
  );
};

export default MouseCursor;
