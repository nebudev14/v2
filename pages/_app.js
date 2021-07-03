import '../styles/globals.css'
import 'react-hackclub-webring/dist/index.css'
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <div className="nav"> 
          <Nav />
        </div>
        <div className="page">
          <Component {...pageProps} />
        </div>
      </>
    );
}

export default MyApp;
