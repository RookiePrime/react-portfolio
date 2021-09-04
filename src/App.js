import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import Project from './components/Project'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
