
import './App.css';
import gorilaLogo from './images/Gorila-marron.png'
import {Button} from './componets/button.jsx'
import {Pantalla} from './componets/screen'
import {ClearButton} from './componets/clearButton'
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {

  const[input,setInput] = useState('')

  const agregarInput = val=>{
    setInput(input + val)
  }

  const calcularResultado = () =>{

    if (input){
      setInput(evaluate(input))
    } else{
      alert('Ingrese un valor para poder realizar los calculos ')
    }
    
  }

  return (
    <div className="App">
     

     <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Button manejarClic={agregarInput}>1</Button>
        <Button manejarClic={agregarInput}>2</Button>
        <Button manejarClic={agregarInput}>3</Button>
        <Button manejarClic={agregarInput}>+</Button>
      </div>
      <div className='fila'>
        <Button manejarClic={agregarInput}>4</Button>
        <Button manejarClic={agregarInput}>5</Button>
        <Button manejarClic={agregarInput}>6</Button>
        <Button manejarClic={agregarInput}>-</Button>
      </div>
        
      <div className='fila'>
        <Button manejarClic={agregarInput}>7</Button>
        <Button manejarClic={agregarInput}>8</Button>
        <Button manejarClic={agregarInput}>9</Button>
        <Button manejarClic={agregarInput}>*</Button>
      </div>
      <div className='fila'>
        <Button manejarClic={calcularResultado}>=</Button>
        <Button manejarClic={agregarInput}>0</Button>
        <Button manejarClic={agregarInput}>.</Button>
        <Button manejarClic={agregarInput}>/</Button>
      </div>
      <div className='fila'>
        <ClearButton manejarClear={() => setInput('')}>
          Clear
          </ClearButton>
      </div>


       </div>
    </div>
  );
}

export default App;
