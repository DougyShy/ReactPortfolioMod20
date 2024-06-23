import '../../public/css/NavTabs.css';

const styles = {
  headerStyle: {
    color: 'white',
    height: 100,
    backgroundImage: "url('/images/diagonalStripes.jpg')"
  },
  headingStyle: {
    fontSize: '50px',
    marginLeft: 25 
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.headerStyle} className="d-flex flex-wrap justify-content-between align-items-center header">
      <h1 style={styles.headingStyle}>Clinton Scheible</h1>
        <ul className="nav justify-content-end">
        <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
    </div>
  );
}

export default NavTabs;
