import Sidebar from "../../components/Sidebar";
import dashboardBg from "../../assets/dashboard-bg.png";

export default function Programs() {
  return (
    <div
  className="flex min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${dashboardBg})` }}>
      <Sidebar />

      <main className="flex-1 p-8 bg-black/60">
        <h1 className="text-3xl font-bold mb-8">Programmes Sportifs</h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Prise de masse</h2>
            <p>Durée : 12 semaines</p>
            <p>Niveau : Intermédiaire</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Perte de poids</h2>
            <p>Durée : 8 semaines</p>
            <p>Niveau : Débutant</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Cardio intensif</h2>
            <p>Durée : 6 semaines</p>
            <p>Niveau : Avancé</p>
          </div>

        </div>
      </main>
    </div>
  );
}