import React, { useEffect, useState } from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import Chart from './Chart';
import "./dashboard.css"


const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    
    return (
        <div className='container my-5'>
            <h3 className='text-primary text-center mb-5 fw-bold'>School management System</h3>
           <div className="row g-3">
               <div className="col-md-6">
               <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="#553399" />
                </BarChart>
               </div>

               <div className="col-md-6">
               <LineChart width={500} height={300} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                </LineChart>
               </div>

               <div className="col-md-6">
               <ComposedChart width={500} height={300} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </ComposedChart>
               </div>
               
               <div className="col-md-6">
               <PieChart width={500} height={300}>
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#335566" label />
                    <Tooltip></Tooltip>
                </PieChart>
               </div>
           </div>
        </div>
    );
};

export default Dashboard;