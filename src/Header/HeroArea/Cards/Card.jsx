import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {id,Picture,Title,Category,Category_bg,Card_bg,Text_and_button_bg,Description,Price} = card || {}


    const cardStyles = {
        backgroundColor: Card_bg,
        };
        const cardTitle = {
          color : Text_and_button_bg,
          backgroundColor : Category_bg,
          width : "100px",
          padding : "5px",
          borderRadius : "5px"

        };
       
     const categoryStyles = {
            color: Text_and_button_bg
        };
  return (
    <div>
      <Link to={`/cards/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl " style={cardStyles}>
        <figure>
          <img className="w-full"
            src={Picture}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h1 style={cardTitle} className="card-title">{Title}</h1>
          <p style={categoryStyles} >{Category}</p>
          
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
