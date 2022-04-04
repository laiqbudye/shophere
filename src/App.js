import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1> Welcome to ShopHere </h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
