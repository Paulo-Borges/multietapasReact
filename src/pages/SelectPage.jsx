import React from "react";
import Banner from "../assets/images/bg-sidebar-mobile.svg";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/pickpage");
  }

  return (
    <div className=" w-[375px] h-[657px] bg-wite">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 ">
        <div className="flex justify-center ">
          <ul className="flex absolute z-10 gap-8 pt-10 ">
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              1
            </li>
            <li className="text-sm bg-amber-50 w-6 h-6 rounded-full pt-0.4">
              2
            </li>
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              3
            </li>
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              4
            </li>
          </ul>
          <img className="relative " src={Banner} alt="" />
        </div>
        <form className="flex flex-col bg-white w-[335px] m-auto absolute left-5 top-26 p-6 items-start rounded-2xl">
          <h1 className="font-bold text-2xl mb-3">Select your plan</h1>
          <p className="flex text-left mb-3 text-neutral-400 ">
            You have the option of monthly or yearly billing.
          </p>

          <div className="flex gap-4 p-4 border w-full rounded bg-pink-50 mb-4">
            <div>
              <img className="w-8 h-8" src={arcade} alt="" />
            </div>
            <div>
              <h2 className="text-xs font-semibold">Arcade</h2>
              <p className="text-xs text-neutral-400">$9/mo</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border w-full rounded bg-white mb-4">
            <div>
              <img className="w-8 h-8" src={advanced} alt="" />
            </div>
            <div>
              <h2 className="text-xs font-semibold">Advanced</h2>
              <p className="text-xs text-neutral-400">$12/mo</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border w-full rounded bg-white mb-4">
            <div>
              <img className="w-8 h-8" src={pro} alt="" />
            </div>
            <div>
              <h2 className="text-xs font-semibold">Pro</h2>
              <p className="text-xs text-neutral-400">$15/mo</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center bg-pink-50 w-full p-2 rounded">
            <span>Monthly</span>
            <div className="bg-blue-900 w-8 h-4 rounded-4xl px-1">
              <div className="bg-white w-3 h-3 rounded-full"></div>
            </div>
            <span className=" text-neutral-400">Yearly</span>
          </div>
        </form>
      </div>
      <div className="flex justify-between p-4 bg-white">
        <button
          className=" bg-transparent py-2 px-3 text-xs rounded text-neutral-400"
          onClick={handleNextStep}
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

export default SelectPage;
