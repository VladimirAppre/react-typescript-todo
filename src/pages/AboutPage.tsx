import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
    <>
        <h1>Страница информации</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus earum excepturi laborum molestias officia quas reiciendis reprehenderit soluta voluptate!</p>
        <button
            onClick={() => history.push('/')}
            className='btn'
        > обратно к списку дел
        </button>
    </>
)}