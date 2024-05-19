import PropTypes from 'prop-types';

/**
 * reusable page for different type of error,
 * Type and message can be managed into Router.
 * @param {Object} props
 * @param {string} props.errorType
 * @param {string} props.errorMessage
 * @returns {JSX.Element}
 */
const ErrorPage = ({ errorType, errorMessage }) => {
  return (
    <>
      <h1 className='error-page__type'>{errorType}</h1>
      <p className='error-page__message'>{errorMessage}</p>
    </>
  );
};
ErrorPage.propTypes = {
  errorType: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
export default ErrorPage;
