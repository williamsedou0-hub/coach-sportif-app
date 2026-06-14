import Sidebar from "../../components/Sidebar";

export default function Programs() {
  const programs = [
    "Musculation Débutant",
    "Cardio Intensif",
    "Perte de Poids",
    "Prise de Masse",
    "Abdominaux Express",
    "Programme Full Body",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Mes Programmes 💪
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-bold mb-3">
                {program}
              </h2>

              <p className="text-gray-600">
                Programme personnalisé pour améliorer vos performances.
              </p>

              <button className="mt-4 bg-lime-400 px-4 py-2 rounded-lg font-semibold">
                Voir le programme
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}