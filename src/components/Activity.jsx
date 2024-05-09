/* eslint-disable no-unused-vars */
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
  // to manage display datas, we transform day by its index
  const dataWithIndex = userActivity.sessions.map((session, index) => ({
    ...session,
    index: index + 1, // Ajoutez 1 à l'index pour commencer à partir de 1 au lieu de 0
  }));

  return (
    <section className='activity'>
      <h2 className='today-score__title container__title'>
        Activité quotidienne
      </h2>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart
          width={730}
          height={200}
          data={dataWithIndex}
          barGap='10'
          barSize={10}
        >
          <CartesianGrid strokeDasharray='2 2' vertical={false} />
          <XAxis
            dataKey='index'
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
            tickMargin={14}
            axisLine={false}
          />
          <YAxis
            yAxisId='left'
            orientation='left'
            dataKey='calories'
            tickCount={3}
            hide={true}
          />
          <YAxis
            yAxisId='right'
            dataKey='kilogram'
            orientation='right'
            type='number'
            domain={['dataMin -5', 'dataMax + 5']}
            tickLine={false}
            axisLine={false}
            tickMargin={20}
            tickCount={3}
            minTickGap={16}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          />
          <Legend
            verticalAlign='top'
            iconType='circle'
            iconSize={8}
            height={60}
            align='right'
            width={300}
            content={<ActivityCustomLegend />}
          />
          <Tooltip content={<ActivityCustomTooltip />} offset={70} />
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
