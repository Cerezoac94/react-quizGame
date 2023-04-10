import { useContext } from 'react'
import { menuContext } from '../../../context/MenuContext/'
import CardQuestion from './CardQuestion'
import useQuestions from '../../../hooks/useQuestions'

const CardQuestionContainer = () => {
	const { difficulty, totalQuestions } = useContext(menuContext)
	const questions = useQuestions(difficulty, totalQuestions)

	return <CardQuestion questions={questions[difficulty]} />
}

export default CardQuestionContainer
