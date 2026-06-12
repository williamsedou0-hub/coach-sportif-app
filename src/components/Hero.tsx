import { Link } from "react-router-dom";
import heroBg from "../assets/fitness-coach-1.png";

export default function Hero() {
  return (
    <section
      className="relative py-32 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Couche sombre pour rendre le texte lisible */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">
          Transforme ton corps, dépasse tes limites
        </h1>

        <p className="text-xl mb-8">
          Un coaching personnalisé pour atteindre tes objectifs sportifs.
        </p>

        <Link
          to="/register"
          className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold"
        >
          Rejoindre maintenant
        </Link>
      </div>
    </section>
  );
}