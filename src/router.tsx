import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home/Home";
import GeneroLoader from "./Functions/GeneroLoader";
import Genero from "./pages/Genero/Genero";
import Detalhes from "./pages/Detalhes/Detalhes";
import DetalhesLoader from "./Functions/DetalhesLoader";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Login />,
    // },
    {
        path: "/generos",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/generos/:genero",
                element: <Genero />,
                loader: GeneroLoader
            },
            {
                path: "/generos/:genero/:livroId",
                element: <Detalhes />,
                loader: DetalhesLoader
            }
        ]
    }
])


export default router;