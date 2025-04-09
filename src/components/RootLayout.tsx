import { Outlet } from "react-router";
import BeerProvider from "../data/BeerProvider";

function RootLayout() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <BeerProvider>
        <Outlet />
      </BeerProvider>
    </main>
  );
}

export default RootLayout;
