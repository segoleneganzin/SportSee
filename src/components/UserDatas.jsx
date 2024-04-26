/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.user
 * @returns {JSX.Element}
 */

const UserDatas = ({ user }) => {
  return (
    <section className='container'>Calories : {user.calorieCount}</section>
  );
};

UserDatas.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserDatas;
