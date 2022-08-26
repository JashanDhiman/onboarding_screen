import { FormGroup } from "@mui/material";
import React from "react";
import ButtonComp from "./ButtonComp";
import InputLabel from "./InputLabel";
import Layout from "./Layout";

const Form = () => {
  
  return (
    <Layout
      heading={"Welecome! First things first..."}
      para={"You can always change theme later."}
      one={true}
      two={false}
      three={false}
      four={false}
    >
      <FormGroup sx={{ width: "50ch", margin: "3rem auto", gap: "2rem" }}>
        <InputLabel label="Full Name" placeholder="Jashan Dhiman" name="name" />
        <InputLabel
          label="Display Name"
          placeholder="JD Coder"
          name="Displayname"
        />
        <ButtonComp text="Create Workspace" redirectTo="/workspace" />
      </FormGroup>
    </Layout>
  );
};

export default Form;
