import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
        // ino bara in Gozashtim k vaghti dare state haro mide baddesh value meghade Ghabli tosh nabashe
    };

    // Status
    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    //
    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                placeholder="Search..."
                className="todo-input"
            />
            <button
                onClick={submitHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
