import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  const today = new Date().toLocaleDateString("fr-FR");

  const stats = [
    { title: "Programmes suivis", value: 12, icon: "💪" },
    { title: "Calories brûlées", value: 2500, icon: "🔥" },
    { title: "Séances réalisées", value: 48, icon: "🏋️" },
    { title: "Objectif atteint", value: "85%", icon: "🎯" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">

        <div className="bg-black text-white rounded-2xl p-6 mb-8 shadow-lg">
          <h1 className="text-3xl font-bold">
            Bonjour Williams 👋
          </h1>

          <p className="mt-2 text-gray-300">
            Continue tes efforts, tu es sur la bonne voie.
          </p>

          <p className="mt-2 text-lime-400">
            {today}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>

              <h2 className="text-2xl font-bold">
                {stat.value}
              </h2>

              <p className="text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Programme du jour
            </h2>

            <ul className="space-y-3">
              <li>✅ Échauffement - 10 min</li>
              <li>✅ Pompes - 4 séries</li>
              <li>✅ Squats - 4 séries</li>
              <li>✅ Cardio - 20 min</li>
              <li>✅ Étirements - 10 min</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Progression globale
            </h2>

            <div className="w-full bg-gray-300 rounded-full h-6">
              <div className="bg-lime-500 h-6 rounded-full w-[85%]"></div>
            </div>

            <p className="mt-4 font-semibold">
              85% de votre objectif atteint
            </p>

            <p className="text-gray-600 mt-2">
              Plus que quelques efforts avant d'atteindre votre objectif.
            </p>
          </div>

        </div>

        <div className="mt-8 bg-lime-400 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold">
            🔥 Motivation du jour
          </h2>

          <p className="mt-2">
            Le succès est la somme de petits efforts répétés jour après jour.
          </p>
        </div>

      </main>
    </div>
  );
}