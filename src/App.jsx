import "./App.css";
import Banner from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    <>
      <div className="border-2 w-[375px] relative ">
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
        <form className="flex flex-col bg-amber-100 w-[335px] m-auto absolute left-5 top-26">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Digite o seu nome" />
          <label htmlFor="">Email Address</label>
          <input type="text" placeholder="Digite o seu nome" />
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder="Digite o seu nome" />
        </form>
      </div>
    </>
  );
}

export default App;
