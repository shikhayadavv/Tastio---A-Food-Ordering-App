import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items, onRemoveItem}) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        //dispatch an actions
        dispatch(addItem(item));
    };

    const truncateDescription = (description) => {
      if (!description) return "";
      const shortDescription = description.split(" - ")[0]; // Grabs the main ingredient part
      return shortDescription.length > 50
          ? shortDescription.slice(0, 50) + "..."
          : shortDescription;
    };


    // console.log(items);

    return (
        <div className="p-4">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="flex p-2 m-2 border border-gray-300 rounded-lg bg-white hover:shadow-md transition-shadow duration-200"
          >
            {/* Text Section */}
            <div className="w-8/12 text-left pr-4">
              <div className="py-2">
                <span className="text-base font-semibold">{item.card.info.name}</span>
                <span className="text-base font-bold"> - ₹
                  {item.card.info.price 
                    ? item.card.info.price / 100 
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {truncateDescription(item.card.info.description)}</p>
            </div>
      
            {/* Image Section */}
            <div className="w-4/12 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-32 rounded-lg object-cover"
              />
              <button
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white text-green-700 font-bold rounded-md shadow-md hover:bg-gray-200 transition-colors duration-200"
                onClick={() => handleAddItems(item)}
              >
                ADD+
              </button>

              
            </div>
          </div>
        ))}
      </div>
      
    );
};

export default ItemList;