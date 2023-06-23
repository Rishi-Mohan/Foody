import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";

const Body = () => {
  // State Variable
  const [listOfRestaurent, setlistOfRestaurent] = useState([]); // setting empty as default

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

    // Api architecture as we only need cards data
    setlistOfRestaurent(json.data.cards[2].data.data.cards);
  };

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.data.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
