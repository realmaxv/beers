import { useContext } from "react";
import { Footer } from "../components/Footer";
import { beerContext } from "../data/BeerContext";
import BeerCard from "../components/BeerCard";

export default function RandomBeer() {
  const { singleRandomBeer } = useContext(beerContext);

  if (!singleRandomBeer) {
    return <p>Beer leer...</p>;
  }

  return (
    <div className="main h-full overflow-auto fixed p-3 bg-amber-600 text-stone-100">
      <BeerCard
        img={singleRandomBeer.image_url}
        name={singleRandomBeer.name}
        slogan={singleRandomBeer.tagline}
        level={singleRandomBeer.attenuation_level}
        beschreibung={singleRandomBeer.description}
        produzent={singleRandomBeer.contributed_by}
        braudatum={singleRandomBeer.first_brewed}
        tipps={singleRandomBeer.brewers_tips}
      />

      <Footer />
    </div>
  );
}
