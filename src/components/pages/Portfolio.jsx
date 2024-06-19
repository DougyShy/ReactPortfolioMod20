import '../../styles/Portfolio.css';

const styles = {
  portfolioStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white',
    fontSize: '50px',
  },

  resumeLinkStyle: {
    top: '50%', left: '5%', width: '75%', height: '100%', display: 'flex', alignItems: 'left', justifyContent: 'left', opacity: 1},
  
  portfolioCard: {
    padding: '1rem',
    textAlign: 'center',
  },
}

export default function Portfolio() {
  
  return (
    <div style={styles.portfolioStyle} className="px-5 py-3">
      <h1>Portfolios</h1>
      <div className="d-flex flex-wrap justify-content-evenly gap-3">
        <div>
          <img src='src\components\images\smartMirror.png' className="portfolio-image" />
        </div>
        <div>
          <img src='src\components\images\smartMirror.png' />
        </div>
        <div>
          <img src='src\components\images\smartMirror.png' />
        </div>
        <div>
          <img src='src\components\images\smartMirror.png' />
        </div>
        <div>
          <img src='src\components\images\smartMirror.png' />
        </div>
        <div>
          <img src='src\components\images\smartMirror.png' />
        </div>
    </div>
    </div>

  );
}
