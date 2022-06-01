import React, { useState, useLayoutEffect, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css"

export default function App() {

  const BlinkyRender = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (value === 0) {
        setValue(10 + Math.random() * 200);
      }
    }, [value]);

    console.log("render", value);

    return (
      <div onClick={() => setValue(0)}>Valor: {value}</div>
    );
  };

  ReactDOM.render(
    <BlinkyRender />,
    document.querySelector("#root")
  );

}

