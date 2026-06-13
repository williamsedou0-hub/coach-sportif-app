import { Link } from "react-router-dom";
import sport from "../assets/sport.png";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${sport})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Mot de passe oublié
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Envoyer le lien
          </button>
        </form>

        <div className="mt-6 text-center text-white">
          <Link to="/login" className="hover:underline">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
}