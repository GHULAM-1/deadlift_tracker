import React from "react";
import './TopMiddleSection.css'
import { MaxCard } from "./MaxCard";
import {MinCard} from "./MinCard"
import {AvgCard} from "./AvgCard"

const TopMiddleSection = () => {
  return <React.Fragment>
    <section className="TMS__container">
            
    <MaxCard></MaxCard>
    <MinCard></MinCard>
    <AvgCard></AvgCard>

    </section>
  </React.Fragment>;
};

export {TopMiddleSection};
