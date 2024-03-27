import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover sans font-semibold text-base">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/listed-books"}>Listed Books</NavLink>
              </li>
              <li>
                <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl sans font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 sans font-semibold text-base">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/listed-books"}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3 sans">
          <a className="btn btn-success text-white text-base">Sign In</a>
          <a className="btn btn-info text-white text-base">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
