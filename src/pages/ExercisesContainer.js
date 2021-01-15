import React, { useState, useEffect } from 'react'

import Exercises from './Exercises'

import Loading from '../components/Loading'
import FatalError from './500'


const ExercisesContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchExercise = async () => {
            try {
                let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json()
                setData(data)
                setLoading(false)
                
            }catch (error) {
                setLoading(false)
                setError(error)

            }
        }
        fetchExercise()

    }, [])


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