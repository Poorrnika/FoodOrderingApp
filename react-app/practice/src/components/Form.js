import React from'react';

const Form = ({inputText,setInputtext, todos, setTodos,setFilter}) => {
    function inputTexthandler(e){
        console.log(e.target.value);
        setInputtext(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 100}]);
        setInputtext("");
    };
    const statusHandler = (e) =>{
        setFilter(e.target.value);
    };
    return(
        <form>
            <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
            <button onClick ={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;