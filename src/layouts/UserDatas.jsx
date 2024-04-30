import PropTypes from 'prop-types';
import UserDatasCard from '../components/UserDatasCard';
/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.user
 * @returns {JSX.Element}
 */

const UserDatas = ({ user }) => {
  return (
    <section className='container'>
      <UserDatasCard name='Calories' value={user.calorieCount} />
      <UserDatasCard name='Protéines' value={user.proteinCount} />
      <UserDatasCard name='Glucides' value={user.carbohydrateCount} />
      <UserDatasCard name='Lipides' value={user.lipidCount} />
    </section>
  );
};

UserDatas.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserDatas;
