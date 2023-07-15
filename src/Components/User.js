import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2> Name : {name}</h2>
      <h2> Location : {location}</h2>
      <h2> College : National Institute Of Technology, Raipur </h2>
    </div>
  );
};
export default User;
