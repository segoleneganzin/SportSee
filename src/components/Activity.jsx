/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userActivity
 * @returns {JSX.Element}
 */
const Activity = ({ userActivity }) => {
  return (
    <section className='activity'>
      {userActivity.sessions.map((session, index) => (
        <p key={index}>
          Date : {session.day} <br />
          Kg : {session.kilogram} <br />
          Calories : {session.calories} <br />
        </p>
      ))}
    </section>
  );
};
Activity.propTypes = {
  userActivity: PropTypes.object.isRequired,
};
export default Activity;
