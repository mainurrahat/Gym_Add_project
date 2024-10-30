import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navver = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/players", name: "Players" },
    { id: 4, path: "/teams", name: "Teams" },
    { id: 5, path: "/contact", name: "Contact" },
  ];
  return (
    <nav className="text-black bg-yellow-200 p-6 shadow-lg">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-3xl "></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-3xl "></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navver;
