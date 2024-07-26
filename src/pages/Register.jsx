import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import { toast, ToastContainer  } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

import { useAuth } from "../context/useAuth"

import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"

function Register({handleRouteClick}) {

  const { register, handleSubmit, 
    formState:{errors}
  } = useForm()

  const [ifError, setIfError] = useState(false)

  const { 
    signup, 
    isAuthenticated, 
    errors: registerErrors 
  } = useAuth()

  const navigate = useNavigate()


  useEffect(() => {
    if(isAuthenticated) {

      toast.success("Se a creado la cuenta de usuario, redireccionando",{
        position: "bottom-center",
        theme: "colored",
      })
      setTimeout(()=>{
        navigate('/home')
      },3000) 
    }
  }, [isAuthenticated, navigate])

  useEffect(()=>{
    registerErrors.forEach(err => toast.error(err ,{
      position: "bottom-center",
      theme: "colored",
    }))
    if (registerErrors.length > 0) setIfError(true)

  },[registerErrors])

  const onSubmit = handleSubmit(async data => {
    
    signup(data)
  })


  
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center gap-16 items-center h-full"
      >
        <div className="flex flex-col gap-10">
          <Input 
            type="email" 
            id="email" 
            placeholder="Correo Electrónico" 
            register={register}
            errors={errors}
            required={true}
          />
          <Input 
            type="text" 
            id="username" 
            placeholder="Nombre de usuario"
            register={register}
            errors={errors}
            required={true}
          />
          <Input 
            type="password" 
            id="password" 
            placeholder="Contraseña"
            register={register}
            errors={errors}
            required={true}
            minLength={8}
          />
          { 
            ifError && 
              <p className="text-Mywhite ">
                Si tienes una cuenta creada, puedes iniciar sesion {' '}
                <Link 
                  to="/" 
                  onClick={handleRouteClick} 
                  className="text-Myorange hover:text-Mylightorange duration-500"
                >
                  AQUI
                </Link>      
              </p>
          }
        </div>

        <Enviar content="Registrarse" />
      </form>

      <ToastContainer />
    </>
  )
}

Register.propTypes = {
  handleRouteClick: PropTypes.func
}

export default Register;
