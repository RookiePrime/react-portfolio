import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {

  const pages = {
    about: <About />,
    portfolio: <Portfolio />,
    contact: <Contact />,
    resume: <Resume />
  }
  const [pageSelected, setPageSelected] = useState('about');

  return (
    <div className="App">
      <Header
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <Container className='Main'>
        {pages[pageSelected]}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
