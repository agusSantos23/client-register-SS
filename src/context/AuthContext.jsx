import { createContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verityTokenRequest } from "../api/auth"
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async user =>{

    try{
      const res = await registerRequest(user)

      setUser(res.data)
      setIsAuthenticated(true)
      setErrors([])
    }catch(error){
      setErrors( error?.response?.data?.message || error?.response?.data?.error || ["An unexpected error occurred"])
    }
  }

  const signin = async user =>{

    try {
      const res = await loginRequest(user)

      setUser(res.data)
      setIsAuthenticated(true)
      setErrors([])
    } catch (error) {

      setErrors( error?.response?.data?.message || error?.response?.data?.error || ["An unexpected error occurred"])
    }
  }

  useEffect(() => {

    const cookies = Cookies.get()

    async function checkLogin(){

      if(cookies.token){
        try {
          const res = await verityTokenRequest(cookies.token)
          
          console.log(res);
          
          if(!res.data) return setIsAuthenticated(false)
  
          setIsAuthenticated(true)
          setUser(res.data)

        } catch (error) {
        
          setIsAuthenticated(false)
          setUser(null)
        }
      }
    }
    checkLogin()

    

  }, [])
  

  return(
    
    <AuthContext.Provider 
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        errors,
      }}
    >

      {children}
    </AuthContext.Provider>
  
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
