import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/images/bg-sidebar-mobile.svg";

const FinishingPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/confirm");
  }
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
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
              3
            </li>
            <li className="text-sm bg-amber-50 w-6 h-6 rounded-full pt-0.4">
              4
            </li>
          </ul>
          <img className="relative " src={Banner} alt="" />
        </div>
        <form className="flex flex-col bg-white w-[335px] m-auto absolute left-5 top-26 p-6 items-start rounded-2xl">
          <h1 className="font-bold text-2xl mb-3">finishing up</h1>
          <p className="flex text-left mb-3 text-neutral-400 ">
            Double-check everything looks OK before confirming.
          </p>

          <div className="flex items-center p-4 justify-between w-full border-b border-b-gray-200 rounded bg-pink-50">
            <div className="flex flex-col items-start">
              <h2 className="text-xs font-semibold">Arcade (Monthly)</h2>
              <p className="text-[10px] text-neutral-400 underline">Change</p>
            </div>
            <div>
              <p className="text-xs font-bold"> $9/mo</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 p-4 w-full rounded bg-pink-50">
            <div className="flex flex-col items-start gap-4">
              <p className="text-[10px] text-neutral-400">Online service</p>
              <p className="text-[10px] text-neutral-400">Larger storage</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-gray-600">+$1/mo</p>
              <p className="text-xs text-gray-600">+$2/mo</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 p-4 w-full border-gray-300 rounded  mb-4">
            <div className="flex flex-col items-start">
              <p className="text-[10px] text-neutral-400">Total (per month)</p>
            </div>
            <div>
              <p className="text-xs font-bold text-[#6032de]">+$12/mo</p>
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
          className=" bg-[#6032de] py-2 px-3 text-xs rounded text-white"
          onClick={handleNextStep}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FinishingPage;
