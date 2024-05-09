import PropTypes from 'prop-types';

const ActivityCustomLegend = ({ payload }) => {
  return (
    <ul className='activity__legend-container'>
      {payload.map((entry, index) => {
        return (
          <li key={index} className='activity__legend'>
            <span
              className='activity__legend-color'
              style={{
                backgroundColor: entry.color,
              }}
            ></span>
            {entry.value}
          </li>
        );
      })}
    </ul>
  );
};

ActivityCustomLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      // each object in the payload array must have a value property,
      // which can be either a string, a number or a boolean.
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    })
  ),
};

export default ActivityCustomLegend;
