import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { BeerAPI } from "../data/BeerContext";
import { useParams } from "react-router";
import BeerCard from "../components/BeerCard";

function SingleBeer() {
  const [singleData, setSingleData] = useState<BeerAPI | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSingleData(data);
        })
        .catch((error) => {
          console.log("Achtung, Fehler: " + error);
        });
    }
  }, [id]);

  if (!singleData) {
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
        img={singleData.image_url}
        name={singleData.name}
        slogan={singleData.tagline}
        level={singleData.attenuation_level}
        beschreibung={singleData.description}
        produzent={singleData.contributed_by.replace("<samjbmason>", "")}
        braudatum={singleData.first_brewed}
        tipps={singleData.brewers_tips}
      />
      <Footer />
    </div>
  );
}

export default SingleBeer;
