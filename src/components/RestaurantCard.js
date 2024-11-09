import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

    return (
        <div className="m-4 p-4 w-[280px] bg-gray-100 rounded-lg hover:bg-gray-300">
             <img
             className="w-[100%] h-48 rounded-lg"
             alt="resLogo"
             src={CDN_URL+ cloudinaryImageId}/>

             <h3 className="font-bold py-4 text-lg">{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating} Stars</h4>
             <h4>{costForTwo}</h4>
        </div>
    );
};



//Higher order components
// input - RestaurantCard => RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//     return (props) => {
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props} />
//             </div>
//         );
//     };
// };

export default RestaurantCard;