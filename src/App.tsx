import { RouterProvider } from "react-router-dom"
import router from "./router"
import Login from "./pages/Login/Login"

function App() {

  return (
    <>
      <RouterProvider router={router} />
      {/* <Login /> */}

      {/* COLOCAR REQUISIÇÃO HTTP E HOVERS  */}
    </>
  )
}
  
export default App
