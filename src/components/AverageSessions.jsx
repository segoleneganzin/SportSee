/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userAverageSessions
 * @returns {JSX.Element}
 */

const AverageSessions = ({ userAverageSessions }) => {
  return (
    <section className='container'>
      <hr />
      {userAverageSessions.sessions.map((session, index) => (
        <li key={index}>
          <p>
            Day : {session.day} <br />
            Session duration : {session.sessionLength} <br />
          </p>
        </li>
      ))}
      <hr />
    </section>
  );
};
AverageSessions.propTypes = {
  userAverageSessions: PropTypes.object.isRequired,
};
export default AverageSessions;
