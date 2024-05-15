import PropTypes from 'prop-types';
import UserDatasCard from '../components/UserDatasCard';
// eslint-disable-next-line no-unused-vars
import { User } from '../services/models/User'; // give JSDoc access to object structure
/**
 * Layout containing user datas cards.
 * @param {object} props
 * @param {User} props.user
 * @returns {JSX.Element}
 */
const UserDatas = ({ user }) => {
  return (
    <section className='user-datas'>
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
