import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Super Powerful JS variable aka State Variable
  const [listOfRestaurent, setlistOfRestaurent] = useState(resList);

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
