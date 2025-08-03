import React from "react";
import Banner from "../assets/images/bg-sidebar-mobile.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

import { useNavigate } from "react-router-dom";

const PickPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/finishing");
  }

  // function handleGoBack() {
  //   navigate(-1);
  // }

  return (
    <div className=" w-[375px] h-[657px] bg-wite">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 ">
        <div className="flex justify-center ">
          <ul className="flex absolute z-10 gap-8 pt-10 ">
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              1
            </li>
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              2
            </li>
            <li className="text-sm bg-amber-50 w-6 h-6 rounded-full pt-0.4">
              3
            </li>
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              4
            </li>
          </ul>
          <img className="relative " src={Banner} alt="" />
        </div>
        <form className="flex flex-col bg-white w-[335px] m-auto absolute left-5 top-26 p-6 items-start rounded-2xl">
          <h1 className="font-bold text-2xl mb-3">Pick add-ons</h1>
          <p className="flex text-left mb-3 text-neutral-400 ">
            Add-ons help enhance your gaming experience.
          </p>

          <div className="flex items-center gap-4 p-4 justify-around border w-full rounded bg-pink-50 mb-4">
            <div>
              <img
                className="w-5 h-5 p-1 bg-[#6032de] rounded-md"
                src={checkmark}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-xs font-semibold">Online service</h2>
              <p className="text-[10px] text-neutral-400">
                Access to multiplayer games
              </p>
            </div>
            <div>
              <p className="text-xs text-[#6032de]">+$1/mo</p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-4 p-4 border w-full rounded bg-pink-50 mb-4">
            <div>
              <img
                className="w-5 h-5 p-1 bg-[#6032de] rounded-md"
                src={checkmark}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-xs font-semibold">Larger storage</h2>
              <p className="text-[10px] text-neutral-400">
                Extra 1TB of cloud save
              </p>
            </div>
            <div>
              <p className="text-xs text-[#6032de]">+$2/mo</p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-4 p-4 border w-full border-gray-300 rounded  mb-4">
            <div className="w-5 h-5 p-1 bg-transparent border-1 border-gray-300 rounded-md"></div>
            <div className="flex flex-col items-start">
              <h2 className="text-xs font-semibold">Customizable profile</h2>
              <p className="text-[10px] text-neutral-400">
                Custom theme on your profile
              </p>
            </div>
            <div>
              <p className="text-xs text-[#6032de]">+$2/mo</p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-between p-4 bg-white">
        <button
          className=" bg-transparent py-2 px-3 text-xs rounded text-neutral-400"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        <button
          className=" bg-blue-950 py-2 px-3 text-xs rounded text-white"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PickPage;
