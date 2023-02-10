import React from "react";
import "./AvgCard.css"
const AvgCard = () => {
  return <React.Fragment>
    <section className="AvgCard__container">
        <p className="AvgCard__title">avg</p>
        <div className="AvgCard__weightAndUnit">
         <p className="AvgCard__weight">125</p>
        <p className="AvgCard__unit">kg</p>
       </div>
    </section>
  </React.Fragment>;
};

export {AvgCard};
