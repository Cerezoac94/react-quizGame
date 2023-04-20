import { useEffect, useState } from 'react'
import { useGame } from '../../../hooks/useGame'
import Button from '../../../components/button/Button'
import { useContext } from 'react'
import { gameContext } from '../../../context/GameContext'
import { useNavigate } from 'react-router-dom'

const CardQuestion = () => {
	const { handleHits, options: op, questions } = useContext(gameContext)
	const { questionNumber, question, options, handleDataQuestion } = useGame(
		handleHits,
		op,
		questions
	)
	const navigate = useNavigate()
	let answer = ''

	const handleAnswer = o => {
		answer = o
	}
	const handleQuestion = () => {
		handleDataQuestion(answer)
	}
	const handleResults = () => {
		navigate('/results')
	}

	return (
		<section>
			<p>{`${questionNumber + 1}. ${question}`}</p>
			<section>
				{options.map((option, i) => (
					<p key={i} onClick={() => handleAnswer(option)}>
						{option}
					</p>
				))}
			</section>
			{questionNumber + 1 == questions?.length ? (
				<Button f={() => handleResults()} text={'Terminar'} />
			) : (
				<Button f={() => handleQuestion()} text={'Siguiente'} />
			)}
		</section>
	)
}
export default CardQuestion
