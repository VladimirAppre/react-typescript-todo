import React, {useEffect, useState} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {Itodo} from "../interface";

declare let confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<Itodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Itodo[] // ЕСЛИ МАССИВ пуст то пусть парсит пустой массив
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: Itodo = {
            title: title,
            id: Date.now().toString(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: string) => {
        // console.log(typeof id, id)
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed //wtf если захаркодить  true работает
            }
            return todo
        }))
    }
    const removeHandler = (id: string) => {
        // const shouldRemove = window.confirm('Вы уверены что хотите удалить?')
        const shouldRemove = confirm('Вы уверены что хотите удалить?')

        if (shouldRemove) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id))
        }
    }

    return (<>
        <TodoForm onAdd={addHandler}/>
        <TodoList
            onRemove={removeHandler}
            onToggle={toggleHandler}
            todos={todos}
        />
    </>)
}