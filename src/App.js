import './App.css';
import About from './screens/About';
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

    </div>
  );
}

export default App;
