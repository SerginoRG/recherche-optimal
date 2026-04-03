import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import logo from "../assets/logo-serg.png";

function Login() {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulation d'une requête asynchrone
    await new Promise(resolve => setTimeout(resolve, 800));

    if (nom === "admin" && password === "123") {
      setError("");
      setIsLoading(false);
      navigate("/home");
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  from-blue-50 via-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Carte principale */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform transition-all duration-300  ">
          
          {/* Logo et titre */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-3 mb-4 shadow-lg">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-16 h-16 object-contain" 
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Bienvenue
            </h1>
            <p className="text-gray-500 mt-2">Connectez-vous à votre compte</p>
          </div>

          {/* Message d'erreur */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg animate-shake">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Champ Nom */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
                autoComplete="username"
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            {/* Options supplémentaires */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-600">Se souvenir de moi</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Connexion...</span>
                </>
              ) : (
                <>
                  {/* <LogIn className="h-5 w-5" /> */}
                  <span>Se connecter</span>
                </>
              )}
            </button>
          </form>

          {/* Lien d'inscription */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Pas encore de compte ?{" "}
              <Link 
                to="/signup" 
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
              >
                S'inscrire gratuitement
              </Link>
            </p>
          </div>
        </div>

        
      </div>

      {/* <style tsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style> */}
    </div>
  );
}

export default Login;