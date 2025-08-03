import React from "react";
import Banner from "../assets/images/bg-sidebar-mobile.svg";
import thank from "../assets/images/icon-thank-you.svg";

const ConfirmPage = () => {
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
        <form className="flex flex-col bg-white w-[335px] m-auto absolute left-5 top-26 p-6 items-center justify-center rounded-2xl">
          <img className="mb-4 w-10 h-10 mt-16" src={thank} alt="Thank You" />
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
