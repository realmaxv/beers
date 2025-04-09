import { useContext } from "react";
import { Footer } from "../components/Footer";
import { beerContext } from "../data/BeerContext";
import { Link } from "react-router";

function BeersPage() {
  const { beerData } = useContext(beerContext);
  if (!beerData) {
    return (
      <div className="main w-full h-screen mb-15 p-3 bg-amber-600 text-stone-100">
        <h2 className="text-5xl font-bold">Bier alle!</h2>
        <h3 className="text-4xl font-bold motion-preset-seesaw  ">
          wird aufgefüllt...
        </h3>
        <Footer />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-4 gap-4">
        {beerData.map((beer, index) => (
          <Link
            to={`/beers/beer/${beer._id}`}
            className="flex cursor-pointer flex-col hover:shadow-2xl items-center justify-center border rounded-2xl p-4 gap-4 bg-amber-500"
            key={index}
          >
            {beer.name}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BeersPage;
