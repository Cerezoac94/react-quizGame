import { useEffect, useState } from 'react'
import { useGame } from '../../../hooks/useGame'
import Button from '../../../components/button/Button'
import { useContext } from 'react'
import { gameContext } from '../../../context/GameContext'

const CardQuestion = () => {
	const { handleHits, hits, options, questions } = useContext(gameContext)
	console.log('options del contexto en cardQuestion', options)
	console.log('questions del contexto en cardQuestion', questions)

	const { questionNumber, handleQuestionNumber, question } = useGame()
	// const [answer, setAnswer] = useState('')

	// console.log(questions[0].respuesta_correcta)
	// console.log(questionNumber)
	// let answer = ''
	// if (questions && !question) {
	// 	setQuestion(questions[0]?.pregunta)
	// 	setOptions([
	// 		...questions[0]?.respuestas_incorrectas,
	// 		questions[0]?.respuesta_correcta,
	// 	])
	// }
	// const handleRandomOptions = () => {
	// 	return Math.random() - 0.5
	// }

	// const handleQuestion = i => {
	// 	if (answer == questions[i - 1]?.respuesta_correcta) handleHits()
	// 	setQuestion(questions[i]?.pregunta)
	// 	handleQuestionNumber()
	// 	setOptions([
	// 		...questions[i]?.respuestas_incorrectas,
	// 		questions[i]?.respuesta_correcta,
	// 	])
	// }

	// const handleAnswer = o => {
	// 	answer = o
	// }

	// console.log(question)
	// const arrSort = options?.sort(handleRandomAnswers)
	// console.log(arrSort)

	const handleQuestion = () => {
		handleQuestionNumber()
	}

	// useEffect(() => {
	// 	if (!question) return
	// 	console.log(question)
	// 	console.log(options)
	// }, [question])

	// console.log(questionNumber)

	return (
		<section>
			<p></p>
			<section>
				<p onClick={() => handleAnswer(o)}></p>
			</section>
			<Button f={() => handleQuestion()} text={'Siguiente'} />
		</section>
	)
}
export default CardQuestion
