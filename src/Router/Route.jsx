import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SelectedCard from "../Header/component/SelectedCard/SelectedCard";



const Route= createBrowserRouter([
    {
        path : "/",
        element :<Mainlayout></Mainlayout>,
        errorElement : <ErrorPage></ErrorPage>,
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
            },
            {
                path: "/Cards/:id",
                element : <SelectedCard></SelectedCard>,
                loader : () => fetch('/data.json')
            }
        ]
    
    }
])
    


export default Route;