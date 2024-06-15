/* FOOTER.JSX */
const styles = {
  footerStyle: {
    backgroundColor: 'lightBlue', 
    color: 'white',
    fontSize: '50px'
  },
}

function Footer() {
  return (
    <div style={styles.footerStyle} className="px-5 py-3">
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;