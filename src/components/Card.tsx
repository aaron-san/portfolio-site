import React, { useState } from "react";

const initialValue = 0;

function Card() {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((c) => c + 1);
    console.log("Button clicked", { count });
  }

  return (
    <div className="d-flex flex-row p-2 m-3">
      <button
        className="badge bg-secondary bg-sm border border-dark rounded-4 m-3"
        onClick={handleClick}
      >
        Increment
      </button>

      <span className="p-3 border border-light">{count}</span>
    </div>
  );
}

export default Card;
