import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    // let btnName = "Login";

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img 
                className="w-56" 
                src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-3 m-3 text-xl">
                    <li className="px-4">
                        Online Status: {onlineStatus? "✅" : "🔴"}
                    </li>

                    <li className="px-4">
                    <Link to ="/"> Home </Link>
                    </li>

                    <li className="px-4">
                    <Link to ="/about"> About </Link>
                    </li>

                    <li className="px-4">
                        <Link to ="/contact"> Contact Us </Link>
                    </li>

                    <li className="px-4">
                        <Link to ="/grocery"> Grocery </Link>
                    </li>

                    <li className="px-4">
                        Cart
                    </li>

                    <button className="login-btn" 
                    onClick={() => {
                        btnNameReact === "Login"?
                        setbtnNameReact("Logout"):
                        setbtnNameReact("Login");
                        }}> 
                        {btnNameReact}</button>
                </ul>

            </div>
        </div>
    )
}; 

export default Header;