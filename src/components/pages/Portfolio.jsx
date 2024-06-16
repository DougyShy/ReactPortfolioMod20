import React, {useState} from 'react';
import PortfolioBox from './PortfolioBox';

const styles = {
  portfolioStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white',
    fontSize: '50px',
  },
  resumeLinkStyle: {
    top: '50%', left: '5%', width: '75%', height: '100%', display: 'flex', alignItems: 'left', justifyContent: 'left', opacity: 1},
  resumeGitImg: {
    maxHeight: '0.4em',
    paddingLeft: 10,
    
  },
}

export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div style={styles.portfolioStyle} className="px-5 py-3">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row p-3">
          <div className="col-4 p-3">
            <PortfolioBox />
          </div>
          <div className="col-4 p-3">
            <PortfolioBox src={`src/components/images/smartMirror.png`} />
          </div>
          <div className="col-4 p-3">
            <PortfolioBox />
          </div>
          <div className="col-4 p-3">
            <PortfolioBox />
          </div>
          <div className="col-4 p-3">
            <PortfolioBox />
          </div>
          <div className="col-4 p-3">
            <PortfolioBox />
          </div>
        </div>    
      </div>
    </div>
  );
}
