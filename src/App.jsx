import "./App.css";
import Banner from "./assets/images/bg-sidebar-mobile.svg";
import Info from "./assets/images/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";
import Input from "./components/Input";
import Label from "./components/Label";
import Button from "./components/Button";
import ListaActive from "./components/ListaActive";
import Lista from "./components/Lista";
import Span from "./components/Span";
import Menu from "./components/Menu";
import Title from "./components/Title";

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
            <ListaActive>1</ListaActive>
            <Lista>2</Lista>
            <Lista>3</Lista>
            <Lista>4</Lista>
          </ul>
          <img className="relative " src={Banner} alt="" />
        </div>
        <div className="max-[1439px]:hidden">
          <div className="">
            <ul className="flex flex-col absolute justify-end left-8 z-10 gap-8 pt-10 ">
              <li className="text-sm bg-amber-50 w-8 h-8 rounded-full p-2 flex gap-10 ">
                1
                <div className="flex flex-col text-start w-screen -mt-2">
                  <Span>STEP 1</Span>
                  <Menu>YOUR INFO</Menu>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
                2
                <div className="text-start w-screen -mt-3">
                  <Span>STEP 2</Span>
                  <Menu>SELECT PLAN</Menu>
                </div>
              </li>
              <li className="text-sm text-amber-50 border-1 w-8 h-8 rounded-full p-2 flex gap-10">
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
        <form className="flex flex-col bg-white w-[335px] min-[1440px]:w-[600px] m-auto absolute left-5 min-[1440px]:left-90 top-26 min-[1440px]:top-6 p-6 items-start rounded-2xl">
          <Title>Personal info</Title>
          <p className="flex text-left mb-3 min-[1440px]:mb-8 text-neutral-400">
            Please provide your name, email address, and phone number.
          </p>
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Digite o seu nome" type="text" />
          <Label htmlFor="email">Email Address</Label>
          <Input type="text" placeholder="Digite o seu email" />
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="text" placeholder="Digite o seu celular" />
          <div className="absolute min-[1440px]:-bottom-30 min-[1440px]:right-5 max-[1439px]:hidden ">
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        </form>
      </div>
      <div className="flex justify-end p-4 bg-white min-[1440px]:hidden">
        <Button onClick={handleNextStep}>Next Step</Button>
      </div>
    </div>
  );
}

export default App;
