import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <Link
          to="/"
          className="text-3xl font-extrabold text-lime-400"
        >
          FitCoach
        </Link>

        <ul className="flex flex-col md:flex-row items-center gap-6 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-lime-400 transition"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="hover:text-lime-400 transition"
            >
              Connexion
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="hover:text-lime-400 transition"
            >
              Inscription
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="hover:text-lime-400 transition"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        <Link
          to="/register"
          className="bg-lime-400 text-black px-5 py-2 rounded-lg font-bold hover:scale-105 transition"
        >
          Commencer
        </Link>

      </div>
    </nav>
  );
}