import React, {useState, useEffect} from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import List from './components/List';

function App() {
  const [inputText, setInputText] = useState("");
  const [Todos, setTodos] = useState([]);
  const [Status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage(); 
  },[])

  useEffect(() => {
    saveLocalStorage();
    filterHandler(); 
  },[Todos, Status])

  const filterHandler = () => {
    switch(Status) {
      case "completed":
        setfilteredTodos(Todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(Todos.filter((item) => item.completed === false));
        break;
      default:
        setfilteredTodos(Todos);
        break;
    }
  }

  const saveLocalStorage = () => {
    localStorage.setItem('Todos', JSON.stringify(Todos))
  }
  const getLocalStorage = () => {
    if(localStorage.getItem('Todos') === null) {
      localStorage.setItem('Todos', JSON.stringify([]))
    } else {
      let getLocal = JSON.parse(localStorage.getItem('Todos', JSON.stringify(Todos)))
      setTodos(getLocal);
    }
  }

  return (
    <div className="App">
      <header>
          <h1>My To-Do List!</h1>
      </header>
      <Form Todos={Todos} setTodos={setTodos} 
      inputText = {inputText} setInputText = {setInputText} 
      setStatus = {setStatus} 
      filteredTodos = {filteredTodos} setfilteredTodos = {setfilteredTodos} />
      <List Todos={Todos} setTodos={setTodos} filteredTodos = {filteredTodos} />
    </div>
  );
}

export default App;
