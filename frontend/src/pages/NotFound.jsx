import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // Optional icon

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
      <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
