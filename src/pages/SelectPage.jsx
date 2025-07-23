import React from "react";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
  const navigate = useNavigate();

  function handleNextStep() {
    navigate("/pickpage");
  }

  return (
    <div>
      <h1>Select Page</h1>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default SelectPage;
