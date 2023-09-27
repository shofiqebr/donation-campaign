

const DonateCard = ({card}) => {
    const {
        Picture,
        Title,
        Category,
        Category_bg,
        Card_bg,
        Text_and_button_bg,
        Description,
        Price,
      } = card || {};
      const cardBg={
        background : Card_bg
      }
      const TitleBg={
        background : Category_bg,
        width : "80px",
        borderRadius : "5px",
        color : Text_and_button_bg
      }
      const PriceColor = {
        color :Text_and_button_bg
      }
    const ViewBtn = {
        background : Text_and_button_bg,
        color : "white"
    }
    return (
        <div className="ml-5 grid lg:grid-cols-1 grid">
            <div style={cardBg} className="card card-side lg:w-4/5 w-full my-3 bg-base-100 shadow-xl">
        <figure>
          <img
            src={Picture}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <p style={TitleBg}>{Title}</p>
          <h2 className="card-title text-lg">{Category}</h2>
          <p style={PriceColor}>${Price}</p>
          <div className="card-actions">
            <button style={ViewBtn} className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DonateCard;