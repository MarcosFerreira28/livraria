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
        path: "/genero",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/genero/:genero",
                element: <Genero />,
                loader: GeneroLoader
            }
        ]
    }
])


export default router;