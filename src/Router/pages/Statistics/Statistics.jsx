import React from "react";
import PieChart1 from "../../../Header/component/piechart/PieChart1";

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PieChart1></PieChart1>
      <div className="flex gap-3">
        <div>your donation</div>
        <div className="w-10 h-2 mt-3 bg-[#00C49F]"></div>
        <div>other donation</div>
        <div className="w-10 h-2 mt-3 bg-[#FF444A]"></div>
      </div>
    </div>
   

  );
};
export default Statistics;
