import { Component } from 'react';
import Calculator from './components/calculator';
import './css/App.css';
import Quotes from './components/quotes';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <Quotes />
      </div>
    );
  }
}

export default App;
