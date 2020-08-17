import { combineReducers } from 'redux'
import {appReducer} from "./appReducer";
import {cardsReducer} from "./cardsReducer";


const rootReducer = combineReducers({
    app: appReducer,
    cards: cardsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }