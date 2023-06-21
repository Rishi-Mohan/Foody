import RestaurentCard from "./RestaurentCard";
// not using for now, creating own small dataSet
// import resList from "../utils/mockData";

let listOfRestaurent = [
  {
    data: {
      id: "252401",
      name: "Aazhi Seafood Restaurant",
      cloudinaryImageId: "ddmwtfzxljkxoju5vwxg",
      cuisines: ["Chettinad", "Seafood"],
      costForTwo: 40000,
      avgRating: "3.9",
    },
  },
  {
    data: {
      id: "252402",
      name: "xyz",
      cloudinaryImageId: "ddmwtfzxljkxoju5vwxg",
      cuisines: ["Chettinad", "Seafood"],
      costForTwo: 40000,
      avgRating: "4.2",
    },
  },
  {
    data: {
      id: "252403",
      name: "abc",
      cloudinaryImageId: "ddmwtfzxljkxoju5vwxg",
      cuisines: ["Chettinad", "Seafood"],
      costForTwo: 40000,
      avgRating: "4.1",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            listOfRestaurent = listOfRestaurent.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRestaurent);
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
