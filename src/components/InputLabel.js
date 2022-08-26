import React, { useContext } from "react";
import { OutlinedInput } from "@mui/material";
import { UserContext } from "../context/UserContext";

const InputLabel = ({ label, placeholder, name }) => {
  const { setuName } = useContext(UserContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label htmlFor={name} style={{ textAlign: "left" }}>
        <b>{label}</b>
      </label>
      <OutlinedInput
        placeholder={placeholder}
        id={name}
        size="small"
        onChange={(e) => {
          name === "Displayname" && setuName(e.target.value);
        }}
      />
    </div>
  );
};

export default InputLabel;
