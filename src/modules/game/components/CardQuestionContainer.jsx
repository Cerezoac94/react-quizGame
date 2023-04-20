import { useContext, useEffect } from 'react'
import { menuContext } from '../../../context/MenuContext/'
import CardQuestion from './CardQuestion'
import useQuestions from '../../../hooks/useQuestions'
import { gameContext } from '../../../context/GameContext'

const CardQuestionContainer = () => {
	const { difficulty, totalQuestions } = useContext(menuContext)
	const { handleQuestions } = useContext(gameContext)
	const { questions, options, answers } = useQuestions(
		difficulty,
		totalQuestions
	)
	console.log(difficulty)
	console.log(totalQuestions)
	useEffect(() => {
		if (!questions) return
		handleQuestions(questions, options, answers)
	}, [questions])

	return <CardQuestion />
}

export default CardQuestionContainer
