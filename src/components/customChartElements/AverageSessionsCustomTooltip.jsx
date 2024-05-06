import PropTypes from 'prop-types';

const AverageSessionsCustomTooltip = ({ active, payload, coordinate }) => {
  let rightOverlayWidth, xPosition, yPosition, xLabelPosition, yLabelPosition;
  const containerWidth = 305; // Width of the chart container => 258px * 118% (size of responsiveContainer)
  if (active && payload) {
    // Get cursor position
    xPosition = coordinate ? coordinate.x : 0;
    yPosition = coordinate ? coordinate.y : 0;
    rightOverlayWidth = containerWidth - xPosition; // Calculate width of the semi-transparent overlay
    xLabelPosition = xPosition > 230 ? xPosition - 40 : xPosition + 5;
    yLabelPosition = yPosition - 35;
  }
  return active && payload ? (
    <div className='average-sessions__custom-tooltip'>
      <div
        className='overlay'
        style={{ width: rightOverlayWidth, left: xPosition }}
      ></div>
      <p
        className='label'
        style={{ top: yLabelPosition, left: xLabelPosition }}
      >
        {payload[0].value} min
      </p>
    </div>
  ) : (
    ''
  );
};
AverageSessionsCustomTooltip.propTypes = {
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
        day: PropTypes.number,
        sessionLength: PropTypes.number,
      }),
    })
  ),
  coordinate: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};
export default AverageSessionsCustomTooltip;
