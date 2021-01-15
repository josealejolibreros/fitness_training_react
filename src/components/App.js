import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import NotFound from '../pages/400'
import ExerciseNewContainer from '../pages/ExercisesNewContainer'
import Example from '../pages/ExampleHook'


const App = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={ExercisesContainer}/>
                <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
                <Route exact path="/example" component={Example} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App