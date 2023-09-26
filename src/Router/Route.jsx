import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";


const Route= createBrowserRouter([
    {
        path : "/",
        element :
            <Mainlayout></Mainlayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('/data.json')
            },
            {
                path : "/Donation",
                element : <Donation></Donation>
            },
            {
                path: "/Statistics",
                element : <Statistics></Statistics>
            }
        ]
    
    }
])
    


export default Route;