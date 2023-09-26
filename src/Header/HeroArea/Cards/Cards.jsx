import Card from "./Card";


const Cards = ({cards}) => {
    console.log(cards)
    return (
        <div>
            {
                cards?.map(card =><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;