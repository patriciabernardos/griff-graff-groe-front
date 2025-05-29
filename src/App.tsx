import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Board from './pages/Board';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import ForgottenPass from './pages/ForgottenPass';

const router = createBrowserRouter([
  { path: '/griffgraffgroe', element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: '/griffgraffgroe/board', element: <Board /> },
  { path: '/griffgraffgroe/login', element: <Login /> },
  { path: '/griffgraffgroe/forgottenpass', element: <ForgottenPass /> },
]);

function App() {
  return <div className='flex flex-col justify-center items-center  h-100vh'><RouterProvider router={router} /></div>;
}

export default App;
