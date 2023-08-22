import React from "react";
import boxes from "./boxes";
import Box from "./Box";
export default function BoxesIndex(props) {
  const [squares, setSquares] = React.useState(boxes);

  const styles = {
    backgroundColor: props.pinkMode ? "pink" : "red",
  };

  function toggle() {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    // <div
    //   style={styles}
    //   className="h-24 w-24 border-2 m-3 inline-block"
    //   key={square.id}
    // ></div>
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return <main>{squareElements}</main>;
}
