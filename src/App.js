import './App.css';
import Component from './components/Component';
import Contador from './components/Contador';
import Form from './components/Form';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <h2>Bem vindo ao React</h2> 
      <Component /> 
      <Form />
      <Lista />
      <Contador />
      <Evento />
    </div>
  );
}

export default App;
