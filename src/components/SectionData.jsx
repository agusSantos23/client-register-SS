
import PropTypes from 'prop-types'


import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"

function SectionData({ onSubmit, user, register, errors }){
  return (
    <div className="flex flex-col justify-around">
        <header className="flex justify-center gap-3 flex-col items-center text-center dark:text-Mywhite">
          <h1 className="text-4xl">Hola {user.username}</h1>
          <h2 className="text-2xl">Control de Usuario</h2>
        </header>

        <form 
          onSubmit={onSubmit}
          className="flex flex-col justify-around  items-center h-4/6"
        >
          <div className="flex flex-col justify-center gap-8">
            <Input
              type="email"
              id="email"
              placeholder="Correo Electrónico" 
              register={register}
              errors={errors}
            />
            <Input 
              type="text" 
              id="username" 
              placeholder="Nombre de usuario"
              register={register}
              errors={errors}
            />
            <Input 
              type="password" 
              id="password" 
              placeholder="Contraseña"
              register={register}
              errors={errors}
              minLength={8}
            />
          </div>
          

          <Enviar content="Actualizar" />
        </form>
      </div>
  )
}

SectionData.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
  register: PropTypes.func,
  errors: PropTypes.object,
}

export default SectionData