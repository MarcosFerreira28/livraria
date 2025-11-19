import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Home from "../pages/Home/Home";
import GeneroLoader from "../Functions/GeneroLoader";
import Genero from "../pages/Genero/Genero";
import Detalhes from "../pages/Detalhes/Detalhes";
import DetalhesLoader from "../Functions/DetalhesLoader";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import ProtectedRoutes from "../Routes/ProtectedRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/:genero",
                element: <Genero />,
                loader: GeneroLoader
            },
            {
                path: "/:genero/:livroId",
                element: <Detalhes />,
                loader: DetalhesLoader
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoutes>
                        <Cart />
                    </ProtectedRoutes>
                )
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;