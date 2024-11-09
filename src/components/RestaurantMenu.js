// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async() => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json)
    //     setResInfo(json.data);
    // };

    if (resInfo === null) return <Shimmer/>

    const { name, cuisines, costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage} 
            </h3>

            {/* Categories Accordians */}

            {categories.map((category) => 
                (<RestaurantCategory data = {category?.card?.card} />)

            )};


            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."}{item.card.info.price / 100}
                </li>)}
            </ul> */}

        </div>  
    )
};

export default RestaurantMenu;