/* eslint-disable react/prop-types */

import Card from "./Card";


const Cards = ({cards}) => {
    console.log(cards)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {
                cards?.map(card =><Card key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

export default Cards;