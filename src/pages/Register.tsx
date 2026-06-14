import { Link } from "react-router-dom";
import sport from "../assets/sport.png";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${sport})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Inscription
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30"
          />

          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30"
          />

          <Link
            to="/dashboard"
            className="block w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 text-center"
          >
            S'inscrire
          </Link>
        </form>

        <div className="mt-6 text-center text-white">
          <p>
            Déjà un compte ?{" "}
            <Link to="/login" className="hover:underline">
              Se connecter
            </Link>
          </p>

          <p className="mt-2">
            <Link to="/" className="hover:underline">
              ← Retour à l'accueil
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}