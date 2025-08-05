import React from "react";
import Banner from "../assets/images/bg-sidebar-mobile.svg";
import Info from "../assets/images/bg-sidebar-desktop.svg";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/pickpage");
  }

  function handleGoBack() {
    navigate("/");
  }

  return (
    <div className=" w-[375px] h-[657px] bg-white  min-[1440px]:w-[1000px] min-[1440px]:h-[590px] min-[1440px]:p-2 min-[1440px]:rounded-md">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 min-[1440px]:bg-transparent ">
        <div className="flex justify-center min-[1440px]:hidden ">
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
        <div className="max-[1439px]:hidden">
          <div className="">
            <ul className="flex flex-col absolute justify-end left-8 z-10 gap-8 pt-10 ">
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10 ">
                1
                <div className="flex flex-col text-start w-screen -mt-2">
                  <span className="text-[10px] font-light text-gray-500">
                    STEP 1
                  </span>
                  <h2 className="text-[12px] w-20 text-amber-50">YOUR INFO</h2>
                </div>
              </li>
              <li className="text-sm bg-amber-50 w-8 h-8 rounded-full p-2 flex gap-10">
                2
                <div className="text-start w-screen -mt-3">
                  <span className="text-[10px] font-light text-gray-500">
                    STEP 2
                  </span>
                  <h2 className="text-[12px] w-20 text-amber-50">
                    SELECT PLAN
                  </h2>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
                3
                <div className="text-start w-screen -mt-4">
                  <span className="text-[10px] text-gray-500">STEP 3</span>
                  <h2 className="text-[12px] w-20">ADD-ONS</h2>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
                4
                <div className="text-start w-screen -mt-4">
                  <span className="text-[10px] text-gray-500">STEP 4</span>
                  <h2 className="text-sm">SUMMARY</h2>
                </div>
              </li>
            </ul>
          </div>
          <img src={Info} alt="" />
        </div>
        <form className="flex flex-col bg-white w-[335px] min-[1440px]:w-[500px] m-auto absolute left-5 min-[1440px]:left-90 top-26 min-[1440px]:top-6 p-6 items-start rounded-2xl">
          <h1 className="font-bold text-2xl mb-3">Select your plan</h1>
          <p className="flex text-left mb-3 min-[1440px]:mb-8 text-neutral-400 ">
            You have the option of monthly or yearly billing.
          </p>
          <div className="w-full min-[1439px]:hidden min-[1440px]:flex min-[1440px]:gap-4 min-[1440px]:mb-4">
            <div className="flex min-[1440px]:flex-col min-[1440px]:text-start gap-4 p-4 border w-full rounded bg-pink-50 mb-4">
              <div>
                <img className="w-8 h-8" src={arcade} alt="" />
              </div>
              <div>
                <h2 className="text-xs font-semibold">Arcade</h2>
                <p className="text-xs text-neutral-400">$9/mo</p>
              </div>
            </div>
            <div className="flex min-[1440px]:flex-col min-[1440px]:text-start gap-4 p-4 border border-neutral-200 w-full rounded bg-white mb-4">
              <div>
                <img className="w-8 h-8" src={advanced} alt="" />
              </div>
              <div>
                <h2 className="text-xs font-semibold">Advanced</h2>
                <p className="text-xs text-neutral-400">$12/mo</p>
              </div>
            </div>
            <div className="flex min-[1440px]:flex-col min-[1440px]:text-start gap-4 p-4 border border-neutral-200 w-full rounded bg-white mb-4">
              <div>
                <img className="w-8 h-8" src={pro} alt="" />
              </div>
              <div>
                <h2 className="text-xs font-semibold">Pro</h2>
                <p className="text-xs text-neutral-400">$15/mo</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center bg-pink-50 w-full p-2 rounded min-[1440px]:mb-40">
            <span>Monthly</span>
            <div className="bg-blue-900 w-8 h-4 rounded-4xl px-1">
              <div className="bg-white w-2.5 h-2.5 rounded-full mt-0.5 cursor-pointer"></div>
            </div>
            <span className=" text-neutral-400">Yearly</span>
          </div>

          <div className="flex justify-between p-4 bg-white max-[1440px]:hidden min-[1440px]:w-full ">
            <button
              className=" bg-transparent py-2 px-3 text-xs rounded text-neutral-400 cursor-pointer"
              onClick={handleGoBack}
            >
              Go Back
            </button>

            <button
              className=" bg-blue-950 py-2 px-3 text-xs rounded text-white cursor-pointer"
              onClick={handleNextStep}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-between p-4 bg-white min-[1439px]:hidden">
        <button
          className=" bg-transparent py-2 px-3 text-xs rounded text-neutral-400"
          onClick={handleGoBack}
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
