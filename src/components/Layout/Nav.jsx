import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, PieChart, Receipt, Wallet } from "lucide-react";
import clsx from "clsx";

function Nav() {
  const linkBase =
    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200";
  const inactive =
    "text-slate-400 hover:text-white hover:bg-slate-800/50";
  const active =
    "text-white bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.3)]";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link to="/" className="flex items-center gap-2">
            <div className="p-1 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <img
              src="/logo.png"
              alt="logo"
              className="w-8 h-8"
              />
            </div>
            <span className="text-lg font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
              RoomSplit
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-4 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/50">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                clsx(linkBase, isActive ? active : inactive)
              }
            >
              <LayoutDashboard size={18} />
              <span className="hidden sm:block">Dashboard</span>
            </NavLink>

            <NavLink
              to="/summary"
              className={({ isActive }) =>
                clsx(linkBase, isActive ? active : inactive)
              }
            >
              <PieChart size={18} />
              <span className="hidden sm:block">Summary</span>
            </NavLink>

            <NavLink
              to="/settlements"
              className={({ isActive }) =>
                clsx(linkBase, isActive ? active : inactive)
              }
            >
              <Receipt size={18} />
              <span className="hidden sm:block">Settlements</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
