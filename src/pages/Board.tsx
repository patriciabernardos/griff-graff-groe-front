import { Link } from "react-router-dom";

export default function Board() {
return (
  <div className="board">
    <h1>Board Page</h1>
    <p>This is the board page where you can manage your tasks.</p>
  
        <Link to="/griffgraffgroe" className="mt-6 text-blue-500 hover:underline"> Volver a la página de inicio</Link>
  
  </div>
);
}
