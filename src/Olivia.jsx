import { Link } from "react-router";

const Olivia = () => {
  return (
    <>
      <p>
        Hi, I am Olivia! I love <Link to="/popeye"> Popeye!</Link>!
      </p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default Olivia;
