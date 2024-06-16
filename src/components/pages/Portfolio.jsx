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
  return (
    <div style={styles.portfolioStyle} className="px-5 py-3">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row p-3">
          <div className="col-sm p-3 container position-relative">
            <img src="src\components\images\smartMirror.png"></img>
            <div className="position-absolute container" style={styles.resumeLinkStyle}>
              <h5>Magic Mirror</h5><img src='src\components\images\gitHubUnfocused.png' style={styles.resumeGitImg}/>     
            </div>
          </div>







          <div className="col-sm p-3">
            <img src="src\components\images\smartMirror.png"></img>
          </div>
          <div className="col-sm p-3">
            <img src="src\components\images\smartMirror.png"></img>
          </div>
          <div className="col-sm p-3">
            <img src="src\components\images\smartMirror.png"></img>
          </div>
          <div className="col-sm p-3">
            <img src="src\components\images\smartMirror.png"></img>
          </div>
          <div className="col-sm p-3">
            <img src="src\components\images\smartMirror.png"></img>
          </div>
          
      </div>    
    </div>
      
    </div>
  );
}
