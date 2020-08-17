import {
    ADD_CARD,
    DELETE_CARD,
    EDIT_STATUS_CARD,
    HIDE_ALERT,
    INITIAL_REDUX_CARD,
    SAVE_EDIT_CARD,
    SHOW_ALERT
} from "./types";
import {IcardsRedux} from "../interface";


export interface IAddCardAction {
    type: typeof ADD_CARD,
    payload: { title: string, id: string }
}

export const addCardAction = (data: { title: string, id: string }): IAddCardAction => (
    {
        type: ADD_CARD,
        payload: {title: data.title, id: data.id}
    }
)


export interface IinitialAction {
    type: typeof INITIAL_REDUX_CARD,
    payload: IcardsRedux[]
}

export const initialAction = (cards: IcardsRedux[]): IinitialAction => (
    {
        type: INITIAL_REDUX_CARD,
        payload: cards
    }
)


export interface IdeleteCardAction {
    type: typeof DELETE_CARD,
    payload: string
}

export const deleteCardAction = (id: string): IdeleteCardAction => (
    {
        type: DELETE_CARD,
        payload: id
    }
)


interface IeditCardAction {
    type: typeof EDIT_STATUS_CARD,
    payload: IcardsRedux
}

export const editCardAction = (data: IcardsRedux): IeditCardAction => (
    {
        type: EDIT_STATUS_CARD,
        payload: data
    }
)

interface IsaveEditCardAction {
    type: typeof SAVE_EDIT_CARD,
    payload: {id: string, newTitle: string}
}

export const saveEditCardAction = (id: string, newTitle: string): IsaveEditCardAction => (
    {
        type: SAVE_EDIT_CARD,
        payload: {id, newTitle}
    }
)


//
//
// interface IsetLoadingAction {
//      type: typeof SET_LOADING,
//     payload: {id: string}
// }
//
// export const setLoadingAction = ({id}): IsetLoadingAction => ({
//     type: SET_LOADING,
//     payload: {id}
// })
//
//
// interface IunsetLoadingAction {
//     type: typeof UNSET_LOADING,
//     payload: {id: string}
// }
//
// export const unsetLoadingAction = ({id}): IunsetLoadingAction => ({
//     type: UNSET_LOADING,
//     payload: {id}
// })


interface IshowAlertAction {
    type: typeof SHOW_ALERT,
    payload: { message: string }
}

export const showAlertAction = (data: { message: string }): IshowAlertAction => (
    {
        type: SHOW_ALERT,
        payload: {message: data.message}
    })


interface IhideAlertAction {
    type: typeof HIDE_ALERT,
    payload: { message: null }
}

export const hideAlertAction = () => ({
    type: HIDE_ALERT,
    payload: {message: null}
})

export type CardsActionTypes = IAddCardAction | IeditCardAction |   IinitialAction  | IdeleteCardAction | IsaveEditCardAction

export type AppActionTypes = IshowAlertAction | IhideAlertAction
// | IsetLoadingAction | IunsetLoadingAction  | IhideAlertAction

