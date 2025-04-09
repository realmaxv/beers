import { useEffect, useState } from "react";
import { BeerAPI, beerContext } from "./BeerContext";

type BeerProviderProps = {
  children: React.ReactNode;
};
const BeerProvider = ({ children }: BeerProviderProps) => {
  const [beerData, setBeerData] = useState<BeerAPI[]>([]);
  const [singleRandomBeer, setSingleRandomBeer] = useState<BeerAPI>();
  const [random, setRandom] = useState(0);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers").then((res) =>
      res
        .json()
        .then((data) => {
          setBeerData(data);
        })
        .catch((error) => {
          console.log("Achtung, fehler: " + error);
        })
    );
  }, []);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * beerData.length));
    setSingleRandomBeer(beerData[random]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beerData]);

  return (
    <beerContext.Provider value={{ beerData, singleRandomBeer }}>
      {children}
    </beerContext.Provider>
  );
};

export default BeerProvider;
