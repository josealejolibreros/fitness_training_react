import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
class ExerciseNew extends React.Component{

    state = {
        form: {
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        }
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state.form)
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>

                </div>
                <div className="col-sm">
                <ExerciseForm
                onChange = {this.handleChange}
                form = {this.state.form}
                handleSubmit = {this.handleSubmit}
            >

            </ExerciseForm>
                </div>
            </div>
            


        )
    }
}


export default ExerciseNew