import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import { auth } from "src/utils-service/firebase";

const TheLayout = () => {
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUserData(user.email);
      } else {
        history.push("/login");
      }
    });
  }, [userData]);

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
