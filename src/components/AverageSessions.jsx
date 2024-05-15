/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
// eslint-disable-next-line no-unused-vars
import { UserAverageSessions } from '../services/models/UserAverageSessions'; // give JSDoc access to object structure

/**
 * Component representing the average session chart.
 * The data were extended before and after, to manage visual rendering.
 * @param {object} props
 * @param {UserAverageSessions} props.userAverageSessions
 * @returns {JSX.Element}
 */
const AverageSessions = ({ userAverageSessions }) => {
  /**
   * Manage X axis ticks values
   * @param {number} value
   * @returns {string}
   */
  const formatLabel = (value) => {
    switch (value) {
      case 1:
        return 'L';
      case 2:
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';
      default:
        return value;
    }
  };

  /**
   * Function to create additional data for visual render
   * @param {Array<object>} data
   * @returns {Array<object>}
   */
  const extendData = (data) => {
    // Add additional data at the beginning and the end
    const extendedData = [
      { day: 0, sessionLength: data[0].sessionLength },
      { day: 8, sessionLength: data[6].sessionLength },
    ];
    // Add existing data
    extendedData.push(...data);
    // Sort the extended data array by the day index
    return extendedData.sort((a, b) => a.day - b.day);
  };

  /**
   * Custom tooltip component.
   * Managed the overlay (dark background) depend of cursor position on the line
   * @param {boolean} props.active
   * @param {Array<object>} props.payload
   * @param {object} props.coordinate
   * @returns {JSX.Element}
   */
  const AverageSessionsCustomTooltip = ({ active, payload, coordinate }) => {
    let rightOverlayWidth, xPosition, yPosition, xLabelPosition, yLabelPosition;
    const containerWidth = 305; // Width of the chart container => 258px * 118% (size of responsiveContainer)
    if (active && payload) {
      // Get cursor position
      xPosition = coordinate ? coordinate.x : 0;
      yPosition = coordinate ? coordinate.y : 0;
      rightOverlayWidth = containerWidth - xPosition; // Calculate width of the semi-transparent overlay
      xLabelPosition = xPosition > 230 ? xPosition - 40 : xPosition + 5; // manage horizontal tooltip position
      yLabelPosition = yPosition - 35; // manage vertical tooltip position
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

  return (
    <section className='container average-sessions'>
      <h2 className='average-sessions__title container__title'>
        Durée moyenne des sessions
      </h2>
      {/* with > 100% to mask extend datas before and after for visual render */}
      <ResponsiveContainer width='118%' height='70%'>
        <LineChart data={extendData(userAverageSessions.sessions)}>
          <defs>
            {/* line gradient + color */}
            <linearGradient
              id='colorLine'
              x1='309.906'
              y1='-1.97779'
              x2='-47.7754'
              y2='-1.97779'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />

              <stop
                offset='0.910441'
                stopColor='white'
                stopOpacity='0.403191'
              />
            </linearGradient>
          </defs>
          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='url(#colorLine)' // Apply gradient
            strokeWidth={2} // Line width
            dot={false} // Disable data points
            activeDot={{
              fill: '#FFF',
              strokeWidth: 5,
              stroke: 'rgba(255, 255, 255, 0.20)',
            }}
          />
          <XAxis
            dataKey='day'
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tick={{
              fill: '#fff',
              fontSize: '0.75rem',
              opacity: 0.5,
            }}
            interval='preserveStartEnd'
            tickFormatter={formatLabel}
          />
          <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
          <Tooltip content={<AverageSessionsCustomTooltip />} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};
AverageSessions.propTypes = {
  userAverageSessions: PropTypes.object.isRequired,
};
export default AverageSessions;
