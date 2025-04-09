import { useContext } from "react";
import { Footer } from "../components/Footer";
import { beerContext } from "../data/BeerContext";
import BeerCard from "../components/BeerCard";

export default function RandomBeer() {
  const { singleRandomBeer } = useContext(beerContext);

  if (!singleRandomBeer) {
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
    <div className="main mb-15 p-3 bg-amber-600 text-stone-100">
      <BeerCard
        img={singleRandomBeer.image_url}
        name={singleRandomBeer.name}
        slogan={singleRandomBeer.tagline}
        level={singleRandomBeer.attenuation_level}
        beschreibung={singleRandomBeer.description}
        produzent={singleRandomBeer.contributed_by.replace("</", "")}
        braudatum={singleRandomBeer.first_brewed}
        tipps={singleRandomBeer.brewers_tips}
      />

      <Footer />
    </div>
  );
}
