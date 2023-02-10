import React from "react";
// import "./LineChartContainer.css"
import {
  Line,
  LineChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data =  [
  
    {
      weight:100,
      month:2
    },
     {
      weight:200,
      month:9
    },
     {
      weight:300,
      month:12
    },
     {
      weight:150,
      month:3
    },
     {
      weight:1023,
      month:7
    },
     {
      weight:1,
      month:11
    },
    
    
  

  
  
  ]
const LineChartContainer = () => {
  return <React.Fragment>
    <LineChart

      width={800}
      height={300}
       data={data}
      margin={{
        top:20,
        //  right: 1,
         left: -1,
        // bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#1459F5"/>
      <XAxis dataKey="month" stroke="white"/>
      <YAxis stroke="white"/>
      <Tooltip />
      <Legend></Legend>
      <Line
        type="monotone"
        dataKey="weight"
        stroke="#1459F5"
         activeDot={{ r: 10 }}
         strokeWidth = {3}
      />
      
    </LineChart>
  </React.Fragment>
};

export {LineChartContainer}
