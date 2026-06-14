import Sidebar from "../../components/Sidebar";
import dashboardBg from "../../assets/dashboard-bg.png";

export default function Progress() {
  return (
    <div
  className="flex min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${dashboardBg})` }}>
      <Sidebar />

      <main className="flex-1 p-8 bg-black/60">
        <h1 className="text-3xl font-bold mb-8">Ma Progression</h1>

        <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
          <p className="mb-4">
            <strong>Poids actuel :</strong> 78 kg
          </p>

          <p className="mb-4">
            <strong>Objectif :</strong> 85 kg
          </p>

          <p className="mb-2">
            <strong>Progression :</strong> 65%
          </p>

          <div className="w-full bg-gray-300 rounded-full h-6">
            <div className="bg-lime-500 h-6 rounded-full w-[65%]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}