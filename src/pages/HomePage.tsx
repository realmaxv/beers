import { Link } from "react-router";
import { BiBeer } from "react-icons/bi";
import { PiBeerBottleBold } from "react-icons/pi";

import { FaBeerMugEmpty } from "react-icons/fa6";
import { useContext } from "react";
import { beerContext } from "../data/BeerContext";

const HomePage = () => {
  const { singleRandomBeer } = useContext(beerContext);
  return (
    <div className="main h-screen w-full bg-amber-600 text-stone-100">
      <section className="flex cursor-pointer mb-4 flex-col rounded-2xl shadow hover:shadow-2xl items-center justify-center bg-amber-400 p-8">
        <Link className="cursor-pointer flex gap-2 items-center" to={"/beers"}>
          <h2 className="text-stone-800 font-black text-4xl">All Beers</h2>

          <PiBeerBottleBold size={80} />
          <FaBeerMugEmpty size={70} />
        </Link>
      </section>
      <section className="flex cursor-pointer flex-col rounded-2xl shadow hover:shadow-2xl items-center justify-center bg-amber-400 p-8">
        <a
          className="cursor-pointer"
          href={`/beers/beer/rand/${
            singleRandomBeer ? singleRandomBeer._id : "wrong"
          }`}
        >
          <h2 className="text-stone-800 font-black text-3xl">Random Beer</h2>

          <BiBeer size={80} />
        </a>
      </section>
    </div>
  );
};

export default HomePage;
