import React, { useState } from "react";
import "./App.css";
import black from "./assets/black.png";
import white from "./assets/white.png";
import blue from "./assets/blue.png";

function App() {
  const [activeButton, setActiveButton] = useState("black");

  const handleActiveButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  const render = () => {
    switch (activeButton) {
      case "black":
        return <img className="w-[120rem]" src={black} alt="moto" />;
      case "white":
        return <img className="w-[120rem]" src={white} alt="moto" />;
      case "blue":
        return <img className="w-[120rem] scale-[.90] mt-1" src={blue} alt="moto" />;
      default:
        return null;
    }
  };

  return (
    <>
      <body className="h-screen bg-black bg-no-repeat overflow-hidden flex justify-center items-center">
        <div className="h-[300px] w-[40rem] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex align-middle overflow-hidden">
          <div>{render()}</div>
          <div className="flex flex-col pr-5 mt-8">
            <div className="text-2xl text-white font-libre">SUZUKI GSX S150</div>
            <div className="text-white">SRP: P112,800</div>
            <div className="text-xs text-justify text-white">
              The Suzuki GSX-S150 streetfighter bike sits alongside its GSX-R150
              sibling—both are Suzuki’s tributes to the GSX-R sport bike
              nameplate dating back to the 80s. The S150 promises to be as
              sporty as its predecessors through its nimble handling and great
              acceleration. This bike is available in the Philippines at a price
              of P112,800.
            </div>

            <div className="flex justify-around mt-5">
              <button className="w-[100px] mr-1 rounded-md text-white bg-black" type="button" onClick={() => handleActiveButton("black")}>Black</button>
              <button className="w-[100px] mr-1 rounded-md text-black bg-zinc-400" type="button" onClick={() => handleActiveButton("white")}>White</button>
              <button className="w-[100px] mr-1 rounded-md text-black bg-blue-400"type="button" onClick={() => handleActiveButton("blue")}>Blue</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
