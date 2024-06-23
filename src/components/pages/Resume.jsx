const styles = {
  resumeStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white',
  },
  ulStyle: {
    listStyleType: 'none',
    fontSize: '40px',
  },
  liStyle: {
    listStyleType: 'disc',
    fontSize: '20px',
    color: 'DarkBlue',
  }
}

export default function Resume() {
  return (
    <div style={styles.resumeStyle} className="px-5 py-3">
      <h3>Download my resume <a href="src\components\utils\resume.txt" download>here</a></h3>
      <p>
        <ul style={styles.ulStyle}>
          <li>Frontend Proficiencies</li>
          <ul style={styles.liStyle}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>  
            <li>Backend Proficiencies</li>
          <ul style={styles.liStyle}>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
        </ul>
      </p>
    </div>
  );
}
