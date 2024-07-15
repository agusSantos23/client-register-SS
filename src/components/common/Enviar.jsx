import PropTypes from 'prop-types';

function Enviar({ content }) {

  return (
    <button 
      type='submit'
      className='bg-Myorange w-64 rounded-2xl py-3 hover:border-x-8 duration-200 ease-in-out border-Mywhite  text-Mywhite text-2xl dark:text-Mywhite dark:hover:border-x-4 dark:border-Mydark'
    >
      {content}
    </button>
  );
}

Enviar.propTypes = {
  content: PropTypes.string.isRequired
};

export default Enviar;
