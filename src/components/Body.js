import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

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
        </h1>);

        const { loggedInUser, setUserName} = useContext(UserContext);
     

    return listOfRestaurants.length === 0 ?
    <Shimmer/> : (  
    <div className="body">
        <div className=" flex flex-row justify-end items-center bg-gray-50 p-3 mb-4 mt-4">
            
                <input type="text" 
                className="border border-solid border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300"
                placeholder="Search Restaurants..." 
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>

                <button className="ml-2 px-2 py-2 bg-blue-400 text-black rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
                onClick={() => {

                    const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    // setListofRestaurants(filteredRestaurant);

                    setFilteredRestaurant(filteredRestaurant);

                }}>Search</button>
            

            <div className="m-2 flex items-center mr-auto">
            <button className="m-2 px-2 py-2 bg-green-400 text-black  rounded-lg shadow-md" 
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListofRestaurants(filteredList);
            }}>

                Top Rated Restaurant</button>
            </div>
            {/* <div className="m-2 flex items-center">
                <label className="mr-2 text-gray-700 font-semibold">UserName: </label>
            <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}></input>
            </div> */}
            
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