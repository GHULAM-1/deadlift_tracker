import React from "react";
import { AddLift } from "./AddLift";
import "./RightBar.css"
import {SingleLift} from "./SingleLift";
import { Link } from "react-router-dom";
const RightBar = () => {
  return <React.Fragment>
    <section className="RB__container">

<AddLift></AddLift>
<div className="RB__text__container">
<p className="RB__info"> most recent</p>

</div>
    <SingleLift  ></SingleLift>
    <SingleLift  ></SingleLift>
    <SingleLift  ></SingleLift>
    <SingleLift  ></SingleLift>
    <SingleLift  ></SingleLift>

   

    <button className="RB__button">
        <Link to = "/AllLifts">show all</Link>
    </button>
    </section>
  </React.Fragment>
};

export {RightBar}
