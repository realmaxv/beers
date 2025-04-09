import { createContext } from "react";

export type BeerAPI = {
  image_url: string;
  _id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  attenuation_level: number;
  contributed_by: string;
  brewers_tips: string;
};

export type BeerContextProps = {
  beerData: BeerAPI[];
  singleRandomBeer?: BeerAPI | undefined;
};

export const beerContext = createContext<BeerContextProps>(null!);
