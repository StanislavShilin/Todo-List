import React, {useState} from "react";

import './addTodo.css';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('');
        }
    }

    return (
        <form className="form-control addTodo" onSubmit={submitHandler}>
            <input type="text" placeholder="new todo" value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;