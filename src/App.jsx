import {Route, Routes, Link} from "react-router-dom"
import { useState } from "react"
import { AuthProvider } from "./context/AuthContext"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Logo from "./components/Logo"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  

  const handleRouteClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <AuthProvider>
      <div className="bg-Mywhite h-svh dark:bg-Mydark">
        
        <Logo size="150px" />

        <nav className="text-Mydark dark:text-Mywhite absolute right-10 top-10 text-2xl duration-300 hover:text-Myorange hover:tracking-widest hover:font-bold dark:hover:text-Myorange">
          {isLogin ? (
            <Link
              to={"/"}
              onClick={handleRouteClick}
            >
              Login
            </Link>
          ) : (
            <Link
              to={"/register"}
              onClick={handleRouteClick}
            >
              Register
            </Link>
          )}
        </nav>

        
        <main className="w-5/6 h-2/3 absolute left-1/2 bottom-10 -translate-x-1/2 ">
          <Routes>
            <Route path="/" element={<Login handleRouteClick={handleRouteClick} />} />
            <Route path="/register" element={<Register handleRouteClick={handleRouteClick}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        
        

      </div>
    </AuthProvider>
  )
}

export default App
