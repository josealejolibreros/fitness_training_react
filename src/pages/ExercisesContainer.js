import React from 'react'

import Exercises from './Exercises'
import Button from '../components/Button'
import Loading from '../components/Loading'
import FatalError from './500'
class ExercisesContainer extends React.Component {

    state = {
            data : [],
            loading: true,
            error: null,
        }

    async componentDidMount(){
        await this.fetchExercise()
    }

    fetchExercise = async () =>{
        try{
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            this.setState({
                data,
                loading: false
            })
        }catch(error){
            this.setState({
                
                loading: false,
                error
            })

        }
    }

    render() {
        if(this.state.loading){
            return <Loading></Loading>
        }
        if(this.state.error){
            return <FatalError></FatalError>
        }
        return (
            <Exercises data={this.state.data}></Exercises>
            


        )

    }
}


export default ExercisesContainer