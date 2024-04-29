import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{payload[0].value} min</p>
      </div>
    );
  }

  return null;
};
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomTooltip;
