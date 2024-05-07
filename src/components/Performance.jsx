import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from 'recharts';
import PerformanceCustomTick from './customChartElements/PerformanceCustomTick';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userPerformance
 * @returns {JSX.Element}
 */
const Performance = ({ userPerformance }) => {
  return (
    <section className='container performance'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          outerRadius={90}
          innerRadius={0}
          data={userPerformance.data}
        >
          <PolarGrid radialLines={false} stroke={'#fff'} strokeWidth={1} />
          <PolarAngleAxis
            dataKey='kind'
            tickLine={false}
            tick={<PerformanceCustomTick />}
          />
          <PolarRadiusAxis
            axisLine={false}
            tick={false}
            domain={[0, 250]}
            tickCount={6}
          />
          <Radar
            name='kind'
            dataKey='value'
            stroke='none'
            fill='#ff0101'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};
Performance.propTypes = {
  userPerformance: PropTypes.object.isRequired,
};
export default Performance;
