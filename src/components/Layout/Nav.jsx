import { NavLink } from "react-router-dom";

function Nav() {
  const base =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const inactive =
    "text-gray-600 hover:text-gray-900 hover:bg-gray-100";
  const active =
    "text-black-600 bg-indigo-50";

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
  <div className="flex justify-center">
    <div className="max-w-4xl w-full px-6">
      <div className="flex h-14 items-center justify-center gap-15">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/summary"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Summary
        </NavLink>

        <NavLink
          to="/settlements"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Settlements
        </NavLink>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Nav;
