import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="d-flex justify-content-end">
      <a
        href="https://www.linkedin.com/in/henrique-ba%C3%AAta-leite-785a4b15a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Henrique
      </a>
      <span className="ml-1">Baêta Leite &copy; 2021</span>
    </CFooter>
  );
};

export default React.memo(TheFooter);
