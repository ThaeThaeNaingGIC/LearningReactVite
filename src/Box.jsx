import React from "react";

export default function Box(props) {
  const [on, setOn] = React.useState(props.on);

  const styles = {
    backgroundColor: on ? "pink" : "blue",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <div
      style={styles}
      className="h-24 w-24 border-2 m-3 inline-block"
      onClick={toggle}
    ></div>
  );

  //   const styles = {
  //     backgroundColor: props.on ? "pink" : "red",
  //   };
  //   return (
  //     <div style={styles} className="h-24 w-24 border-2 m-3 inline-block"></div>
  //   );
}
