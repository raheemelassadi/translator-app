import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <body
        id="body"
        className="flex justify-center flex-col items-center h-screen"
      >
        <div id="input-box" className=" bg-lightBlue rounded-3xl">
          <ul className="flex gap-11 px-14 py-7 text-lightGray text-lg font-medium">
            <li className="cursor-pointer">Detect Language</li>
            <li className="cursor-pointer">English</li>
            <li className="cursor-pointer">French</li>
            <li>
              <select name="" id="" className="mr-60">
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
              </select>
            </li>
          </ul>
          <hr className="m-auto text-lightgray" />
          <div id="text-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full resize-none p-7"
            ></textarea>
            <p className="text-right px-7">19/500</p>
          </div>
          <footer className="flex justify-between p-7">
            <div>
              <button>Play Sound</button>
              <button>Copy</button>
            </div>
            <div>
              <button>Translate</button>
            </div>
          </footer>
          <hr />
        </div>

        <div id="translate-box"></div>
      </body>
    </>
  );
}

export default App;
