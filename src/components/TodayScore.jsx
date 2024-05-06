import PropTypes from 'prop-types';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.user
 * @returns {JSX.Element}
 */

const TodayScore = ({ user }) => {
  const { todayScore } = user;
  const todayScorePercentage = todayScore * 100;
  console.log(todayScore);
  console.log(todayScorePercentage);
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
          startAngle={80}
          endAngle={80 + todayScore * 360}
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
