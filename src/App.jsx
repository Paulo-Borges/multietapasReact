import "./App.css";
import Banner from "./assets/images/bg-sidebar-mobile.svg";
import Info from "./assets/images/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/select");
  }
  return (
    <div className=" w-[375px] h-[657px] bg-white min-[1440px]:w-[1000px] min-[1440px]:h-[590px] min-[1440px]:p-2 min-[1440px]:rounded-md ">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 min-[1440px]:bg-transparent ">
        <div className="flex justify-center min-[1440px]:hidden ">
          <ul className="flex absolute z-10 gap-8 pt-10 ">
            <li className="text-sm bg-amber-50 w-6 h-6 rounded-full pt-0.4">
              1
            </li>
            <li className="text-sm text-amber-50 border-1 w-6 h-6 rounded-full">
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
              <li className="text-sm bg-amber-50 w-8 h-8 rounded-full p-2 flex gap-10 ">
                1
                <div className="flex flex-col text-start w-screen -mt-2">
                  <span className="text-[10px] font-light text-gray-500">
                    STEP 1
                  </span>
                  <h2 className="text-[12px] w-20 text-amber-50">YOUR INFO</h2>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
                2
                <div className="text-start w-screen -mt-3">
                  <span className="text-[10px] font-light text-gray-500">
                    STEP 2
                  </span>
                  <h2 className="text-[12px] w-20 text">SELECT PLAN</h2>
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
        <form className="flex flex-col bg-white w-[335px] min-[1440px]:w-[600px] m-auto absolute left-5 min-[1440px]:left-90 top-26 min-[1440px]:top-6 p-6 items-start rounded-2xl">
          <h1 className="font-bold text-2xl mb-3">Personal info</h1>
          <p className="flex text-left mb-3 min-[1440px]:mb-8 text-neutral-400">
            Please provide your name, email address, and phone number.
          </p>
          <label
            className="font-semibold text-xs min-[1440px]:text-sm min-[1440px]:font-medium"
            htmlFor=""
          >
            Name
          </label>
          <input
            className="border border-gray-300 text-black placeholder:text-neutral-300 text-xs p-2 mb-3 min-[1440px]:mb-8 w-full rounded-md "
            type="text"
            placeholder="Digite o seu nome"
          />
          <label
            className="font-semibold text-xs min-[1440px]:text-sm min-[1440px]:font-medium"
            htmlFor=""
          >
            Email Address
          </label>
          <input
            className="border border-gray-300  text-black placeholder:text-neutral-300 text-xs p-2 mb-3 min-[1440px]:mb-8 w-full rounded-md"
            type="text"
            placeholder="Digite o seu email"
          />
          <label
            className="font-semibold text-xs min-[1440px]:text-sm min-[1440px]:font-medium"
            htmlFor=""
          >
            Phone Number
          </label>
          <input
            className="border border-gray-300  text-black placeholder:text-neutral-300 text-xs p-2 mb-3 w-full rounded-md"
            type="text"
            placeholder="Digite o seu celular"
          />
          <div className="absolute min-[1440px]:-bottom-40 min-[1440px]:right-5 max-[1439px]:hidden ">
            <button
              className=" bg-blue-950 py-2 px-3 text-xs min-[1440px]:text-sm rounded text-white"
              onClick={handleNextStep}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-end p-4 bg-white min-[1440px]:hidden">
        <button
          className=" bg-blue-950 py-2 px-3 text-xs rounded text-white"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;
