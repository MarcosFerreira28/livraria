import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home/Home";
import GeneroLoader from "./Functions/GeneroLoader";
import Genero from "./pages/Genero/Genero";

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
            }
        ]
    }
])


export default router;