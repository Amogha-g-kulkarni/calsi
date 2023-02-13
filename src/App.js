import logo from './logo.svg';
import{useReducer, useRef, useState} from "react"
import './App.css';

var val1=0
var val2=0


function App() {
  var [result,updateResult]=useState(0)
  const text2=useRef("");
  const [data1, setData1] = useState("");
  const text=useRef("");
  var operator="+"
  function getElem(){
    text.current.valueOf()
    console.log(text.current.value)
    val1=text.current.value
  }
  function getElem2(){
    text2.current.valueOf()
    console.log(text2.current.value)
    val2=text2.current.value
  }
  function clicked1(){
    operator="+"
    console.log(operator)
  }
  function clicked2(){
    operator="-"
    console.log(operator)
  }
  function clicked3(){
    operator="*"
    console.log(operator)
  }
  function clicked4(){
    
    operator="/"
    console.log(operator)
  }
  function calsi(){
    if(operator=="+"){
      
      updateResult(parseInt(val1)+parseInt(val2))
      var con=result
      console.log(con)
    }
    if(operator=="-"){
      
      updateResult(parseInt(val1)-parseInt(val2))
      var con=result
      console.log(con)
    }
    if(operator=="*"){
      
      updateResult(parseInt(val1)*parseInt(val2))
      var con=result
      console.log(con)
    }
    if(operator=="/"){
      
      updateResult(parseInt(val1)/parseInt(val2))
      var con=result
      console.log(con)
    }
  }
  return (
    <div className='main'>
      <input className='input'  type={Number} ref={text} />
      <button className='button' onClick={getElem} >Set</button><br/>
      <button className='button1'  onClick={clicked1}>+</button>
      <button className='button1'  onClick={clicked2}>-</button>
      <button className='button1'  onClick={clicked3}>*</button>
      <button className='button1'  onClick={clicked4}>/</button><br/>
      <input className='input' type={Number} ref={text2}/>
      <button className='button'  onClick={getElem2}>Set</button><br/>
      <button className='button'  onClick={calsi}>Result</button>
      <p className='input'>{result}</p>
      {/* <input type="Number" value2={0} onChange={fun2()}></input><br/>
      <select name="opr" id="opr">
          <option value="+" selected>+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/" >/</option>
      </select><br/>
      <p id="result"></p> */}
      {/* <button className='button'  >1</button>
      <button className='button'  >2</button>
      <button  className='button'  >3</button><br/>
      
      <button className='button'  >4</button>
      <button className='button' >5</button>
      <button className='button' >6</button><br/>
   
      <button className='button' >7</button>
      <button className='button'  >8</button>
      <button className='button' >9</button><br/>
     
     
      <button className='button'  >0</button> */}
     
    </div>
  );
}

export default App;
