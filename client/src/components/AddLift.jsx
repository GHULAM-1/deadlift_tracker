import React from "react";
import "./Addlift.css"
import { DatePicker, Space } from 'antd';
import {SlCalender} from "react-icons/sl"
const AddLift = () => {
  const onChange = (date, dateString) => {
    const r = dateString.split("-")[1]
  console.log(r);
};
  return <React.Fragment>
    <section className="AL__container">

    <input type="text" className="AL__input" placeholder="add"/>
    
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
    </section>
  </React.Fragment>
};
export {AddLift};