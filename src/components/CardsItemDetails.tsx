import React, {FC, useRef} from "react";
import {Icards} from "../interface";
import {Alert} from "./Alert";

interface ICardsItemDetailsProps extends Icards {
    onFontSizePlus: (id: string) => void,
    onFontSizeMinus: (id: string) => void,
    onChangeFontColor: (id: string, color: string) => void
    onErrorMessage: (id: string) => void,
}

const collorsArray = ['blue', 'red', 'green'];

export const CardsItemDetails: FC<ICardsItemDetailsProps> = ({
                                                                 title,
                                                                 id,
                                                                 size,
                                                                 color,
                                                                 error,
                                                                 onFontSizePlus,
                                                                 onFontSizeMinus,
                                                                 onErrorMessage,
                                                                 onChangeFontColor
                                                             }) => {
    const ref = useRef<HTMLInputElement>(null);

    const handlerChangeColor = (id: string, colorInput: string): void => {
        const findColor = collorsArray.includes(colorInput)
        if (findColor) {
            onChangeFontColor(id, ref.current!.value)
            ref.current!.value=''
        } else {
            onErrorMessage(id)
            ref.current!.value=''
        }
    }


    return (
        <>
            <div className='card'>
                <h4 className='title' style={{
                    color: color
                }}>
                    TITLE: {title} Counter: {size}
                </h4>
                <button
                    className='btn btn-primary'
                    onClick={() => onFontSizePlus(id)}
                >
                    +Counter
                </button>
                <button
                    onClick={() => onFontSizeMinus(id)}
                    className='btn btn-primary'
                >
                    -Counter
                </button>
                <input
                    type="text"
                    placeholder={`color: ${color}`}
                    ref={ref}
                />
                {error ? <Alert message={ref.current!.value.length ===0 ? 'ЗАПОЛНИТЕ ПОЛЕ COLOR' : 'ДАНОГО ЦВЕТА В СПИСКЕ НЕТ'} /> : null}
                <button onClick={() => handlerChangeColor(id, ref.current!.value)}> change color</button>
            </div>
        </>
    )
}