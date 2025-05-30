import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  
if(auth.isAuthenticated) { return <Navigate to={"/griffgraffgroe/dashboard"} replace />; }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      {/*<Logo size="Large" className="h-60 w-auto" />*/}

      <div className="flex  items-center justify-center m-5">
        <button
          onClick={() => setIsLoginMode(true)}
          className={
            isLoginMode
              ? "border-b-4 border-purple px-4 py-2 rounded"
              : "border-b-4  px-4 py-2 rounded"
          }
        >
          Sign In
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={
            !isLoginMode
              ? "border-b-4 border-purple px-4 py-2 rounded"
              : "border-b-4  px-4 py-2 rounded"
          }
        >
          Sign Up
        </button>
      </div>
      <form className="flex justify-center items-center flex-col">
        {/* Shared inout field*/}
        <input
          type="email"
          placeholder="Username"
          className="border-2 border-gray-300 rounded p-2 m-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Set username state
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded p-2 m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Signup field*/}
        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Pasword"
            className="border-2 border-gray-300 rounded p-2 m-2"
            required
          />
        )}

        {!isLoginMode ? (
          <Button to={"/griffgraffgroe/login"} className="primary-button">
            Sign In
          </Button>
        ) : (
          <Button to={"/griffgraffgroe/login"} className="primary-button">
            Sign Up
          </Button>
        )}

    

        {/* Forgot  pass */}
        {isLoginMode && (
          <Link to={"/griffgraffgroe/ForgottenPass"} className="underline">
            He olvidado mi contraseña
          </Link>
        )}
      </form>

          <Button to={"/griffgraffgroe"} className="text-[3em]">
         ←
        </Button>
    </div>
  );
}
