import { useEffect, useState } from "react";
import DonateCard from "../../../Header/component/donatecard/donateCard";


const Donation = () => {

    const [donates,setDonates] =useState([])
    const [noFound,setNoFound] =useState("")
    const [isShow,setIsShow] = useState(false)

    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem('donates'));
        
          if(donateItems){
            setDonates(donateItems)
          }
          else{
            setNoFound('No data Found');
        }
        },[]);
        console.log("donates");
        const handleRemove = () => {
            localStorage.clear();
            setDonates([]);
            setNoFound("No Data Found");
            
          };
        

    return (
        <div>
            {donates.length > 0 && (
            <div>
                <button
              onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto"
            >
              Deleted All donates
            </button>

            
            </div>
          )}
            {
                noFound? <p className="flex justify-center items-center">{noFound}</p>: 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

                   { isShow?
                    donates.map((card)=>(<DonateCard key={card.id} card={card}></DonateCard>))
                    :
                    donates.slice(0, 4).map((card) => (
                <DonateCard key={card.id} card={card}></DonateCard>
                     ))}
                </div>


               
            }
            
            {donates.length > 0 && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsShow(!isShow)}
            className="bg-green-600 p-3 rounded-md text-white"
          >
            {isShow ? "see less" : "see all"}
          </button>
        </div>
      )}
             
        </div>
    );
};

export default Donation;