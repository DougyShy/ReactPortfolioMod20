/* FOOTER.JSX */

import '../styles/Footer.css';

const styles = {
  footerStyle: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lightBlue', 
    color: 'white',
    fontSize: '50px', 
    padding: '10px', 
  },
}

function Footer() {
  return (
    <div style={styles.footerStyle} className="px-5 py-3 gap-5 footer">
      <div>
        <a href="https://github.com/DougyShy" target="_blank" rel="noreferrer noopener"><img className="footer-link" src='src\assets\\gitHubfooter.png' /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/clinton-scheible-aa0138262" target="_blank" rel="noreferrer noopener"><img className="footer-link" src='src\assets\\linkedInFooter.png' /></a> 
      </div>
      <div>
        <a href="https://stackoverflow.com/users/25627214/clinton-scheible" target="_blank" rel="noreferrer noopener"><img className="footer-link" src='src\assets\\stackOverflowFooter.png' /></a>
      </div>
    </div>
  );
}

export default Footer;