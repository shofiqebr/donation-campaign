import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const PieChart1 = () => {
  const [donateItems, setDonateItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedDonateItems = JSON.parse(localStorage.getItem('donates'));
    console.log(storedDonateItems);
    if (storedDonateItems) {
      setDonateItems(storedDonateItems);

      // Calculate the percentage based on the length of donateItems
      const totalDonates = storedDonateItems.length;
      const yourDonationCount = storedDonateItems.filter(item => item.name === "your donation").length;
      const otherDonationCount = totalDonates - yourDonationCount;

      const percentageYourDonation = (yourDonationCount / totalDonates) * 100;
      const percentageOtherDonation = (otherDonationCount / totalDonates) * 100;

      // Create data for the Pie Chart with the correct order
      setData([
        { name: "your donation", value: percentageYourDonation, fill: '#00C49F' },
        { name: "other donation", value: percentageOtherDonation, fill: '#FF444A' }
      ]);
    }
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChart1;
