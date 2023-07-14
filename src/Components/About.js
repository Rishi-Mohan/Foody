import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is About page.</h2>
      <User name="Rishi Mohan Jha (fun)" location="Raipur" />
      <UserClass name="Rishi Mohan Jha (Class)" location="Raipur" />
    </div>
  );
};

export default About;
