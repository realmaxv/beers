import { FaBeer } from "react-icons/fa";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="w-full h-15 fixed bottom-0 flex items-center justify-center bg-amber-500">
      <Link to={"/"}>
        <FaBeer size={50} />
      </Link>
    </footer>
  );
};
