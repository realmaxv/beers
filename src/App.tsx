import { createBrowserRouter } from "react-router";
import "./App.css";

import HomePage from "./pages/HomePage";
import { RouterProvider } from "react-router/dom";

import WrongPage from "./pages/WrongPage";

import BeersPage from "./pages/BeersPage";
import SingleBeer from "./pages/SingleBeer";
import RootLayout from "./components/RootLayout";
import RandomBeer from "./pages/RandomBeer";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/beers", Component: BeersPage },
      { path: "/beers/beer/:id", Component: SingleBeer },
      { path: "/beers/beer/rand/:id", Component: RandomBeer },
      { path: "*", Component: WrongPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
