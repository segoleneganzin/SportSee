import PropTypes from 'prop-types';

const PerformanceCustomTick = ({ payload, x, y, cx, cy }) => {
  return (
    <text
      y={y + (y - cy) / 20}
      x={x + (x - cx) / 4}
      textAnchor='middle'
      fontSize='0.75rem'
      fill='#fff'
      className='custom-tick'
    >
      {payload.value}
    </text>
  );
};

PerformanceCustomTick.propTypes = {
  payload: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string]).isRequired,
  }),
  x: PropTypes.number,
  y: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

export default PerformanceCustomTick;
