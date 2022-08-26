import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonComp = ({ text, redirectTo, uName }) => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate(redirectTo, { uName });
  };
  return (
    <Button
      variant="contained"
      sx={{ background: "blueviolet" }}
      style={{ width: "100%" }}
      type="submit"
      onClick={handleSubmit}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
