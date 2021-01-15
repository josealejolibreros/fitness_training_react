import React from 'react'
import useFetch from '../Hooks/useFetch'
import Exercises from './Exercises'
import Loading from '../components/Loading'
import FatalError from './500'


const ExercisesContainer = () => {
    const {data, loading, error} = useFetch('http://localhost:8000/api/exercises')


    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return <FatalError></FatalError>
    }
    return (
        <Exercises data={data}></Exercises>
    )

}

export default ExercisesContainer