import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Logo size="small" className="h-80 w-auto" />

      <div className="flex  items-center justify-center">
        <button
          onClick={() => setIsLoginMode(true)}
          className={
            isLoginMode
              ? "border-b-4 border-purple px-4 py-2 rounded"
              : "border-b-4  px-4 py-2 rounded"
          }
        >
          Sign Up
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={
            !isLoginMode
              ? "border-b-4 border-purple px-4 py-2 rounded"
              : "border-b-4  px-4 py-2 rounded"
          }
        >
          Sign In
        </button>
      </div>
      <form className="flex justify-center items-center flex-col">
        {/* Shared inout field*/}
        <input
          type="email"
          placeholder="Username"
          className="border-2 border-gray-300 rounded p-2 m-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded p-2 m-2"
          required
        />
        {/* Signup field*/}
        {!isLoginMode && (
          <input
            type="text"
            placeholder="Confirm Pasword"
            className="border-2 border-gray-300 rounded p-2 m-2"
            required
          />
        )}
        {/* Forget  pass */}
        {isLoginMode && (
          <Link to={"/griffgraffgroe/ForgottenPass"} className="underline">
            He olvidado mi contraseña
          </Link>
        )}
{!isLoginMode ?  <Button to={'/griffgraffgroe/login'} className="primary-button">Sign In</Button> :  <Button to={'/griffgraffgroe/login'} className="primary-button">Sign Up</Button>}
  
           <Button to={'/griffgraffgroe'} className="text-[3em]">⬅️</Button>
      </form>
    </div>
  );
}
