import React from "react";
export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "yellow" : "pink",
  };
  return (
    <div
      className="h-10 w-14 font-bold shadow-md rounded-lg flex justify-center items-center"
      style={styles}
      onClick={props.holdDice}
    >
      <h2>{props.value}</h2>
    </div>
  );
}
