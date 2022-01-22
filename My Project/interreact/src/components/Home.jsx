import React,{useState} from 'react';

function Home() {

    const [input, setInput] = useState("");

    const [state, setState] = useState([])

    const AddInputs = (e) => {
        setInput( e.target.value)
    }

    const handleClick = (e) => {
        setState([...state, input])
    }
  return (
      <div>
        <h1>Todo List !!</h1>
        <input type="text" 
        placeholder='Enter List'
         onChange={AddInputs}
        
         />
         <button onClick={handleClick}>ADD</button>
         {
             state.map(ele=>(
                  <li>{ele}</li>
             ))
         }
      </div>
  )
}

export default Home;

