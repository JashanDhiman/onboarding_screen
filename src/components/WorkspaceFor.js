import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import Layout from "./Layout";
import { HiUser, HiUserGroup } from "react-icons/hi";
import { FormGroup } from "@mui/material";

const WorkspaceFor = () => {
  const [active, setActive] = useState("single");
  const PlanningFor = ({ imgSrc, title, desc, type }) => {
    return (
      <div
        className="box"
        onClick={() => setActive(type)}
        style={{ border: type === active && "2px solid blueviolet" }}
      >
        <div style={{ color: type === active && "blueviolet" }}>{imgSrc}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  };
  return (
    <Layout
      heading={"How are you planning to use Eden?"}
      para={"We'll streamline your setup experience accordingly."}
      one={true}
      two={true}
      three={true}
      four={false}
    >
      <FormGroup sx={{ width: "50ch", margin: "3rem auto", gap: "2rem" }}>
        <div className="selectionBox">
          <PlanningFor
            imgSrc={<HiUser />}
            title={"For myself"}
            type={"single"}
            desc={"Write better. Think more clearly. Stay Organised."}
          />
          <PlanningFor
            imgSrc={<HiUserGroup />}
            title={"With my team"}
            type={"team"}
            desc={"Wikis, docs, tasks & projects, all in one place."}
          />
        </div>
        <ButtonComp text="Create Workspace" redirectTo="/congratulations" />
      </FormGroup>
    </Layout>
  );
};

export default WorkspaceFor;
