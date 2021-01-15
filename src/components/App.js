import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import NotFound from '../pages/400'
import ExerciseNewContainer from '../pages/ExercisesNewContainer'


const App = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={ExercisesContainer}/>
                <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App