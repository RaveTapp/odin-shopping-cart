import App from "./components/App/App";
import Homepage from "./components/Homepage/Homepage";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
