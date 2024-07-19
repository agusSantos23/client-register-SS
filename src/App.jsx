import {Route, Routes, Link} from "react-router-dom"
import { useState } from "react"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Logo from "./components/Logo"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };


  return (
    <div className="bg-Mywhite h-svh dark:bg-Mydark">
      
      <Logo size="150px" />

      <nav className="text-Mydark dark:text-Mywhite absolute right-10 top-10 text-2xl duration-300 hover:text-Myorange hover:tracking-widest hover:font-bold dark:hover:text-Myorange">
        {isLogin ? (
          <Link
            to={"/"}
            onClick={handleRegisterClick}
          >
            Login
          </Link>
        ) : (
          <Link
            to={"/register"}
            onClick={handleLoginClick}
          >
            Register
          </Link>
        )}
      </nav>

      
      <main className="w-2/3 h-2/3 absolute left-1/2 bottom-10 -translate-x-1/2 ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      
      

    </div>
  )
}

export default App
