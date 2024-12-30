import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

    return (
<       div className="m-5 p-5 w-[260px] bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">              
            <img
            className="w-full h-40 rounded-lg object-cover"
            alt="resLogo"
            src={CDN_URL+ cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-base">{name}</h4>
            <h4 className="text-gray-600 text-base">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-600 text-base">{avgRating} ⭐</h4>
            <h4 className="text-gray-600 font-semibold text-base">{costForTwo}</h4>
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