import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import logo from "../assets/tastio.webp";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    // let btnName = "Login";

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);


    //subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);


    return(
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-100 to-white p-8 shadow-lg py-2 rounded-lg">
            <div className="logo-container">
                <img 
                className="w-32 rounded-full border border-gray-300 shadow-lg hover:shadow-lg transition-shadow duration-300" 
                src={logo} />
            </div>
            <div className="flex text-gray-700 font-medium">
                <ul className="flex items-center m-2 p-2">
                    <li className="px-3 text-lg">
                        Online Status: {onlineStatus? "✅" : "🔴"}
                    </li>

                    <li className="px-3 text-lg">
                    <Link to ="/"> Home </Link>
                    </li>

                    <li className="px-3 text-lg">
                    <Link to ="/about"> About </Link>
                    </li>

                    <li className="px-3 text-lg">
                        <Link to ="/contact"> Contact Us </Link>
                    </li>

                    {/* <li className="px-4">
                        <Link to ="/grocery"> Grocery </Link>
                    </li> */}

                    <li className="pr-6 pl-3 font-bold text-lg">
                    <Link to ="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>

                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" 
                    onClick={() => {
                        btnNameReact === "Login"?
                        setbtnNameReact("Logout"):
                        setbtnNameReact("Login");
                        }}> 
                        {btnNameReact}</button>

                    <li className="pl-6 pr-4 font-bold text-lg">
                        {loggedInUser}
                    </li>

                </ul>

            </div>
        </div>
    )
}; 

export default Header;