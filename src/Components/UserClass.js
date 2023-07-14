import React from "react";

// props in Class based Components
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // for deconstruction
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2> Name : {name}</h2>
        <h2> Location : {location}</h2>
        <h2> College : National Institute Of Technology, Raipur </h2>
      </div>
    );
  }
}
/* 
// Hard-Coded Data as Class Componenets
class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2> Name : Rishi Mohan Jha</h2>
        <h2> Location : Raipur</h2>
        <h2> College : National Institute Of Technology, Raipur </h2>
      </div>
    );
  }
}
*/
export default UserClass;
