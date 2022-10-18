import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import './Stat.css'

const Stat = () => {
  const quizData = useLoaderData().data;
  const data = []
  quizData.map(item => data.push({name:item.name, total:item.total}))
  console.log(data)
  return (
    <div className="container stat-container">
      <h1>Total Questions At A Glance</h1>
        <BarChart 
        width={500} 
        height={300} 
        data={data}
        >
            
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <CartesianGrid></CartesianGrid>
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
    </div>
  );
};

export default Stat;
