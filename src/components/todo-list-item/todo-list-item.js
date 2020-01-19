import React, {useContext, useState} from "react";

import './todo-list-item.css';
import Context from "../../context";

function TodoListItem({label, id}){
    const [done, setDone] = useState(false);
    const [important, setImportant] = useState(false);
    const {onDelete} = useContext(Context);

    function onLabelClick() {
        setDone((done) => !done);
    }


    function onMarkImportant() {
        setImportant((important) => !important);
    }

    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' important'
    }

    return (
        <span className={classNames}>
                <span
                    className='todo-list-item-label'
                    onClick ={onLabelClick}
                >
                    {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onMarkImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDelete(id)}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
    );
}

export default TodoListItem