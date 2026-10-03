import App from "./App";
import Profile from "./Profile";
import DefaultProfile from "./DefaultProfile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <DefaultProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
