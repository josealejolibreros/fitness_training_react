import React from 'react'
import useFetch from '../Hooks/useFetch'
import Exercises from './Exercises'
import Loading from '../components/Loading'
import FatalError from './500'
import url from './config'

const ExercisesContainer = () => {
    const {data, loading, error} = useFetch(`${url}/exercises`)


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