type BeerCardProps = {
  img: string;
  name: string;
  slogan: string;
  braudatum: string;
  beschreibung: string;
  level: number;
  tipps: string;
  produzent: string;
};
function BeerCard({
  img,
  name,
  slogan,
  braudatum,
  beschreibung,
  level,
  tipps,
  produzent,
}: BeerCardProps) {
  return (
    <div className="bg-amber-700 rounded p-4 flex flex-col items-center justify-center">
      <img src={img} alt="beer" />
      <h2 className="text-2xl p-2 font-extrabold font-serif">{name}</h2>
      <p className="text-2xl p-1 font-light">{slogan}</p>
      <p className=" p-1 text-2xl font-semibold">{braudatum}</p>
      <p className=" p-1 text-2xl font-semibold">{beschreibung}</p>
      <p className=" p-1 text-2xl font-semibold">{level}</p>
      <p className=" p-1 text-2xl font-semibold">{produzent}</p>
      <p className=" p-2 text-2xl font-semibold">{tipps}</p>
    </div>
  );
}

export default BeerCard;
