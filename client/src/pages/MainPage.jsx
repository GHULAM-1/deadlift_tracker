import React from "react";

import './MainPage.css'
import { RightBar } from "../components/RightBar";
import { MiddleSection } from "../components/MiddleSection";
const MainPage = () => {
  return <React.Fragment>
    <div className="MainPage__container">
    <MiddleSection></MiddleSection>
    <RightBar></RightBar>
    </div>
  </React.Fragment>;
};

export {MainPage};
