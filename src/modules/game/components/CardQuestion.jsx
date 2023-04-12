import { useState } from 'react'
import { useGame } from '../../../hooks/useGame'
import Button from '../../../components/button/Button'
import { useContext } from 'react'
import { gameContext } from '../../../context/GameContext'

const CardQuestion = ({ questions }) => {
	const [question, setQuestion] = useState()
	const { questionNumber, handleQuestionNumber } = useGame()
	const [options, setOptions] = useState([])
	// const [answer, setAnswer] = useState('')
	const { handleHits, hits } = useContext(gameContext)
	console.log('🚀 ~ file: CardQuestion.jsx:13 ~ CardQuestion ~ hits:', hits)
	// console.log(questions[0].respuesta_correcta)
	// console.log(questionNumber)
	let answer = ''
	if (questions && !question) {
		setQuestion(questions[0]?.pregunta)
		setOptions([
			...questions[0]?.respuestas_incorrectas,
			questions[0]?.respuesta_correcta,
		])
	}
	const handleRandomOptions = () => {
		return Math.random() - 0.5
	}

	const handleQuestion = i => {
		if (answer == questions[i - 1]?.respuesta_correcta) handleHits()
		setQuestion(questions[i].pregunta)
		handleQuestionNumber()
		setOptions([
			...questions[i]?.respuestas_incorrectas,
			questions[i]?.respuesta_correcta,
		])
	}

	const handleAnswer = o => {
		answer = o
	}

	// console.log(question)
	// const arrSort = options?.sort(handleRandomAnswers)
	// console.log(arrSort)

	return (
		<section>
			<p>{question}</p>
			<section>
				{options?.sort(handleRandomOptions).map((o, i) => (
					<p onClick={() => handleAnswer(o)} key={i}>
						{o}
					</p>
				))}
			</section>
			<Button f={() => handleQuestion(questionNumber)} text={'Siguiente'} />
		</section>
	)
}
export default CardQuestion
