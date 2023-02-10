import React from "react";
import "./AllLifts.css"
import { DatePicker, Space } from 'antd';
import {SingleLift} from "../components/SingleLift"
const { RangePicker } = DatePicker;
const AllLifts = () => {

  return <React.Fragment>
    <section className="ALs__container">

      <div className="ALs__filters">
        
      <RangePicker picker="month" className = " fil"/>
      <RangePicker picker="year" className = " fil"/>

      
      

        
        <button className="ALs__filters__favorites fil">Favorites</button>
      </div>

        
      <div className="ALs__lifts">
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>
       <SingleLift></SingleLift>



       

        

      </div>

    </section>
  </React.Fragment>
};

export {AllLifts};
