import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

const handleClearCart = () => {
    dispatch(clearCart());
};

const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

    return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center bg-gradient-to-b from-blue-100 to-white p-8 rounded-2xl shadow-xl max-w-3xl w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart!</h1>
        
            <div className="w-11/12 lg:w-10/12 mx-auto">
                {/* Clear Cart Button */}
                <button
                    className="p-4 m-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl font-semibold shadow-2xl hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 active:scale-95"
                    onClick={handleClearCart}
                >
                    {/* Trash icon from Material Icons */}
                    <span className="mr-3 text-xxl">🗑️</span>
                    Clear Cart
                </button>

                
                {/* Cart Content */}
                {cartItems.length === 0 ? (
                    <h2 className="font-semibold text-xl text-gray-600">Your cart is empty. Add some items to get started!</h2>
                ) : (
                    <ItemList items={cartItems} />
                )}
            </div>
    </div>
</div>

);
};

export default Cart;