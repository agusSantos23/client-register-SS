import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"



function Register(){


  return(
    <div className="flex flex-col justify-center gap-20 items-center h-full">
      <div className="flex flex-col gap-10">
        <Input type="email" id="email" placeHolder="Correo Electronico"/>
        <Input type="password" id="password" placeHolder="Contraseña"/>
      </div>

      <Enviar content="Iniciar Sesion" />
		</div>
  )
}


export default Register