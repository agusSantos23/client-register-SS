import { useForm } from "react-hook-form";
import Enviar from "../components/common/Enviar";
import Input from "../components/common/Input";

function Register() {
  const { register, handleSubmit, 
    formState:{errors}
  } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log("Datos del formulario:", data);
  }) 
  
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-20 items-center h-full"
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
      </div>

      <Enviar content="Registrarse" />
    </form>
  );
}

export default Register;
