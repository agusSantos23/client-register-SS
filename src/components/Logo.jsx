import PropTypes from 'prop-types'; 
import LightLogo from '../assets/logo-SS-light.svg';
import DarkLogo from '../assets/logo-SS-dark.svg';

function Logo({ darkMode }) {
  return (
    <div className="flex items-center">
      <img
        src={darkMode ? DarkLogo : LightLogo}
        alt="Logo"
        className="w-40 h-40 absolute left-1/2 top-10 -translate-x-1/2"
      />
      
    </div>
  );
}

Logo.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Logo;
