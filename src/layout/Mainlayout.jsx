import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";


const Mainlayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
           
           <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;