import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const pages = [
    <About />,
    <Portfolio />
  ];
  const [pageSelected, setPageSelected] = useState(pages[0]);

  return (
    <div className="App">
      <Header
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
      <Container className='Main'>
        {pageSelected}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
