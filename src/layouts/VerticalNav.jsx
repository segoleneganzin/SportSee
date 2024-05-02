import { sports } from '../assets/datas/sports';
const VerticalNav = () => {
  return (
    <section className='vertical-section'>
      {/* store data in a table to enable better implementation in the API if required 
        (e.g., the user can select sports from a list and these will be displayed in the vertical bar)  */}
      <nav className='vertical-section__nav'>
        {sports.map((item, index) => (
          <a
            href='#'
            className='vertical-section__nav-link'
            aria-label={item.name}
            key={index}
          >
            <img src={item.icon} alt='' />
          </a>
        ))}
      </nav>
      <p className='vertical-section__copyright'>Copiryght, SportSee 2020</p>
    </section>
  );
};

export default VerticalNav;
