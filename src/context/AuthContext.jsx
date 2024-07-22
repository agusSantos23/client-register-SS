import { createContext, useState } from "react";
import { registerRequest } from "../api/auth"
import PropTypes from "prop-types";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async user =>{

    try{
      const res = await registerRequest(user)
      console.log(res)

      setUser(res.data)
      setIsAuthenticated(true)
      setErrors([])
    }catch(error){
      setErrors(error.response.data.message || ["An unexpected error occurred"])
    }
  }

  return(
    
    <AuthContext.Provider 
    value={{
      signup,
      user,
      isAuthenticated,
      errors,
    }}>

      {children}
    </AuthContext.Provider>
  
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
