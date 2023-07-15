// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is About page.</h2>
        <UserClass name="Rishi Mohan Jha (Class)" location="Raipur" />
        <UserClass name="Rishi Mohan Jha (Class)" location="Raipur" />
      </div>
    );
  }
}

export default About;
