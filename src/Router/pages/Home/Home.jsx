import { useLoaderData } from "react-router-dom";
import HeroArea from "../../../Header/HeroArea/HeroArea";
import Cards from "../../../Header/HeroArea/Cards/Cards";


const Home = () => {

    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div>
            <HeroArea></HeroArea>
            <Cards cards={cards}></Cards>
        
        </div>
    );
};

export default Home;