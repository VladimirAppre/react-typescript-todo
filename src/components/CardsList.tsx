import React, {FC, useRef} from "react";
import {Icards} from "../interface";
import {CardsItemDetails} from "./CardsItemDetails";
import {Simulate} from "react-dom/test-utils";

type CardsListProps = {
    cards: Icards[]
    onAddCard: (title: string) => void
    onFontSizePlus: (id: string) => void
    onFontSizeMinus: (id: string) => void
    onChangeFontColor: (id: string, color: string) => void
    onErrorMessage: (id: string) => void
}

export const CardsList: FC<CardsListProps> = ({
                                                  cards,
                                                  onAddCard,
                                                  onChangeFontColor,
                                                  onFontSizeMinus,
                                                  onErrorMessage,
                                                  onFontSizePlus
                                              }) => {

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            if(ref.current!.value.trim()) {
            onAddCard(ref.current!.value)
            ref.current!.value = ''
            }
        }
    }

    return (
        <>
            CardsList
            <div className="center">
                <div className='input-field mt2'>
                    <input
                        onKeyPress={keyPressHandler}
                        ref={ref}
                        type="text"
                        id='card-title'
                        placeholder='карточка'/>
                    <label htmlFor="title" className='active'>
                        Введите названия карточки
                    </label>
                </div>
                <div className="cards-container">
                    {
                     cards.map(card => {
                            const {id, size, color, title, error} = card

                            return(

                                    <div className="card" key={id}>
                                        <CardsItemDetails
                                            onFontSizePlus={onFontSizePlus}
                                            onFontSizeMinus={onFontSizeMinus}
                                            onChangeFontColor={onChangeFontColor}
                                            onErrorMessage={onErrorMessage}
                                            title={title}
                                            id={id}
                                            size={size}
                                            color={color}
                                            error={error}
                                            />
                                    </div>

                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}