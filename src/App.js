import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import 'semantic-ui-css/semantic.min.css'
import ProductList from './components/ProductList';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Container>
      <ProductList></ProductList>
      </Container>
    </div>
  );
}

export default App;
