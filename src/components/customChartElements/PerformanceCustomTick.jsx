import PropTypes from 'prop-types';

const PerformanceCustomTick = ({ payload, x, y, cx, cy }) => {
  return (
    <text
      y={y + (y - cy) / 20}
      x={x + (x - cx) / 4}
      textAnchor='middle'
      fill='#fff'
      className='performance__kind'
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
