import React from "react";
import "./MiddleSection.css"
import { TopMiddleSection } from "./TopMiddleSection";
import { MiddleStatusBar } from "./MiddleStatusBar";
import { BottomMiddleSection } from "./BottomMiddleSection";

const MiddleSection = () => {
  return <React.Fragment>
    <seciton className="MS__container">
      <MiddleStatusBar></MiddleStatusBar>
      <TopMiddleSection></TopMiddleSection>
      <BottomMiddleSection></BottomMiddleSection>
    </seciton>
  </React.Fragment>
};

export{MiddleSection}
