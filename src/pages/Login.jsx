import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer  } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { useAuth } from "../context/useAuth"

import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"

function Login({handleRouteClick}){
  const { register, handleSubmit, 
    formState:{errors}
  } = useForm();

  const { 
    signin,
    isAuthenticated,
    errors: signinErrors
  } = useAuth()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => signin(data)) 

  const [ifError, setIfError] = useState(false)

  useEffect(()=>{
    if (isAuthenticated) {
      toast.success("Inicio de sesión exitoso, redireccionando",{
        position: "bottom-center",
        theme: "colored"
      })

      setTimeout(()=>{
        navigate('/home')
      },3000)
    }
  }, [isAuthenticated,navigate])

  useEffect(()=>{
    signinErrors.forEach(err => toast.error(err ,{
      position: "bottom-center",
      theme: "colored",
    }))
    if (signinErrors.length > 0) setIfError(true)
  },[signinErrors])

  return(
    <>
      <form 
        onSubmit={onSubmit}
        className="flex flex-col justify-center gap-16 items-center h-full"
      >
        <div className="flex flex-col gap-10">
          <Input 
            type="email" 
            id="email" 
            placeholder="Correo Electronico"
            register={register}
            required={true}
            errors={errors}
          />
          <Input 
            type="password" 
            id="password" 
            placeholder="Contraseña"
            register={register}
            required={true}
            errors={errors}
          />
          { 
            ifError && 
              <p className="text-Mydark dark:text-Mywhite ">
                Si no tienes una cuenta creada, puedes crearla {' '}
                <Link 
                  to="/register" 
                  onClick={handleRouteClick} 
                  className="text-Myorange hover:text-Mylightorange duration-500"
                >
                  AQUI
                </Link>      
              </p>
          }
        </div>

        <Enviar content="Iniciar Sesion" />

      </form>
      <ToastContainer/>
    </>
  )
}

Login.propTypes = {
  handleRouteClick: PropTypes.func
}

export default Login