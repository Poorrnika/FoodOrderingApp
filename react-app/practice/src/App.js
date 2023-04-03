import './App.css';
import React, {useEffect, useState, useRef} from "react"
import Form from './components/Form';
import TodoList from './components/TodoList';
import HeaderData from './components/HeaderData';

function App() {
  //useState data
  const [inputText, setInputtext] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter,setFilter] = useState("all")
  const [filteredData, setFilteredData] = useState([]);
  const [user,setUser] = useState("User");
  const didPromptRef= useRef(false);

  //UseEffect data
  useEffect(() => {filterHandler();},[todos,filter])
  useEffect(() => {
        if(didPromptRef.current === false)
        {
          didPromptRef.current = true;
          const userName = window.prompt("Please enter your name : ");
          setUser(userName);
          console.log(userName);
        }
    }, []);
  //Functions
  const filterHandler = () =>{
    switch(filter){
      case "completed":
        {
          setFilteredData(todos.filter((todo) => todo.completed === true));
          break;
        }
      case "uncompleted":
        {
          setFilteredData(todos.filter((todo) => todo.completed === false));
          break;
        }
      default:
        setFilteredData(todos);
        break;
    }
  }
  return (
    <div className="App">
      <HeaderData user={user}/>
      {/* <header>
            <h1>{user}'s Todo List</h1>
        </header> */}
      <Form inputText={inputText} setInputtext={setInputtext} todos={todos} setTodos = {setTodos} filter={filter} setFilter ={setFilter}/>
      <TodoList todos={todos} setTodos={setTodos} filteredData={filteredData}/>
    </div>
  );
};

export default App; 
