import { Link } from "react-router";
import StyledButton from "./StyledButton";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
        <StyledButton href="...">Default Call-to-action</StyledButton>
        <StyledButton primary href="...">
          Primary Call-to-action
        </StyledButton>
      </nav>
    </div>
  );
};

export default App;
