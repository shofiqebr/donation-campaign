const Card = ({card}) => {
    const {id,Picture,Title,Category,Category_bg,Card_bg,Text_and_button_bg,Description,Price} = card || {}


    const cardStyles = {
        backgroundColor: Card_bg,};
       
     const categoryStyles = {
            backgroundColor: Category_bg};
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl style={cardStyles}">
        <figure>
          <img
            src={Picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p style={categoryStyles}>{Category}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
