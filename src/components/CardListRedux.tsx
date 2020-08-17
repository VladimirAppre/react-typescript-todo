import React, {FC, useEffect, useState} from "react";
import {RootState} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {IcardsRedux} from "../interface";
import {deleteCardAction, editCardAction, initialAction, saveEditCardAction} from "../redux/actions";

declare let confirm: (question: string) => boolean;

export const CardListRedux: FC = () => {
    const dispatch = useDispatch()
    const selectCards = (state: RootState) => state.cards.cards
    const cards = useSelector(selectCards)
    const [editCardsState, setEditCardsState] = useState<string>('')

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('reduxCards') || '[]') as IcardsRedux[]
        dispatch(initialAction(saved))
    }, [])

    useEffect(() => {
        localStorage.setItem('reduxCards', JSON.stringify(cards))
    }, [cards])

    const removeHandler = (id: string, title: string): void => {
        const shouldRemove = confirm(`Вы уверены что хотите удалить __${title}__?`)

        if (shouldRemove) {
            dispatch(deleteCardAction(id))
        }
    }


    const editHandler = (data: IcardsRedux): void => {
        dispatch(editCardAction(data))
        setEditCardsState(data.title)
    }

    const saveHandler = (id: string, title: string): void => {
        dispatch(saveEditCardAction(id, title))
    }

    const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEditCardsState(event.target.value)
    }

    return (
        <>
            <h5>CArd list component</h5>
            {
                cards && cards.map(card => {
                        const {id, title, edit} = card
                        return (
                            <div className='card' key={id}>
                                {
                                    edit ? <div><input type="text" value={editCardsState}
                                                       onChange={(event) => onchangeHandler(event)} key={`input-${id}`}/>
                                    </div> : <h4 className='center'>{title}</h4>
                                }
                                <button className='btn btn-success' onClick={() => removeHandler(id, title)}>delete</button>
                                {!edit ? <button className='btn btn-success'
                                                 onClick={() => editHandler({id, title, edit})}>edit</button> :
                                    <button className='btn btn-success'
                                            onClick={() => saveHandler(id, editCardsState)}> Save</button>}

                            </div>
                        )
                    }
                )}
        </>
    )
}