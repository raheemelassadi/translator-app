import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <body className="flex justify-center flex-col items-center h-screen">
        <div id="input-box" className="w-2/6 bg-lightBlue rounded-xl">
          <ul className="flex justify-between w-96 gap-11">
            <li>Detect Language</li>
            <li>English</li>
            <li>French</li>
            <li>
              <select name="" id="">
                <option value="spanish">Spanish</option>
              </select>
            </li>
          </ul>
          <hr />
        </div>
        <div id="translate-box"></div>
      </body>
    </>
  );
}

export default App;
