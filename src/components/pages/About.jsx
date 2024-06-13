const styles = {
  headerStyle: {
    color: 'white',
    height: 100,
    backgroundImage: "url('src/components/images/diagonalStripes.jpg')"
  },
  headingStyle: {
    fontSize: '50px',
    marginLeft: 25 
  },
}

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src="url('src/components/images/profileIconPic.jpg" style={styles.headerStyle}></img>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
