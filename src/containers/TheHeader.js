import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CHeader, CToggler, CHeaderNav } from "@coreui/react";

import { TheHeaderDropdown } from "./index";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [userData, setUserData] = useState("teste");

  useEffect(() => {
    setUserData(localStorage.getItem("userLogged"));
  }, []);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader className="d-flex justify-content-between">
      <CHeaderNav>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={toggleSidebar}
        />
      </CHeaderNav>

      <CHeaderNav>
        <h4>{userData}</h4>
      </CHeaderNav>

      <CHeaderNav>
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
