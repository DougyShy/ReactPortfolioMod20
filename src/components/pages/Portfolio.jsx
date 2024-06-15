const styles = {
  portfolioStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white',
    fontSize: '50px',
  },
  resumeLinkStyle: {
  top: '50%', left: '5%', width: '75%', height: '100%', display: 'flex', alignItems: 'left', justifyContent: 'left', opacity: 0.5 }
  
}

export default function Portfolio() {
  return (
    <div style={styles.portfolioStyle} className="px-5 py-3">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row p-3">
          <div className="col-sm p-3 container position-relative">
            <img src="src\components\images\smartMirror.png"></img>
            <div className="position-absolute" style={styles.resumeLinkStyle}>
              <h5>BILLY HOSSNESS</h5>
              
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
