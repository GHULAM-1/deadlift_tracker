import React from "react";
import "./SingleLift.css"
import {AiOutlineDelete, AiOutlineEdit,AiOutlineStar} from "react-icons/ai"
const SingleLift = () => {
  return <React.Fragment>
    <section className="SL__container">
<div className="SL__weight__container">
    <p className="SL__weight__value">300</p>
    <p className="SL__weight__unit">kg</p>

    
</div>
<div className="SL__icons">
    <AiOutlineStar className="SL__i"></AiOutlineStar>
    <AiOutlineEdit className="SL__i"></AiOutlineEdit>
    <AiOutlineDelete className="SL__i"></AiOutlineDelete>
    
</div>

    </section>
  </React.Fragment>
};

export {SingleLift}
