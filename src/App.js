import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteTodo, deleteToDo } from "./utils/HandleApi";


function App() {
  const [text, setText] = useState('')
  const [toDo, setToDo] = useState([])
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (

   
    <div className="App">
      
     <div className="container">

      <h1>ToDo App</h1>

      <div className="top">
        <input 
        type="text" 
        placeholder="Add ToDos..."
        value={text}
        onChange={(e) => setText(e.target.value)}/>

{/* REMOVE THE SET TODO AND IT WORKS FINE  */}
         <div 
          className="add" 
          onClick= {isUpdating ? 
          () => updateToDo(toDoId, text, setText, setToDo, setIsUpdating) 
          : () => addToDo(text, setText, setToDoId)}>
          {isUpdating ? "Update" : "Add"}
        </div> 

      </div>

      <div className="list">

          {toDo.map((item) => <ToDo
           key={item._id} 
           text={item.text}
           updateMode = {() => updateMode(item._id, item.text)} 
           deleteToDo = {() => deleteToDo(item._id, setToDo)}/>)}


      </div>
     </div>
    </div>
  );
}

export default App;
