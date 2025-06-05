import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/Constants";
import type { AuthResponseError } from "../types/types";
import Checkbox from "../components/Checkbox";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API_URL}/${isLoginMode ? "signin" : "signup"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (response.ok) {
        console.log("User Created Successfully");
        setErrorResponse("");
        goTo("/griffgraffgroe/registered");
      } else {
        console.error("Something went wrong");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to={"/griffgraffgroe/dashboard"} replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <div className="flex  items-center justify-center m-5">
        <button
          onClick={() => setIsLoginMode(true)}
          className={
            isLoginMode
              ? "border-b-4 border-purple px-4 py-2 rounded font-semibold"
              : "border-b-4  px-4 py-2 rounded"
          }
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={
            !isLoginMode
              ? "border-b-4 border-purple px-4 py-2 rounded font-semibold"
              : "border-b-4  px-4 py-2 rounded"
          }
        >
          Registrarse
        </button>
      </div>
      <form
        className="flex justify-center items-center flex-col"
        onSubmit={handleSubmit}
      >
        {!!errorResponse && <div>{errorResponse}</div>}

        <input
          type="email"
          placeholder="Correo electrónico"
          className="border-2 border-gray-300 rounded p-2 m-2 focus:outline-none focus:ring-2 focus:ring-green"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Set username state
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 rounded p-2 m-2  focus:outline-none focus:ring-2 focus:ring-green"
          required
        />

        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirma tu Contraseña"
            className="border-2 border-gray-300 rounded p-2 m-2  focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        )}
        {/* Forgot  pass */}
        {isLoginMode && (
          <Link to={"/griffgraffgroe/ForgottenPass"} className="underline">
            He olvidado mi contraseña
          </Link>
        )}

        {/*Rememberme */}
        {isLoginMode && (
          <Checkbox
            id="remember-me"
            label="Recuérdame"
            className="flex  mb-4"
            onChange={e => setRememberMe(e.target.checked)}
          />
        )}

        {isLoginMode ? (
          <Button type="submit" className="primary-button" value="signin">
            Inicia Sesión
          </Button>
        ) : (
          <Button type="submit" className="primary-button" value="signup">
            Registrate
          </Button>
        )}
      </form>

      <Button to={"/griffgraffgroe"} className="text-[3em]">
        ←
      </Button>
    </div>
  );
}
