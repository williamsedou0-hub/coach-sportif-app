export default function Programs() {
  return (
    <section className="p-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Nos Programmes
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg">
          <h3 className="font-bold text-xl">Perte de poids</h3>
          <p>Programme dédié à la combustion des graisses.</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="font-bold text-xl">Prise de masse</h3>
          <p>Développe ta musculature efficacement.</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="font-bold text-xl">Cardio Fitness</h3>
          <p>Améliore ton endurance et ton énergie.</p>
        </div>
      </div>
    </section>
  );
}