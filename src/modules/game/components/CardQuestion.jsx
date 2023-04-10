import { useState } from 'react'
import { useGame } from '../../../hooks/useGame'
import Button from '../../../components/button/Button'

const CardQuestion = ({ questions }) => {
	const [question, setQuestion] = useState()
	const { questionNumber, handleQuestionNumber } = useGame()
	// console.log(questions[0].respuesta_correcta)
	console.log(questionNumber)
	let options = []
	if (questions && !question) {
		setQuestion(questions[0]?.pregunta)
		options = questions[0]?.respuestas_incorrectas
		options.push(questions[0]?.respuesta_correcta)
	}
	console.log(options)
	const handleQuestion = i => {
		setQuestion(questions[i].pregunta)
		handleQuestionNumber()
	}
	console.log(question)

	return (
		<section>
			<p>{question}</p>
			<section>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</section>
			<Button f={() => handleQuestion(questionNumber)} text={'Siguiente'} />
		</section>
	)
}
export default CardQuestion
