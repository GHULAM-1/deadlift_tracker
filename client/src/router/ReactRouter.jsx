import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import {MainPage} from "../pages/MainPage"
import {AllLifts} from "../pages/AllLifts"
const ReactRouter = () => {
  return <React.Fragment>
 <Router>

<Routes>
  
   <Route path="/" element = {<MainPage></MainPage>}></Route>
    <Route path="/AllLifts" element = {<AllLifts></AllLifts>}></Route>


</Routes>

    </Router>
  </React.Fragment>
};

export {ReactRouter}
