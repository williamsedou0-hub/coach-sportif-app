import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Connexion</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
            Se connecter
          </button>
        </form>

        <div className="mt-4 text-center space-y-2">
          <p>
            <Link to="/forgot-password" className="text-blue-600">
              Mot de passe oublié ?
            </Link>
          </p>

          <p>
            Pas de compte ?{" "}
            <Link to="/register" className="text-blue-600">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}