import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
