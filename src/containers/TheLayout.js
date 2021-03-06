import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = () => {
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userLogged")) {
      setUserData(localStorage.getItem("userLogged"));
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar userData={userData} />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
