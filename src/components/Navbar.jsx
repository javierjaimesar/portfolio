import AnclaNavbar from "./AnclaNavbar";
import logoSvg from "../icon/logo.svg";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";

function NavbarHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    console.log(open);
    function handleClickOutside(event) {
      if (
        (menuRef.current && !menuRef.current.contains(event.target)) ||
        open
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const secciones = [
    "Inicio",
    "Habilidades",
    "Proyectos",
    "Acerca De",
    "Contacto",
  ];

  return (
    <nav
      className="flex fixed justify-between items-center flex-wrap p-2 shadow-md shadow-green-700 w-full z-10 backdrop-blur-sm"
      id="phoneMenu"
      ref={menuRef}
    >
      <div className="flex justify-between items-center w-full">
        <Link
          activeClass="active"
          to="inicio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="block lg:hidden p-2"
        >
          <img src={logoSvg} alt="developer" />
        </Link>
        <div className="block lg:hidden">
          <button
            id="boton"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-green-500 hover:text-white hover:border-white"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              className="fill-current h-3 w-3 text-green-500"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menu"
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto justify-center ${
          open ? "block" : "hidden"
        }`}
      >
        <div
          id="containerAnclaVanbar"
          className="text-sm lg:flex-grow flex flex-col lg:flex-row justify-center transition-all gap-8 text-white py-3"
        >
          {secciones.map((seccion, id) => (
            <AnclaNavbar key={id} text={seccion} setOpen={setOpen} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavbarHeader;
