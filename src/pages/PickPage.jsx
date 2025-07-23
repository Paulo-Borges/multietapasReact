import React from "react";
import { useNavigate } from "react-router-dom";

const PickPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/finishing");
  }

  return (
    <div>
      <h1>Pick Page</h1>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default PickPage;
