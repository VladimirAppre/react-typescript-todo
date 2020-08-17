import React, {FunctionComponent} from "react";
import {NavLink} from 'react-router-dom'



export const NavBar: FunctionComponent = (props) => (
    <nav>
        <div className="nav-wrapper #3f51b5 indigo px1">
            <NavLink to="/" className="brand-logo">React TypeScript</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">Список дел</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Информация</NavLink>
                </li>
                <li>
                    <NavLink to="/cards">Карточки</NavLink>
                </li>
                <li>
                    <NavLink to="/redux-thunk/">Redux & Thunk</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
