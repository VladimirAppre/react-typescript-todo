import React from "react";
import {Itodo} from "../interface";

type TodoListProps = {
    todos: Itodo[]
    onToggle(id: string): void //эквивалентные записи
    onRemove: (id: string) => void //эквивалентные записи
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if(todos.length === 0) {
        return <p className='center'>Пока дел нет</p>
    }

    const removeHandler = (event: React.MouseEvent, id: string) => {
        event.preventDefault()

        onRemove(id)
    }
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                onChange={onToggle.bind(null, todo.id)} // эквивалентно onClick remove  ниже
                                type="checkbox"
                                checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i
                                onClick={(event) => removeHandler(event, todo.id)}
                                className='material-icons red-text'
                            >
                                delete
                            </i>

                        </label>
                    </li>
                )
            })}
        </ul>
    )
}