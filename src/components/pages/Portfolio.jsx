import 'src/styles/Portfolio.css';

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
            <img className="portfolio-image" src="/src/assets/password.png" />
            <div className="overlay">
              <div className="text text-decoration-none"><a href="https://dougyshy.github.io/messageGenerator/" target="_blank" rel="noreferrer noopener">Password Generator</a></div>
                <a href="https://github.com/DougyShy/messageGenerator" target="_blank" rel="noreferrer noopener"><img className="github-img" /></a>
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src/assets/logoMaker.png" />
            <div className="overlay">
            <div className="text text-decoration-none"><a href="https://www.youtube.com/watch?v=QmciF-lAsyY" target="_blank" rel="noreferrer noopener">Simple Logo Maker</a></div>
              <a href="https://github.com/DougyShy/SVG-Logo-Maker" target="_blank" rel="noreferrer noopener"><img className="github-img" /></a>
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\assets\\scheduler.png" />
            <div className="overlay">
            <div className="text text-decoration-none"><a href="https://dougyshy.github.io/WorkScheduler/" target="_blank" rel="noreferrer noopener">Work Day Scheduler</a></div>
              <a href="https://github.com/DougyShy/WorkScheduler" target="_blank" rel="noreferrer noopener"><img className="github-img" /></a>
            </div>  
          </div>
        </div>

        <div className="d-flex flex-row flex-wrap align-items-center p-3 justify-content-around">
          <div className="image-container">
            <img className="portfolio-image" src="src\assets\\employeeTracker.png" />
            <div className="overlay">
            <div className="text text-decoration-none"><a href="https://www.loom.com/share/4fb9c0aac8864ccf9423b740994e1a15?sid=4680feae-3dd1-40ed-b771-93bd7d6b47db" target="_blank" rel="noreferrer noopener">Employee Tracker</a></div>
            <a href="https://github.com/DougyShy/Employee-Tracker" target="_blank" rel="noreferrer noopener"><img className="github-img" /></a>
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\assets\\ecommerce.png" />
            <div className="overlay">
            <div className="text text-decoration-none"><a href="https://www.loom.com/share/72b74d7f57a54059bb68ab0cac5cb03e" target="_blank" rel="noreferrer noopener">E-Commerce Back End</a></div>
               <a href="https://github.com/DougyShy/E-commerce-Back-End" target="_blank" rel="noreferrer noopener"><img className="github-img" /></a>
            </div>  
          </div>
          <div className="image-container">
            <img className="portfolio-image" src="src\assets\\social.png" />
            <div className="overlay">
            <div className="text text-decoration-none"><a href="https://www.loom.com/share/5b8b545cfae6475285796944be0c0891" target="_blank" rel="noreferrer noopener">Social Network API</a></div>
               <a href="https://github.com/DougyShy/Social-Network-API " target="_blank" rel="noreferrer noopener"><img className="github-img"/></a>
            </div>  
          </div>
        </div>
    </div>

  );
}
