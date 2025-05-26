import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1>Login Page</h1>
        <form>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>

              <Link to="/" className="mt-6 text-blue-500 hover:underline"> Volver a la página de inicio</Link>
        </div>
    );
}

