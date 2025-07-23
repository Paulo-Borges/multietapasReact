import React from "react";
import { useNavigate } from "react-router-dom";

const FinishingPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/confirm");
  }
  return (
    <div>
      <h1>Finishing Page</h1>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default FinishingPage;
