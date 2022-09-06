import React from "react";

const ComplitionIndicator = ({ one, two, three, four }) => {
  const Dot = ({ active, num, lline, rline }) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {lline && (
          <div
            style={{
              width: "2rem",
              height: "1px",
              background: active ? "blueviolet" : "lightgrey",
            }}
          ></div>
        )}
        <div
          style={{
            width: "2rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${active ? "blueviolet" : "lightgrey"}`,
            borderRadius: "50%",
            color: active && "white",
            background: active && "blueviolet",
          }}
        >
          {num}
        </div>
        {rline && (
          <div
            style={{
              width: "2rem",
              height: "1px",
              background: active ? "blueviolet" : "lightgrey",
            }}
          ></div>
        )}
      </div>
    );
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "3rem auto" }}
    >
      <Dot active={one} num={1} lline={false} rline={true} />
      <Dot active={two} num={2} lline={true} rline={true} />
      <Dot active={three} num={3} lline={true} rline={true} />
      <Dot active={four} num={4} lline={true} rline={false} />
    </div>
  );
};

export default ComplitionIndicator;
