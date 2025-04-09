import { Outlet } from "react-router";
import BeerProvider from "../data/BeerProvider";

function RootLayout() {
  return (
    <main>
      <BeerProvider>
        <Outlet />
      </BeerProvider>
    </main>
  );
}

export default RootLayout;
