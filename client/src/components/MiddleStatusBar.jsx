import React from "react";
import "./MiddleStatusBar.css"
import {BsMoon} from 'react-icons/bs'
import {RiSwitchFill} from "react-icons/ri"
const MiddleStatusBar = () => {
  return <React.Fragment>
    <section className="MSB__container">
        <h1 className="MSB__title">PR TRACKER</h1>


       


        <div className="MSB__image">
        <div className="MSB__image__settings">
             <BsMoon className="MSB__i"></BsMoon>
            <p className="MSB__unit">kg</p>
        </div>
          <div className="MSB__img">user</div>
        </div>

        
    </section>
  </React.Fragment>
};

export {MiddleStatusBar}
