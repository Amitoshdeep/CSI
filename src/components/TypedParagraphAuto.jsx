// TypedParagraphAuto.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedParagraphAuto({
  strings = [],
  typeSpeed = 30,
  backSpeed = 25,
  backDelay = 2200,
  loop = true,
  className = ""
}) {
  const el = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    typedRef.current = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      typedRef.current && typedRef.current.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  // typed.js writes to the element directly
  return <span ref={el} className={className} />;
}
