import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6">
      <h2 className="text-2xl font-bold mb-8">PulseFit</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profil</Link>
        <Link to="/programs">Programmes</Link>
        <Link to="/progress">Progression</Link>
      </nav>
    </aside>
  );
}