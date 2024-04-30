/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.userPerformance
 * @returns {JSX.Element}
 */
const Performance = ({ userPerformance }) => {
  return (
    <section className='container performance'>
      <hr />
      {userPerformance.data.map((data, index) => (
        <p key={index}>
          {userPerformance.kind[data.kind]} :{data.value}
        </p>
      ))}
      <hr />
    </section>
  );
};
Performance.propTypes = {
  userPerformance: PropTypes.object.isRequired,
};
export default Performance;
