import Sidebar from "../../components/Sidebar";
import dashboardBg from "../../assets/dashboard-bg.png";

export default function Dashboard() {
  return (
    <div
  className="flex min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${dashboardBg})` }}>
      <Sidebar />

      <main className="flex-1 p-8 bg-black/60">
        <h1 className="text-3xl font-bold mb-8">
          Bienvenue sur votre tableau de bord
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold">12</h2>
            <p>Programmes suivis</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold">2500</h2>
            <p>Calories brûlées</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold">48</h2>
            <p>Séances réalisées</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold">85%</h2>
            <p>Objectif atteint</p>
          </div>
        </div>
      </main>
    </div>
  );
}