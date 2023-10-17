import React from 'react'
import 
{ BsFillBookmarkCheckFill, BsCashCoin,BsStackOverflow, BsStack}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {
                  
    const data = [
        {
          name: 'Jan',
          salary: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          salary: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          salary: 7600,
          amt: 2290,
        },
        {
          name: 'Apr',  
          salary: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          salary: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          salary: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          salary: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          salary: 9860,
          amt: 2100,
        },
        {
          name: 'Sep', 
          salary: 3440,
          
        },
        {
          name: 'Oct',
          salary: 4300,
          
        },
        {
          name: 'Nov',      
          salary: 5460,
          amt: 5000,
        },
        {
          name: 'Dec',    
          salary: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EARNING</h3>
                    <BsCashCoin className='card_icon'/>
                </div>
                <h1>$198k</h1>
                <h3><span>&#8593;</span> 37.8% this month</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ORDERS</h3>
                    <BsFillBookmarkCheckFill className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h3><span>&#8595;</span> 37.8% this month</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>BALANCE</h3>
                    <BsStackOverflow className='card_icon'/>
                </div>
                <h1>$3.4k</h1>
                <h3><span>&#8595;</span> 2% this month</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL SALES</h3>
                    <BsStack className='card_icon'/>
                </div>
                <h1>$89k</h1>
                <h3><span>&#8593;</span> 37.8% this month</h3>
            </div>
        </div>

        <div className='charts'>
          
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="salary" fill="#8884d8" />
              
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="salary" stroke="#8884d8" activeDot={{ r: 8 }} />
    
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home