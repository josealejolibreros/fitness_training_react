import React from 'react'
import ExercisesList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import Button from '../components/Button'

const Exercises = ({data}) => (
    <React.Fragment>
                <Welcome
                    username="Jose"
                />
                <ExercisesList exercises = {data}>
                    
                </ExercisesList>
                <Button></Button>

                
                

    </React.Fragment>
)

export default Exercises