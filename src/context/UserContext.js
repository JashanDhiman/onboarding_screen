import React, { useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [uName, setuName] = useState("");
  return (
    <UserContext.Provider value={{ setuName, uName }}>
      {children}
    </UserContext.Provider>
  );
};
const UserConsumer = UserContext.Consumer;
export { UserConsumer, UserContext };

export default UserProvider;
