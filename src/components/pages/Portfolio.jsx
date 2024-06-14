const styles = {
  portfolioStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white',
    fontSize: '50px'
  },
  headingStyle: {
    fontSize: '50px',
    marginLeft: 25 
  },
}

export default function Portfolio() {
  return (
    <div style={styles.portfolioStyle} className="px-5 py-3">
      <h1>Portfolio Page</h1>
      
    </div>
  );
}
