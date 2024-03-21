import { useEffect } from 'react';
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import FAQ from './screens/FAQ';
import Footer from './screens/Footer';
import Header from './screens/Header';
import Main from './screens/Main';
import Services from './screens/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className=''>
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
