import { useContext, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { BeerAPI, beerContext } from "../data/BeerContext";
import BeerCard from "../components/BeerCard";
import { useParams } from "react-router";

export default function RandomBeer() {
  const { beerData } = useContext(beerContext);
  const [randomBeer, setRandomBeer] = useState<BeerAPI | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (beerData.length > 0) {
      const randomIndex = Math.floor(Math.random() * beerData.length);
      setRandomBeer(beerData[randomIndex]);
    }
  }, [id, beerData]);
  if (!randomBeer) {
    return (
      <div className="main w-full h-screen mb-15 p-3 bg-amber-600 text-stone-100">
        <h2 className="text-5xl p-2 font-bold">Bier alle!</h2>
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
        img={randomBeer.image_url}
        name={randomBeer.name}
        slogan={randomBeer.tagline}
        level={randomBeer.attenuation_level}
        beschreibung={randomBeer.description}
        produzent={randomBeer.contributed_by.replace("<samjbmason>", "")}
        braudatum={randomBeer.first_brewed}
        tipps={randomBeer.brewers_tips}
      />
      <Footer />
    </div>
  );
}
