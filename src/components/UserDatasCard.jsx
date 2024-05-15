import PropTypes from 'prop-types';
import caloriesIcon from '../assets/images/calories-icon.svg';
import proteinIcon from '../assets/images/protein-icon.svg';
import carbsIcon from '../assets/images/carbs-icon.svg';
import fatIcon from '../assets/images/fat-icon.svg';

/**
 * Component representing user datas card (calories, protein, carb or fat).
 * @param {string} props.name
 * @param {number} props.value
 * @returns {JSX.Element}
 */
const UserDatasCard = ({ name, value }) => {
  /**
   * manages the icon according to the card name
   * @param {string} name
   * @returns {string} // image path
   */
  const dataIcon = (name) => {
    switch (name) {
      case 'Calories':
        return caloriesIcon;
      case 'Protéines':
        return proteinIcon;
      case 'Glucides':
        return carbsIcon;
      case 'Lipides':
        return fatIcon;
      default:
        return null;
    }
  };
  return (
    <div className='user-datas-card'>
      <img src={dataIcon(name)} alt='' />
      <p>
        <span className='user-datas-card__value'>
          {value + (name === 'Calories' ? 'kCal' : 'g')}
        </span>
        <br />
        <span className='user-datas-card__category'>{name}</span>
      </p>
    </div>
  );
};
UserDatasCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default UserDatasCard;
