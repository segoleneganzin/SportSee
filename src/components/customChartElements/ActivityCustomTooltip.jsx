import PropTypes from 'prop-types';

const ActivityCustomTooltip = ({ active, payload }) => {
  return active && payload ? (
    <div className='activity__custom-tooltip'>
      <p>{`${payload[0].value}`}kg</p>
      <p>{`${payload[1].value}`}kCal</p>
    </div>
  ) : (
    ''
  );
};
ActivityCustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      // each object in the payload array must have a value property,
      // which can be either a string, a number or a boolean.
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
      payload: PropTypes.shape({
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      }),
    })
  ),
};
export default ActivityCustomTooltip;
