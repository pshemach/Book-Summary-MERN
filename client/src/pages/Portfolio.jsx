import React from "react";
import GetSummary from "../components/GetSummary";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/add-book");
  };
  return (
    <div>
      <label className="title">Add a new summary</label>
      <button onClick={handleClick}>Add</button>
      <GetSummary />
    </div>
  );
}
