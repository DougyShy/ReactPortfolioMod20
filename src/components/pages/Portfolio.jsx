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
        <div className="d-flex flex-row flex-wrap align-items-center p-3 justify-content-around">
          <div className="image-container">
            <img className="portfolio-image" src="src\components\images\password.png" />
            <div className="overlay">
              <div className="text text-decoration-none"><a href="https://dougyshy.github.io/PasswordGenerator/" target="_blank" rel="noreferrer noopener">Password Generator</a></div>
               <img className="github-img" />
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\components\images\logoMaker.png" />
            <div className="overlay">
            <div className="text text-decoration-none"><a href="https://www.youtube.com/watch?v=QmciF-lAsyY" target="_blank" rel="noreferrer noopener">Simple Logo Maker</a></div>
               <img className="github-img" />
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\components\images\smartMirror.png" />
            <div className="overlay">
              <div className="text">Your Text Here</div>
               <img className="github-img" />
            </div>  
          </div>
        </div>

        <div className="d-flex flex-row flex-wrap align-items-center p-3 justify-content-around">
          <div className="image-container">
            <img className="portfolio-image" src="src\components\images\smartMirror.png" />
            <div className="overlay">
              <div className="text">Your Text Here</div>
               <img className="github-img" />
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\components\images\smartMirror.png" />
            <div className="overlay">
              <div className="text">Your Text Here</div>
               <img className="github-img" />
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\components\images\smartMirror.png" />
            <div className="overlay">
              <div className="text">Your Text Here</div>
               <img className="github-img" />
            </div>  
          </div>
        </div>
    </div>

  );
}
