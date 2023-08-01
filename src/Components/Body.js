import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State Variable
  const [listOfRestaurent, setlistOfRestaurent] = useState([]); // setting empty as default
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setsearchText] = useState("");

  // Another Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setlistOfRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurent !== undefined && listOfRestaurent?.length === 0) {
    return <Shimmer />; // calling shimer components
  }

  console.log(listOfRestaurent);

  return (
    <div className="items-center">
      <div className="filter flex">
        <div className="m-4 px-28">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurent = listOfRestaurent.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredlist = listOfRestaurent.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurent(filteredlist);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap px-24">
        {filteredRestaurent?.map((restaurent) => (
          <Link
            key={restaurent?.info.id}
            to={"/restaurents/" + restaurent?.info.id}
          >
            <RestaurentCard resData={restaurent?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
