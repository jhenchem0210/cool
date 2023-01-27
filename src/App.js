import './App.css';
import logo from './logogopil.png';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const firstName = 'Juan';
  const lastName = 'Dela Cruz';
  const age = '25';
  
  const arr =[1,2,3,4,5]



  return (
    <>
    <Header />
    <main>
    <h1>Hello World! {firstName} {lastName} {age}</h1>
    <h2>Multiples of 5</h2>
    {arr.map((num => <p> {num * 5}</p>))}
    <img src={logo} className="App-logo" alt="logo" />
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I want to explore and Learn more of REACT!
        </a>
    </main>
    <Footer />
    </>
  );
 }

 export default App;