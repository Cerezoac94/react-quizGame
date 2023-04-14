import { useState, useEffect } from 'react'
import { preg } from '../utils/constants'

const useQuestions = (difficulty, totalQuestions) => {
	const [dataQuestions, setQuestions] = useState()
	const data = preg.find(elem => Object.keys(elem)[0] == difficulty)
	const handleRandomData = () => {
		return Math.random() - 0.5
	}

	useEffect(
		() =>
			handleSetQuestions(
				data[difficulty].sort(handleRandomData).slice(0, totalQuestions)
			),
		[]
	)

	const handleSetQuestions = dt => {
		setQuestions(dt)
	}

	return dataQuestions
}
export default useQuestions
