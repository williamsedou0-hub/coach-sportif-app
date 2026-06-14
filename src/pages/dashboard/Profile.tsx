import Sidebar from "../../components/Sidebar";
import dashboardBg from "../../assets/dashboard-bg.png";

export default function Profile() {
  return (
    <div
  className="flex min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${dashboardBg})` }}>
      <Sidebar />

      <main className="flex-1 p-8 bg-black/60">
        <h1 className="text-3xl font-bold mb-8">Mon Profil</h1>

        <div className="bg-white p-6 rounded-lg shadow max-w-xl">
          <p className="mb-3"><strong>Nom :</strong> Williams</p>
          <p className="mb-3"><strong>Email :</strong> williams@email.com</p>
          <p className="mb-3"><strong>Objectif :</strong> Prise de masse</p>
          <p className="mb-3"><strong>Niveau :</strong> Intermédiaire</p>
        </div>
      </main>
    </div>
  );
}