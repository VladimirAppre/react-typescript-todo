import React, {useState, useRef} from "react";
interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {// описывает входящие свойства в компонент
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null);

    // const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement >) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                // onChange={onchangeHandler}
                // value={title}
                onKeyPress={keyPressHandler}
                ref={ref}
                type="text"
                id='title'
                placeholder='Введите названия дела'/>
            <label htmlFor="title" className='active'>
                Введите названия дела
            </label>
        </div>
    )
}