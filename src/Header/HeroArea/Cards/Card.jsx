const Card = ({card}) => {
    const {id,Picture,Title,Category,Category_bg,Card_bg,Text_and_button_bg,Description,Price} = card || {}
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={Picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p>{Category}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
