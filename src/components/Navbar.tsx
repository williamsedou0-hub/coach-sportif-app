export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-bold">FitCoach</h1>

      <ul className="flex gap-6">
        <li>Accueil</li>
        <li>Programmes</li>
        <li>Coachs</li>
        <li>Contact</li>
      </ul>

      <button className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold">
        Commencer
      </button>
    </nav>
  );
}