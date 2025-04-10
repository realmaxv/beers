import { useContext } from "react";
import { Footer } from "../components/Footer";
import { beerContext } from "../data/BeerContext";

const WrongPage = () => {
  const { singleRandomBeer } = useContext(beerContext);

  return (
    <div className="main text-stone-100">
      <h1 className="text-6xl font-black text-black">
        Sry, falsche Seite, gönn dir solange ein...
      </h1>
      <img
        src={singleRandomBeer ? singleRandomBeer.image_url : ""}
        alt="beer"
      />
      <Footer />
    </div>
  );
};

export default WrongPage;
