import React, {FC} from "react";

export const Alert: FC<{ message: string }> = ({message}) => {
    console.log(message)
    return (
        <>
            <h5 style={{color: 'red'}}>{message}</h5>
        </>
    )
}
