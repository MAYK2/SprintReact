import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className="px-4 py-2 bg-[#4a081f] rounded-lg transition duration-300 ease-in-out hover:bg-black hover:text-white">
      {children}
    </Link>
  );
}
export default NavLink;