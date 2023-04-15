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
	console.log(questions)
	console.log(options)

	return <CardQuestion />
}

export default CardQuestionContainer
