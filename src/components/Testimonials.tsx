export default function Testimonials() {
  return (
    <section className="p-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Témoignages
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg">
          <p>
            "Grâce à FitCoach, j'ai perdu 12 kg en 4 mois."
          </p>
        </div>

        <div className="border p-6 rounded-lg">
          <p>
            "Un suivi exceptionnel et motivant."
          </p>
        </div>
      </div>
    </section>
  );
}