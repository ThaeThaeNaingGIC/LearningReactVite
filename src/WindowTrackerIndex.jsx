import React from "react";
import WindowTracker from "./WindowTracker";
export default function WindowTrackerApp() {
  const [show, setShow] = React.useState(true);
  function toggle() {
    setShow((prevShow) => !prevShow);
  }
  return (
    <div className="bg-pink-100 w-1/4 h-40">
      <button
        className="bg-green-100 rounded-2 ml-9 my-2 rounded-md p-2"
        onClick={toggle}
      >
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}
