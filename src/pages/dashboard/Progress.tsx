import Sidebar from "../../components/Sidebar";

export default function Progress() {
  const progress = 85;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Suivi de Progression 📈
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">
            Objectif global
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-8">
            <div
              className="bg-lime-500 h-8 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-4 font-semibold">
            {progress}% atteint
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl">Poids</h3>
            <p className="text-3xl mt-2">78 kg</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl">Calories</h3>
            <p className="text-3xl mt-2">2500</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl">Séances</h3>
            <p className="text-3xl mt-2">48</p>
          </div>
        </div>
      </main>
    </div>
  );
}