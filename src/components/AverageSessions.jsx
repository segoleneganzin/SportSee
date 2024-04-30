/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userAverageSessions
 * @returns {JSX.Element}
 */

const AverageSessions = ({ userAverageSessions }) => {
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

  // function to manage what tooltip display
  const customTooltip = ({ active, payload }) => {
    return active && payload && payload.length ? (
      <div className='average-sessions__custom-tooltip'>
        <p className='label'>{payload[0].value} min</p>
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
      <div className='overlay'></div>

      <ResponsiveContainer width='100%' height='60%'>
        <LineChart data={userAverageSessions.sessions}>
          <defs>
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
                offset='0.810441'
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
            className='average-sessions__custom-line' // Add custom CSS class for the line
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
          {/* infobulle */}
          <Tooltip content={customTooltip} cursor={false} offset={4} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};
AverageSessions.propTypes = {
  userAverageSessions: PropTypes.object.isRequired,
};
export default AverageSessions;
