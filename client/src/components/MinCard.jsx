import React from "react";
import "./MinCard.css"
 const MinCard = () => {
  return <React.Fragment>
     <section className="MinCard__container">
        <p className="MinCard__title">min</p>
        <div className="MinCard__weightAndUnit">
         <p className="MinCard__weight">70</p>
        <p className="MinCard__unit">kg</p>
       </div>
    </section>
  </React.Fragment>;
};
export {MinCard};
