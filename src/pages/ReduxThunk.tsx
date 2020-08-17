import React, {FC} from 'react'
import {TodoFormRedux} from "../components/TodoFormRedux";
import {CardListRedux} from "../components/CardListRedux";

export const ReduxThunk: FC = () => {
    return (
        <>
            <h3>Redux Thunk Page</h3>
            <TodoFormRedux/>
            <CardListRedux />
        </>
    )
}

