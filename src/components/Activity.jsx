/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
// eslint-disable-next-line no-unused-vars
import { UserActivity } from '../services/models/UserActivity'; // give JSDoc access to object structure

/**
 * Component representing the activity chart.
 * @param {object} props
 * @param {UserActivity} props.userActivity
 * @returns {JSX.Element}
 */
const Activity = ({ userActivity }) => {
  // Adding day date for XAxis to manage display data.
  // dayDate is only the month day date :  2020-07-01 => 1,
  const dataWithDayDate = userActivity.sessions.map((session) => {
    return {
      ...session,
      dayDate: session.day.getDate(),
    };
  });

  /**
   * Custom legend component.
   * @param {Array<object>} props.payload
   * @returns {JSX.Element}
   */
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

  /**
   * Custom tooltip component.
   * @param {boolean} props.active
   * @param {Array<object>} props.payload
   * @returns {JSX.Element}
   */
  const ActivityCustomTooltip = ({ active, payload }) => {
    return (
      active &&
      payload && (
        <div className='activity__custom-tooltip'>
          <p>{`${payload[0].value}`}kg</p>
          <p>{`${payload[1].value}`}kCal</p>
        </div>
      )
    );
  };

  return (
    <section className='activity'>
      <h2 className='activity__title container__title'>Activité quotidienne</h2>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart
          width={730}
          height={200}
          data={dataWithDayDate}
          barGap='10'
          barSize={8}
          margin={{ left: 50, right: 40 }}
        >
          <CartesianGrid strokeDasharray='3' vertical={false} />
          <XAxis
            dataKey='dayDate'
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
            tickMargin={14}
            axisLine={false}
          />
          <YAxis
            yAxisId='left'
            orientation='left'
            dataKey='calories'
            hide={true}
            tickCount={7}
            domain={['dataMin - 40', 'dataMax + 40']} // for better rendering and display all data tu user
          />
          <YAxis
            yAxisId='right'
            dataKey='kilogram'
            orientation='right'
            type='number'
            domain={['dataMin - 1', 'dataMax + 1']} // for better rendering and display all data tu user
            tickLine={false}
            axisLine={false}
            tickMargin={45}
            tickCount={4}
            allowDecimals={false}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          />
          <Legend
            verticalAlign='top'
            height={60}
            align='right'
            width={300}
            content={<ActivityCustomLegend />}
          />
          <Tooltip
            content={<ActivityCustomTooltip />}
            offset={70}
            cursor={{ opacity: 0.5 }}
          />
          <Bar
            yAxisId='right'
            dataKey='kilogram'
            name='Poids (kg)'
            fill='#282D30'
            radius={[20, 20, 0, 0]}
          />

          <Bar
            yAxisId='left'
            dataKey='calories'
            name='Calories brûlées (kCal)'
            fill='#E60000'
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};
Activity.propTypes = {
  userActivity: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.instanceOf(Date),
        kilogram: PropTypes.number,
        calorie: PropTypes.number,
      }).isRequired
    ),
  }).isRequired,
};
export default Activity;
