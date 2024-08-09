import PropTypes from 'prop-types'

import ProfileIcon from "./ProfileIcon"
import { useAuth } from '../context/useAuth';


function SectionPicture({ userPicture }){

  const {
    updatePicture
  } = useAuth()

  const possibleNumbers = ['1', '2', '3', '0'].filter(number => number !== userPicture);
  
  const onSubmit = async data => updatePicture(data) 

  
  return (
    <div className="flex justify-center items-center">

        <div className="flex justify-center items-center flex-col gap-8">
          <ProfileIcon userNumber={userPicture} select={true} />


          <div className="flex gap-4" >
            {possibleNumbers.map(number => (
              <ProfileIcon onSubmit={onSubmit} key={number.toString()} userNumber={number.toString()} />
            ))}
          </div>
        </div>

      </div>
  )
}

SectionPicture.propTypes = {
  userPicture: PropTypes.string.isRequired
}

export default SectionPicture
