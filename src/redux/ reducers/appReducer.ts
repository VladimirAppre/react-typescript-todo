import {HIDE_ALERT, SET_LOADING, SHOW_ALERT, UNSET_LOADING} from "../types";
import {AppActionTypes} from "../actions";


export interface IinitialState  {
    loading: boolean,
    alert: null | string
}

const initialState = {
    loading: false,
    alert: null,
}

export const appReducer = (state = initialState, action: AppActionTypes): IinitialState => {

    switch (action.type) {
        case SET_LOADING:
            return <IinitialState>{...state, loading: true}
        case UNSET_LOADING:
            return <IinitialState>{...state, loading: false}
        case SHOW_ALERT:
            return <IinitialState>{...state, alert: action.payload.message}
        case HIDE_ALERT:
            return <IinitialState>{...state, alert: null}
        default: return state;
    }
}