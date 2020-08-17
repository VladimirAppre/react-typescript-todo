import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NavBar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {Cards} from './pages/Cards'
import {ReduxThunk} from "./pages/ReduxThunk";


const App: React.FunctionComponent = () => {


    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
                <Switch>
                    <Route path='/' component={TodosPage} exact/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/cards' exact component={Cards} />
                    <Route path='/redux-thunk/' exact component={ReduxThunk} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
