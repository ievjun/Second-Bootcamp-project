import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faWater, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import TaskDetails from './TaskDetails';
import Axios from 'axios';

export default function Todo(props) {
    const [isCompleted, setIscompleted] = useState(props.todo.isCompleted);
    const [isOpen, setIsOpen] = useState(false)



    let title = props.todo.title
    if (isCompleted) {
        title = <del>{props.todo.title}</del>
    }

    let taskDetails = null;
    let detaulsButtonContent = <FontAwesomeIcon icon={faAngleDoubleDown} />

    if (isOpen) {
        taskDetails = <TaskDetails id={props.todo._id} refreshTasks={props.refreshTasks} />
        detaulsButtonContent = <FontAwesomeIcon icon={faAngleDoubleUp} />
    }

    return (
        <li className="list-group-item">
            <div className="form-check">
               
                <label className="form-check-label" htmlFor={'task-checkbox-' + props.todo._id}><h3>{title}</h3></label>
                <button 
                    className="btn btn-sm btn-primary btn-info float-right"
                    onClick={() => {setIsOpen(!isOpen)}}
                >
                    {detaulsButtonContent}
                </button>
            </div>
            {taskDetails}

        </li>
    )
}
