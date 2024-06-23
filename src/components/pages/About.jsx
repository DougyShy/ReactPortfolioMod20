const styles = {
  headerStyle: {
    color: 'blue',
    height: 100,
    backgroundImage: "url('src/assets//diagonalStripes.jpg')"
  },
  aboutStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white', 
    padding: '10px',
  },
}

export default function About() {
  return (
    <div style={styles.aboutStyle} className="px-5 py-3">
      <h1>About Page</h1>
        <img src="./public/images/selfie.png" className="p-3" />
      <p className="text-secondary p-3">
      Hello!! My name is Clinton Scheible and I have just recently gotten back into IT. When I was younger I accomplished an Associates degree in computer programming so it has always been a passion of mine. Currently I am attending a UTSA bootcamp for full stack engineering. It is fun to get back into tech!! Some of my interests other than computer programming are bowling, fishing, major league and college sports, spending time with my family and playing fetch with my dog.
      </p>
    </div>
  );
}
