import {ADD_CARD, DELETE_CARD, EDIT_STATUS_CARD, INITIAL_REDUX_CARD, SAVE_EDIT_CARD,} from "../types";
import {IcardsRedux} from "../../interface";
import {CardsActionTypes} from "../actions";

interface ICardState {
    cards: IcardsRedux[]
}

const initialState: ICardState = {
    cards: [{id: '1', title: 'initial title', edit: true}]
}

export const cardsReducer = (state = initialState, action: CardsActionTypes): ICardState => {

    switch (action.type) {
        case ADD_CARD:
            let newCard = JSON.parse(JSON.stringify(action.payload))
            newCard.edit = false;
            return <ICardState>{...state, cards: [newCard].concat(state.cards)}

        case INITIAL_REDUX_CARD:
            return <ICardState>{...state, cards: action.payload}

        case DELETE_CARD:
            return <ICardState>{...state, cards: state.cards.filter(card => card.id !== action.payload)}

        case EDIT_STATUS_CARD:

            return <ICardState>{
                ...state,
                cards: state.cards.map(card => {
                    const {id} = JSON.parse(JSON.stringify(action.payload))

                    if (id === card.id) {
                        card.edit = !card.edit
                    } else {
                        card.edit = false
                    }
                    return card

                })
            }

        case SAVE_EDIT_CARD:
            return <ICardState>{
                ...state, cards: state.cards.map(card => {
                    const {id, newTitle} = JSON.parse(JSON.stringify(action.payload))

                    if (id === card.id) {
                        card.title = newTitle
                        card.edit = false
                    }

                    return card
                })
            }


        default:
            return state;
    }
}