import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import FAQ from './screens/FAQ';
import Header from './screens/Header';
import Main from './screens/Main';
import Services from './screens/Services';



function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <FAQ/>
      <Contact/>

    </div>
  );
}

export default App;
