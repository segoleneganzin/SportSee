/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import CustomTooltip from '../utils/CustomTooltip';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userAverageSessions
 * @returns {JSX.Element}
 */

const AverageSessions = ({ userAverageSessions }) => {
  // necessary for domain of XAxis
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

  return (
    <section className='average-sessions'>
      <h2 className='average-sessions__title container__title'>
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width='100%' height='60%'>
        <LineChart data={userAverageSessions.sessions}>
          <Line
            type='natural'
            dataKey='sessionLength'
            stroke='#fff'
            strokeWidth={2}
            activeDot={{
              stroke: '#FFF',
              strokeWidth: 5,
            }}
            dot={false}
          />
          <XAxis
            dataKey='day'
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tick={{
              fill: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem',
            }}
            tickFormatter={formatLabel}
          />
          <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
          {/* infobulle */}
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};
AverageSessions.propTypes = {
  userAverageSessions: PropTypes.object.isRequired,
};
export default AverageSessions;
