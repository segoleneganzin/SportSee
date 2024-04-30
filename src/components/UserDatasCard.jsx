import PropTypes from 'prop-types';

const UserDatasCard = ({ name, value }) => {
  return (
    <div>
      <p>
        <span>{value + (name === 'Calories' ? 'kCal' : 'g')}</span> <br />
        {name}
      </p>
    </div>
  );
};
UserDatasCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default UserDatasCard;
