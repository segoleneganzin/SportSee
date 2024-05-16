/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from 'recharts';
// eslint-disable-next-line no-unused-vars
import { UserPerformance } from '../services/models/UserPerformance'; // give JSDoc access to object structure

/**
 * Component representing the performance chart.
 * @param {object} props
 * @param {UserPerformance} props.userPerformance
 * @returns {JSX.Element}
 */
const Performance = ({ userPerformance }) => {
  /**
   * Custom tick component.
   * Manages label spacing relative to chart
   * @param {Array<object>} props.payload
   * @param {number} props.x - X coordinate.
   * @param {number} props.y - Y coordinate.
   * @param {number} props.cx - Center X coordinate.
   * @param {number} props.cy - Center Y coordinate.
   * @returns {JSX.Element} - Returns JSX element.
   */
  const PerformanceCustomTick = ({ payload, x, y, cx, cy }) => {
    return (
      <text
        y={y + (y - cy) / 20} // calculate y position
        x={x + (x - cx) / 4} // calculate x position
        textAnchor='middle'
        fill='#fff'
        className='performance__kind'
      >
        {payload.value}
      </text>
    );
  };

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
