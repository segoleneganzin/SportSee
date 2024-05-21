import PropTypes from 'prop-types';
/**
 * Components to manage error message.
 * props.message has a default message.
 * @param {string} props.message
 * @returns {JSX.Element}
 */
const ErrorMessage = ({ message = "Une erreur s'est produite ..." }) => {
  return (
    <>
      <h1 className='title1'>Oups !</h1>
      <p className='subtitle'>{message}</p>
    </>
  );
};
ErrorMessage.propTypes = {
  message: PropTypes.string,
};
export default ErrorMessage;
