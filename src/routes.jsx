import App from "./components/App/App";
import Homepage from "./components/Homepage/Homepage";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "shop",
      },
      {
        path: "cart",
      }
    ]
  },
];

export default routes;
