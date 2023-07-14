const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h2> Name : {name}</h2>
      <h2> Location : {location}</h2>
      <h2> College : National Institute Of Technology, Raipur </h2>
    </div>
  );
};
export default User;
