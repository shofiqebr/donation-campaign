import React from 'react';
import { PieChart, Pie, Tooltip} from "recharts";

const PieChart1 = () => {
    
        const data = [
            {name : "your donation", value : 4, fill: '#00C49F'},
            {name : "other donation", value : 8, fill: '#FF444A'}
        ]
        return (
            
            
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                // fill="#8884d8"
                label
              />
              
              <Tooltip />
            </PieChart>
       
        );
    
    
};

export default PieChart1;