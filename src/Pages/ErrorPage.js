import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2>Oops! It looks like there's nothing here.</h2>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default ErrorPage;
