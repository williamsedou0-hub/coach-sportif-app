import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6 shadow-xl">
      
      <h2 className="text-3xl font-extrabold text-lime-400 mb-10">
        PulseFit
      </h2>

      <nav className="flex flex-col gap-3">

        <Link
          to="/dashboard"
          className="p-3 rounded-lg hover:bg-lime-400 hover:text-black transition font-medium"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/profile"
          className="p-3 rounded-lg hover:bg-lime-400 hover:text-black transition font-medium"
        >
          👤 Profil
        </Link>

        <Link
          to="/programs"
          className="p-3 rounded-lg hover:bg-lime-400 hover:text-black transition font-medium"
        >
          💪 Programmes
        </Link>

        <Link
          to="/progress"
          className="p-3 rounded-lg hover:bg-lime-400 hover:text-black transition font-medium"
        >
          📈 Progression
        </Link>

      </nav>

      <div className="mt-12 p-4 rounded-lg bg-gray-900">
        <p className="text-sm text-gray-300">
          Continue tes efforts !
        </p>
        <p className="text-lime-400 font-bold mt-2">
          Objectif : 85%
        </p>
      </div>

    </aside>
  );
}