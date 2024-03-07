import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { current } from "tailwindcss/colors";

function App() {
  const [currentNumLetters, setCurrentNumLetters] = useState(0);

  const handleInput = (e) => {
    // Update state with the current number of letters
    setCurrentNumLetters(e.target.value.length);
  };

  return (
    <>
      <div
        id="body"
        className="flex justify-center flex-col items-center h-screen"
      >
        <div id="input-box" className=" bg-lightBlue rounded-3xl">
          <ul className="flex gap-11 px-14 py-9 text-lightGray text-lg font-semibold items-center">
            <li className="cursor-pointer">Detect Language</li>
            <li className="cursor-pointer">English</li>
            <li className="cursor-pointer">French</li>
            <li>
              <form className="mr-60">
                <select
                  id="countries"
                  className=" border-gray-300  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-lightGray bg-transparent dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                >
                  <option value="DE">German</option>
                  <option value="ES">Spanish</option>
                </select>
              </form>
            </li>
          </ul>
          <hr className="border-1 border-lightGray mx-auto" />

          {/* section to actually write the text */}
          <div id="text-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full resize-none pl-10 pt-7 pr-7 text-lg text-brightWhite font-semibold box-border"
              maxLength="100"
              onInput={handleInput}
            ></textarea>
            <p className="text-right px-8 text-lightGray font-medium ">
              {currentNumLetters}/200
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
      </div>
    </>
  );
}

export default App;
