import React from "react";
import "../Board/board.css";

function Square({ value }) {
  return (
    <div>
        <button className="square">{ value }</button>
    </div>
  );
}

export default Square;
