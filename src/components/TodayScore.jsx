import PropTypes from 'prop-types';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
// eslint-disable-next-line no-unused-vars
import { User } from '../services/models/User'; // give JSDoc access to object structure

/**
 * Component representing the today score chart.
 * @param {object} props
 * @param {User} props.user
 * @returns {JSX.Element}
 */
const TodayScore = ({ user }) => {
  const { todayScore } = user; // for better understanding
  const todayScorePercentage = todayScore * 100; // transform data into percentage
  return (
    <section className='container today-score'>
      <h2 className='today-score__title container__title'>Score</h2>
      <div className='today-score__legend-container'>
        <p className='today-score__legend'>
          <span className='today-score__percentage'>
            {todayScorePercentage}%
          </span>
          <span>de votre</span> <span> objectif</span>
        </p>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          width={330}
          height={250}
          innerRadius='70%'
          outerRadius='80%'
          data={[{ todayScore }]}
          startAngle={80} // start of chart bar
          endAngle={80 + todayScore * 360} // end of chart bar
          margin={{ top: 30 }}
        >
          <RadialBar
            dataKey='todayScore'
            cornerRadius={100}
            fill='#ff0101'
            stroke-linejoin='round'
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
};

TodayScore.propTypes = {
  user: PropTypes.object.isRequired,
};

export default TodayScore;
