import React, {FC, useEffect, useState} from "react";
import {Icards} from "../interface";
import {CardsList} from "../components/CardsList";

export const Cards: FC = () => {
    const [cards, setCards] = useState<Icards[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('cards') || '[]') as Icards[] // ЕСЛИ МАССИВ пуст то пусть парсит пустой массив
        setCards(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    const handlerAddCard = (title: string): void => {
        const newCards: Icards = {
            title: title,
            id: Date.now().toString(),
            size: 0,
            color: 'black',
            error: false
        }
        // setTodos([newTodo, ...todos])
        setCards(prev => [newCards, ...prev])
    }

    const handlerFontSizePlus = (id: string): void => {
        setCards(cards.map(card => {
                if (card.id === id) {
                    card.size++
                }
                return card
            })
        )
    }

    const handlerFontSizeMinus = (id: string): void => {
        setCards((prevState => {
            return prevState.map(card => {
                if (card.id === id) {
                    card.size--
                }
                console.log()
                return card
            })
        }))
    }

    const handlerFontColor = (id: string, color: string): void => {
        setCards(prevState => {
            return prevState.map(card => {
                if (card.id === id) {
                    card.color = color
                    card.error = false
                }
                return card
            })
        })
    }

    const handlerErrorMessage = (id: string): void => {
        setCards(prevState => {
            return prevState.map(card => {
                if(card.id === id) {
                    card.error = true
                    setTimeout(() => {
                        setCards(cards.map(card => {
                            if(card.id === id){
                                card.error = false
                            }
                            return card
                        }))
                    }, 3000)
                    console.log('settimeout')
                }
                return card
            })
        })
    }

    return (
        <div>
            <h1 className="center">Cards</h1>
            <CardsList
            cards={cards}
            onAddCard={handlerAddCard}
            onFontSizePlus={handlerFontSizePlus}
            onFontSizeMinus={handlerFontSizeMinus}
            onChangeFontColor={handlerFontColor}
            onErrorMessage={handlerErrorMessage}
            />

        </div>
    )
};

// const Wrapper = styled.div`
// align-items: center;
// justify-content: space-between;
// background-color: blue
// `;
