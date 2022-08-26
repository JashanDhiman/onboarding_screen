import React, { useContext } from "react";
import ButtonComp from "./ButtonComp";
import Layout from "./Layout";
import { FormGroup } from "@mui/material";
import done from "../images/done.PNG";
import { UserContext } from "../context/UserContext";

const Congo = () => {
  const { uName } = useContext(UserContext);
  return (
    <Layout
      heading={false}
      para={false}
      one={true}
      two={true}
      three={true}
      four={true}
    >
      <FormGroup sx={{ width: "50ch", margin: "3rem auto", gap: "2rem" }}>
        <div className="congo">
          <img src={done} alt="congoImg" />
          <h1>Congratulations, {uName}!</h1>
          <p>You have completed onboarding, you can start using the Eden!</p>
        </div>
        <ButtonComp text="Launch Eden" redirectTo="/" />
      </FormGroup>
    </Layout>
  );
};

export default Congo;
