import React, { useState } from "react";

const TranslateReq = ({ inputText, targetLang }) => {
  const [translastion, setTranslation] = useState("");

  const handleClick = async () => {
    const url =
      "https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7Car&q=Hello%20World!&mt=1&onlyprivate=0&de=a%40b.c";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e27012763amsh1fdfd5a8fb0e470p109d5djsn4afe600052ab",
        "X-RapidAPI-Host":
          "translated-mymemory---translation-memory.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setTranslation(result.responseData.translatedText);
    } catch (error) {
      console.error(error);
      setTranslation("Error in translastion");
    }
  };

  return <div>{translastion}</div>;
};

export default TranslateReq;
