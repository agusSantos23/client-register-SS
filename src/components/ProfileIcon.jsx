import PropTypes from 'prop-types'

import profileBlue from "../assets/picture/profile-blue.svg"
import profileGreen from "../assets/picture/profile-green.svg"
import profileRed from "../assets/picture/profile-red.svg"
import profileViolet from "../assets/picture/profile-violet.svg"


function ProfileIcon({ onSubmit, userNumber, select = false}){

  let imgProfile
  
  switch (userNumber) {

    case "1":
      imgProfile = profileGreen
      break;
    
    case "2":
      imgProfile = profileRed
      break;
    
    case "3":
      imgProfile = profileViolet
      break;

    case "4":
      imgProfile = profileBlue
      break;
  
    default:
      throw new Error("Imagen de perfil no existe ");
  }

  if (select) {
    return <img className='w-40' src={imgProfile} alt="imgProfile" />
    
  }else{
    return <img className="w-16 cursor-pointer" onClick={() => {onSubmit(userNumber)}} src={imgProfile} alt="imgProfile" />
    
  }

}

ProfileIcon.propTypes = {
  onSubmit: PropTypes.func,
  userNumber: PropTypes.string.isRequired,
  select: PropTypes.bool
}

export default ProfileIcon
