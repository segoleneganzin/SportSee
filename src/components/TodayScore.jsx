import PropTypes from 'prop-types';
/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.user
 * @returns {JSX.Element}
 */

const TodayScore = ({ user }) => {
  return (
    <section className='container'>
      Daily goal : {user.todayScore * 100}%
    </section>
  );
};

TodayScore.propTypes = {
  user: PropTypes.object.isRequired,
};

export default TodayScore;
