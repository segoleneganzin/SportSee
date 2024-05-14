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

import ActivityCustomTooltip from './customChartElements/ActivityCustomTooltip';
import ActivityCustomLegend from './customChartElements/ActivityCustomLegend';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userActivity
 * @returns {JSX.Element}
 */
const Activity = ({ userActivity }) => {
  // to manage display datas, we add index for XAxis
  const dataWithIndex = userActivity.sessions.map((session, index) => ({
    ...session,
    index: index + 1, //bagin with 1 instead of 0
  }));

  return (
    <section className='activity'>
      <h2 className='activity__title container__title'>Activité quotidienne</h2>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart
          width={730}
          height={200}
          data={dataWithIndex}
          barGap='10'
          barSize={8}
          margin={{ left: 50, right: 40 }}
        >
          <CartesianGrid strokeDasharray='3' vertical={false} />
          <XAxis
            dataKey='index'
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
            tickMargin={14}
            axisLine={false}
            type='number'
            domain={[1, 7]}
            ticks={[1, 2, 3, 4, 5, 6, 7]}
          />
          <YAxis
            yAxisId='left'
            orientation='left'
            dataKey='calories'
            hide={true}
            tickCount={7}
            domain={['dataMin - 40', 'dataMax + 40']}
          />
          <YAxis
            yAxisId='right'
            dataKey='kilogram'
            orientation='right'
            type='number'
            domain={['dataMin - 1', 'dataMax + 1']}
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
            name='Calories brulées (kCal)'
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
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calorie: PropTypes.number,
      }).isRequired
    ),
  }).isRequired,
};
export default Activity;
