import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
    // fetch() is provided by browser
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&page_type=DESKTOP_WEB_LISTING"
    );
    // converting data into json file
    const json = await data.json();

    // optional Chaining :- adding "?"
    setlistOfRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurent(json?.data?.cards[2]?.data?.data?.cards);
  };

  // Conditional Rendering
  if (listOfRestaurent.length === 0) {
    return <Shimmer />; // calling shimer components
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRestaurent = listOfRestaurent.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurent(filteredRestaurent);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredlist = listOfRestaurent.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurent(filteredlist);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.data.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;

/**
 * body Component render each time when trigger funtion is called and it only update the changed value
 * */
