import React from "react";
import './MaxCard.css'
const MaxCard = () => {
  return <React.Fragment>
     <section className="MaxCard__container">
        <p className="MaxCard__title">max</p>
       <div className="MaxCard__weightAndUnit">
         <p className="MaxCard__weight">300</p>
        <p className="MaxCard__unit">kg</p>
       </div>
    </section>
  </React.Fragment>;
};

export{MaxCard};
