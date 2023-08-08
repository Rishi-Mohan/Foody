import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
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
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-auto h-28 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
