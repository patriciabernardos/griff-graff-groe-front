import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Board from "./pages/Board";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import ForgottenPass from "./pages/ForgottenPass";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";
import Registred from "./pages/Registered";

const router = createBrowserRouter([
  {
    path: "/griffgraffgroe",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  { path: "/griffgraffgroe/login", element: <Login /> },
  { path: "/griffgraffgroe/forgottenpass", element: <ForgottenPass /> },
  { path: "/griffgraffgroe/board", element: <Board /> },
  { path: "/griffgraffgroe/registered", element: <Registred /> },
  {
    path: "/griffgraffgroe",
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <div
      id="prueba"
      className="flex flex-col justify-center items-center  h-100vh"
    >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
