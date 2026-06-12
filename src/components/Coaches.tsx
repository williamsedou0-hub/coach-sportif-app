export default function Coaches() {
  return (
    <section className="p-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Nos Coachs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold">Coach Williams</h3>
          <p>Spécialiste musculation.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold">Coach Sarah</h3>
          <p>Experte cardio fitness.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold">Coach Malik</h3>
          <p>Préparation physique avancée.</p>
        </div>
      </div>
    </section>
  );
}