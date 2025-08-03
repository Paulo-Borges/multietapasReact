import "./App.css";
import Banner from "./assets/images/bg-sidebar-mobile.svg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/select");
  }
  return (
    <div className=" w-[375px] h-[657px] bg-wite">
      <div className=" w-[375px] h-[590px] relative bg-pink-50 ">
        <div className="flex justify-center ">
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
        <form className="flex flex-col bg-white w-[335px] m-auto absolute left-5 top-26 p-6 items-start rounded-2xl">
          <h1 className="font-bold text-2xl mb-3">Personal info</h1>
          <p className="flex text-left mb-3 text-neutral-400 ">
            Please provide your name, email address, and phone number.
          </p>
          <label className="font-semibold text-xs" htmlFor="">
            Name
          </label>
          <input
            className="border border-gray-300 text-black placeholder:text-neutral-300 text-xs p-2 mb-3 w-full"
            type="text"
            placeholder="Digite o seu nome"
          />
          <label className="font-semibold text-xs" htmlFor="">
            Email Address
          </label>
          <input
            className="border border-gray-300  text-black placeholder:text-neutral-300 text-xs p-2 mb-3 w-full"
            type="text"
            placeholder="Digite o seu email"
          />
          <label className="font-semibold text-xs" htmlFor="">
            Phone Number
          </label>
          <input
            className="border border-gray-300  text-black placeholder:text-neutral-300 text-xs p-2 mb-3 w-full"
            type="text"
            placeholder="Digite o seu celular"
          />
        </form>
      </div>
      <div className="flex justify-end p-4 bg-white">
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
