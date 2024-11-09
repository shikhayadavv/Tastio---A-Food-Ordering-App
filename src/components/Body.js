import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"        );

            const json = await data.json();
            console.log(json);

            setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
        }; 


        const onlineStatus = useOnlineStatus();

        if (onlineStatus === false)
            return (
        <h1>
            You're Offline...
            Please check your internet connection!! 
        </h1>)
     

    return listOfRestaurants.length === 0 ?
    <Shimmer/> : (  
    <div className="body">
        <div className="filter flex">
            <div className="m-4 p-4">
                <input type="text" 
                className="border border-solid border-black" 
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>

                <button className="px-4 py-1 bg-green-300 m-4 rounded-lg"
                onClick={() => {

                    const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    // setListofRestaurants(filteredRestaurant);

                    setFilteredRestaurant(filteredRestaurant);

                }}>Search</button>
            </div>

            <div className="px-4 py-1 flex items-center">
            <button className="px-4 py-1 bg-gray-200 rounded-lg" 
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListofRestaurants(filteredList);
            }}>

                Top Rated Restaurant</button>
            </div>
            
        </div>
        <div className="res-container flex flex-wrap">

            {/* <RestaurantCard resName = "Jail Restaurant" cuisine = "Biryani, Chinese, North indian" rating = "4.0 Stars"/> 
            {/* <RestaurantCard resName = "KFC" cuisine = "Burger, Chicken, Chicken Rolls" rating ="4.3 Stars"/> 
            <RestaurantCard resData = {resList[0]}/>
            <RestaurantCard resData = {resList[1]}/>
            <RestaurantCard resData = {resList[2]}/>
            <RestaurantCard resData = {resList[5]}/> */}


            {/* {listOfRestaurants.map((restaurant) => ( */}

            {/* {filteredRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
            ) )}; */}

            {filteredRestaurant.map((restaurant) => (
                <Link
                key={restaurant.info.id}
                to={"/restaurants/"+ restaurant.info.id}>
                    <RestaurantCard resData = {restaurant}/>
                </Link>


                // <Link
                // key={restaurant.info.id}
                // to={"/restaurants/"+ restaurant.info.id}>

                //     {restaurant.info.promoted ? (
                //         <RestaurantCard resData = {restaurant}/>
                //     ) : (
                //     <RestaurantCard resData = {restaurant}/>
                //     )}
                // </Link>


            ) )};

        </div>
    </div>
    );
};

export default Body;