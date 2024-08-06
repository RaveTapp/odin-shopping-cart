import App from "./components/App/App";
import Homepage from "./components/Homepage/Homepage"
// import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
// import Settings from "./components/Settings"

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  
];

export default routes;