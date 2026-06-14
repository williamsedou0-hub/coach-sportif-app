import Sidebar from "../../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Mon Profil 👤</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-lime-400 flex items-center justify-center text-3xl font-bold">
              W
            </div>

            <div>
              <h2 className="text-2xl font-bold">Williams</h2>
              <p className="text-gray-500">Membre PulseFit</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Âge</p>
              <p>23 ans</p>
            </div>

            <div>
              <p className="font-semibold">Poids</p>
              <p>78 kg</p>
            </div>

            <div>
              <p className="font-semibold">Taille</p>
              <p>1m80</p>
            </div>

            <div>
              <p className="font-semibold">Objectif</p>
              <p>Prise de masse</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}