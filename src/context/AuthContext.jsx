import { createContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verityTokenRequest } from "../api/auth"
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true)

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

  const updateProfile = async user =>{
    console.log(user);
  }

  useEffect(() => {

    const cookies = Cookies.get()

    async function checkLogin(){

      if (!cookies.token) {
        
        setLoading(false)
        setIsAuthenticated(false)
        setUser(false)
        
      }
      
      try {
        const res = await verityTokenRequest(cookies.token)     
        if(!res.data) {
          setLoading(false)
          setIsAuthenticated(false)
        } 
        
        setLoading(false)
        setIsAuthenticated(true)
        setUser(res.data)

      } catch (error) {
        setLoading(false)
        setIsAuthenticated(false)
        setUser(null)
      }
      
    }
    checkLogin()

  }, [])

  return(
    <AuthContext.Provider 
      value={{
        signup,
        signin,
        updateProfile,
        loading,
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
