import "./App.css";
import Banner from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    <>
      <div className="border-2 w-[375px] ">
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
      </div>
    </>
  );
}

export default App;
