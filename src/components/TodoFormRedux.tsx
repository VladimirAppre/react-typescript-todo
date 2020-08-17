import React, {FC, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {addCardAction, hideAlertAction, showAlertAction} from "../redux/actions";
import {RootState} from "../store";
import {IinitialState} from "../redux/ reducers/appReducer";

export const TodoFormRedux: FC = () => {
    const dispatch = useDispatch()
    const [cardTitle, setCardTitle] = useState<string>('');

    const selectAppAlert = (state: RootState) => state.app
    const alertMessage = useSelector<RootState, IinitialState>(selectAppAlert)


    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCardTitle(event.target.value)
    }

    const handlerSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (cardTitle.trim().length < 3) {
            dispatch(showAlertAction({message: 'Минимальная длина строки минимум 3 символа'}))
            setTimeout(() => {
                dispatch(hideAlertAction())
            }, 3000)
        } else {
            dispatch(addCardAction({title: cardTitle, id: Date.now().toString()}))
            setCardTitle('')
        }
    }

    return (
        <>
            todoForm-redux component
            {alertMessage.alert && <p style={{color: 'red'}}>{alertMessage.alert}</p>}
            <form onSubmit={event => handlerSubmitForm(event)} className='input-field mt2'>
                <input
                    onChange={event => inputChangeHandler(event)}
                    value={cardTitle}
                    type="text"
                    id='redux-card-title'
                    placeholder='карточка'/>
                <label htmlFor="title" className='active'>
                    Введите названия карточки
                </label>
            </form>
        </>)
}