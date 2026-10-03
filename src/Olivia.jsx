import { Link } from "react-router";

const Olivia = () => {
  return (
    <>
      <p>
        Hi, I am Olivia! I love <Link to="/profile/popeye"> Popeye!</Link>!
      </p>
      <Link to="/">Click here to go back to main page</Link>
    </>
  );
};

export default Olivia;
