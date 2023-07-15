import React from "react";

// props in Class based Components
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child mount");
  }

  render() {
    console.log("child render");
    // for deconstruction
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1> Count : {count}</h1>
        {/* this is to show change in state variable */}
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2> Name : {name}</h2>
        <h2> Location : {location}</h2>
        <h2> College : National Institute Of Technology, Raipur </h2>
      </div>
    );
  }
}
export default UserClass;
