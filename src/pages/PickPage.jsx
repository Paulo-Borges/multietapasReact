import React from "react";
import Banner from "../assets/images/bg-sidebar-mobile.svg";
import Info from "../assets/images/bg-sidebar-desktop.svg";
import checkmark from "../assets/images/icon-checkmark.svg";

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
import Lista from "../components/Lista";
import ListaActive from "../components/ListaActive";
import Span from "../components/Span";
import Menu from "../components/Menu";
import Title from "../components/Title";

const PickPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/finishing");
  }
  return (
    <div className=" w-[375px] h-[657px] bg-white min-[1440px]:w-[1000px] min-[1440px]:h-[590px] min-[1440px]:p-2 min-[1440px]:rounded-md">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 min-[1440px]:bg-transparent">
        <div className="flex justify-center min-[1440px]:hidden ">
          <ul className="flex absolute z-10 gap-8 pt-10 ">
            <Lista>1</Lista>
            <Lista>2</Lista>
            <ListaActive>3</ListaActive>
            <Lista>4</Lista>
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
                  <Menu>YOUR INFO</Menu>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10 ">
                2
                <div className="text-start w-screen -mt-3">
                  <Span>STEP 2</Span>
                  <Menu>SELECT PLAN</Menu>
                </div>
              </li>
              <li className="text-sm bg-amber-50 w-8 h-8 rounded-full p-2 flex gap-10">
                3
                <div className="text-start w-screen -mt-4">
                  <Span>STEP 3</Span>
                  <Menu>ADD-ONS</Menu>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
                4
                <div className="text-start w-screen -mt-4">
                  <Span>STEP 4</Span>
                  <Menu>SUMMARY</Menu>
                </div>
              </li>
            </ul>
          </div>
          <img src={Info} alt="" />
        </div>
        <form className="flex flex-col bg-white w-[335px] min-[1440px]:w-[500px] m-auto absolute left-5 min-[1440px]:left-90 top-26 min-[1440px]:top-16 p-6 items-start rounded-2xl">
          <Title>Pick add-ons</Title>
          <p className="flex text-left mb-3 text-neutral-400 min-[1440px]:mb-10">
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
          <div className="flex items-center justify-around gap-4 p-4 border w-full border-gray-300 rounded  mb-4 min-[1440px]:mb-16">
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
          <div className="flex justify-between p-4 bg-white max-[1439px]:hidden min-[1440px]:flex min-[1440px]:w-full">
            <ButtonBack onClick={() => navigate("/select")}>Go Back</ButtonBack>
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        </form>
      </div>
      <div className="flex justify-between p-4 bg-white min-[1439px]:hidden">
        <ButtonBack onClick={() => navigate("/select")}>Go Back</ButtonBack>
        <Button onClick={handleNextStep}>Next Step</Button>
      </div>
    </div>
  );
};

export default PickPage;
