import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-bold">FitCoach</h1>

      <ul className="flex gap-6">
  <li>
    <Link to="/">Accueil</Link>
  </li>

  <li>
    <Link to="/login">Connexion</Link>
  </li>

  <li>
    <Link to="/register">Inscription</Link>
  </li>

  <li>
    <Link to="/dashboard">Dashboard</Link>
  </li>
</ul>

      <Link
  to="/register"
  className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold"
>
  Commencer
</Link>
    </nav>
  );
}