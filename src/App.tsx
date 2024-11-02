import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Modules/AuthModule/Components/Login/Login';
import Register from './Modules/AuthModule/Components/Register/Register';
import ChangePass from './Modules/AuthModule/Components/ChangePass/ChangePass';
import ForgetPass from './Modules/AuthModule/Components/ForgetPass/Forgetpass';
import ResetPass from './Modules/AuthModule/Components/ResetPass/ResetPass';
import MasterLayout from './Modules/SharedComponents/MasterLayout/MasterLayout';
import Home from './Modules/HomeModule/Home';
import Cart from './Modules/CartModule/Cart';
import NotFound from './Modules/SharedComponents/NotFound/NotFound';
import Categories from './Modules/Categories/Categories';
import BookModule from './Modules/BookModule/BookModule';
import AuthLayout from './Modules/SharedComponents/AuthLayout/AuthLayout';
import { Book } from 'lucide-react';
import BooksPage from './Modules/BooksPage/BooksPage';
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout/>,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "forget-pass", element: <ForgetPass/> },
        { path: "change-pass", element: <ChangePass /> },
        { path: "register", element: <Register /> },
        { path: "reset-pass", element: <ResetPass /> },
      ],
    },
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> }, // Set Home as the default index in the dashboard
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "books", element: <BooksPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
