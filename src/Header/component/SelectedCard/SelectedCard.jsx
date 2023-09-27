import { useLoaderData, useParams } from "react-router-dom";
import Card from "./../../HeroArea/Cards/Card";
import { useEffect, useState } from "react";

const SelectedCard = () => {
  const [selectedCard, setSelectedCard] = useState();

  const { id } = useParams();
  console.log(id);

  const cards = useLoaderData();
  console.log(cards);

  useEffect(() => {
    const findCard = cards?.find((card) => card.id == id);
    console.log(findCard);
    setSelectedCard(findCard);
  }, [id, cards]);



  const {
    Picture,
    Title,
    Category,
    Category_bg,
    Card_bg,
    Text_and_button_bg,
    Description,
    Price,
  } = selectedCard || {};

  const btnBackground = {
    backgroundColor : Text_and_button_bg,
    color : "white"
  }
   const handleAddToDonate = () =>{
    console.log(selectedCard);
    const addDonateItem = [];
    const donateItems = JSON.parse(localStorage.getItem('donates'));

    if(!donateItems){
      addDonateItem.push(selectedCard)
      localStorage.setItem('donates',JSON.stringify(addDonateItem))
    }
    else{
      addDonateItem.push(...donateItems,selectedCard)
      localStorage.setItem('donates',JSON.stringify(addDonateItem))
    }

   }
  return (
    <div className=" flex justify-center items-center">
      {/* <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={Picture}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <p>{Title}</p>
          <h2 className="card-title">{Category}</h2>
          <p>${Price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div> */}

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-80"
          src={Picture}
            alt="Shoes"
          />
        </figure>
        <div className="absolute top-[250px] rounded-lg left-0 w-full bg-opacity-40 bg-black text-white py-2 px-4">
          
          <button onClick={handleAddToDonate} style={btnBackground} className="btn  ">donate ${Price}</button>
        </div>
        <div className="card-body">
            <h2 className="card-title">{Title}</h2>
          <p>{Description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
