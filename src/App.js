import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import FAQ from './screens/FAQ';
import Footer from './screens/Footer';
import Header from './screens/Header';
import Main from './screens/Main';
import Services from './screens/Services';



function App() {
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
