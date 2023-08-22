import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FirstProgram from "./Test.jsx";
import Index from "./propsComponent/index.jsx";
import MemeGenerator from "./memeComponent/Index.jsx";
import BoxesIndex from "./boxesIndex.jsx";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstProgram /> */}
    {/* <Index /> */}
    {/* {<MemeGenerator />} */}
    {<BoxesIndex pinkMode={false} />}
  </React.StrictMode>
);
