import React from 'react'
import FatalError from './500'
import ExerciseNew from './ExercisesNew'
class ExerciseNewContainer extends React.Component{

    state = {
        form: {
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        this.setState({
            loading: true
        })
        e.preventDefault()

        
        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises', config)

            let json = await res.json()

            this.setState({
                loading: false,

            })

            this.props.history.push('/exercise')
        }catch(error){

            this.setState({
                loading: false,
                
                error
            })
        }
        
    }

    render(){
        if(this.state.error){
            return <FatalError></FatalError>
        }
        return (
            <ExerciseNew form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit}></ExerciseNew>
            


        )
    }
}


export default ExerciseNewContainer