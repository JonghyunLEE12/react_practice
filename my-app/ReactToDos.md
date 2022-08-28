```react-native
import React, { useState , useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])

  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    if (toDo === ""){
      return;
    }
    // [toDo, ...toDos] => 새로운 element를 array 에  push 하는 법 
    setToDos(currentArray => [toDo, ...currentArray])
    setToDo("")
  }
  return <div>
    <h1>My To Do ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
    <input onChange={onChange} value = {toDo} type="text" placeholder="Write your to do ..." />
    <button>Add To Do</button>
    </form>
    <hr/>
    {toDos.map((item,index) => <li key={index}>{item}</li>)}
  </div>
}
export default App;

```