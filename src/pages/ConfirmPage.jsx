import React from "react";
import Banner from "../assets/images/bg-sidebar-mobile.svg";
import thank from "../assets/images/icon-thank-you.svg";
import Info from "../assets/images/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";
import Span from "../components/Span";

const ConfirmPage = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-[375px] h-[657px] bg-white min-[1440px]:w-[1000px] min-[1440px]:h-[590px] min-[1440px]:p-2 min-[1440px]:rounded-md">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 min-[1440px]:bg-transparent">
        <div className="flex justify-center min-[1440px]:hidden">
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
        <div className="max-[1439px]:hidden">
          <div className="">
            <ul className="flex flex-col absolute justify-end left-8 z-10 gap-8 pt-10 ">
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10 ">
                1
                <div className="flex flex-col text-start w-screen -mt-2">
                  <Span>STEP 1</Span>
                  <h2 className="text-[12px] w-20 text-amber-50">YOUR INFO</h2>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10 ">
                2
                <div className="text-start w-screen -mt-3">
                  <Span>STEP 2</Span>
                  <h2 className="text-[12px] w-20 text-amber-50">
                    SELECT PLAN
                  </h2>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
                3
                <div className="text-start w-screen -mt-4">
                  <Span>STEP 3</Span>
                  <h2 className="text-[12px] w-20 text-amber-50">ADD-ONS</h2>
                </div>
              </li>
              <li className="text-sm bg-amber-50 w-8 h-8 rounded-full p-2 flex gap-10">
                4
                <div className="text-start w-screen -mt-4">
                  <Span>STEP 4</Span>
                  <h2 className="text-[12px] w-20 text-amber-50">SUMMARY</h2>
                </div>
              </li>
            </ul>
          </div>
          <img src={Info} alt="" />
        </div>
        <form className="flex flex-col bg-white w-[335px] min-[1440px]:w-[500px] m-auto absolute left-5 min-[1440px]:left-90  top-26 p-6 items-center justify-center rounded-2xl">
          <img
            className="mb-4 w-10 h-10 mt-16 cursor-pointer"
            src={thank}
            onClick={() => navigate("/")}
            alt="Thank You"
          />
          <h1 className="font-bold text-2xl mb-3">Thank you!</h1>
          <p className="flex text-center mb-3 text-neutral-400 text-[15px]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPage;
