import { FormGroup } from "@mui/material";
import React from "react";
import ButtonComp from "./ButtonComp";
import InputLabel from "./InputLabel";
import Layout from "./Layout";

const Workspace = () => {
  return (
    <>
      <Layout
        heading={"Let's set up a home for all your work"}
        para={"You can always create another workspace later."}
        one={true}
        two={true}
        three={false}
        four={false}
      >
        <FormGroup sx={{ width: "50ch", margin: "3rem auto", gap: "2rem" }}>
          <InputLabel
            label="Workspace Name"
            placeholder="JD Flash"
            name="workName"
          />
          <InputLabel
            label="Workspace URL (optional)"
            placeholder="Example"
            name="url"
          />
          <ButtonComp text="Create Workspace" redirectTo="/workspace-for" />
        </FormGroup>
      </Layout>
    </>
  );
};

export default Workspace;
