import PropTypes from 'prop-types';
/**
 * Component representing the dashboard header.
 * @param {object} props
 * @param {object} props.user
 * @returns {JSX.Element}
 */

const DashboardHeader = ({ user }) => {
  return (
    <section className='dashboard-header'>
      <h1 className='title1'>
        Bonjour{' '}
        <span className='dashboard-header__firstName'>{user.firstName}</span>
      </h1>
      <p className='subtitle'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
};
DashboardHeader.propTypes = {
  user: PropTypes.object.isRequired,
};
export default DashboardHeader;
