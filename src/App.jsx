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
          <ul className="flex gap-11 px-14 py-9 text-lightGray text-lg font-medium">
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
          {/* section to actually write the text */}
          <div id="text-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full resize-none pl-10 p-7 text-lg text-brightWhite font-semibold"
            ></textarea>
            <p className="text-right px-8 text-lightGray font-medium ">
              19/500
            </p>
          </div>
          <footer className="flex justify-between pb-7 px-7 pt-3 items-center">
            <div className="pl-5">
              <button className="border-lightGray p-2 border-4 rounded-xl">
                <img src="../public/sound.svg" alt="" />
              </button>
              <button className="border-lightGray p-2 border-4 rounded-xl ml-2">
                <img src="../public/Copy.svg" alt="" />
              </button>
            </div>
            <div>
              <button className="flex  text-brightWhite bg-darkblue w-44 justify-center align-middle items-center border-babyBlue border-2 p-3 rounded-2xl gap-2">
                <svg
                  className="h-8 w-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                Translate
              </button>
            </div>
          </footer>
        </div>

        <div id="translate-box"></div>
      </body>
    </>
  );
}

export default App;
