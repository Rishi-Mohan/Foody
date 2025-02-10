import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // Redux
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    // Dispatch an action: here action is adding an item 
    dispatch(addItem(item));

    // behind the schene when we call dispatch
    /**
     * it will create an object having payload as the label
     * {
     *    payload : item
     * }
     * 
     * and this object is passed to the slice as the second argument (action) and we access
     * this item as action.payload
     */
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div>
            <div className="py-2 ">
              <span>{item?.card?.info?.name}</span>
              <br></br>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs w-10/12">{item?.card?.info?.description}</p>
          </div>
          <div className="flex-none">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-auto h-28 rounded-lg "
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 :- for hover effect in the image
