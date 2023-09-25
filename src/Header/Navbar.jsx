import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img
              className="w-40"
              src="https://i.ibb.co/xgxCzY5/Logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/Home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
              >
                Home
              </NavLink>
              ;
            </li>
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
              >
                Donation
              </NavLink>
              ;
            </li>

            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }
              >
                Statistics
              </NavLink>
              ;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
