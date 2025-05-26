import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Board from './pages/Board';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: '/board', element: <Board /> },
  { path: '/login', element: <Login /> },
]);

function App() {
  return <div className='flex flex-col justify-center items-center  h-100vh'><RouterProvider router={router} /></div>;
}

export default App;
