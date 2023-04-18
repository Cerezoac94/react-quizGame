import { useEffect, useState } from 'react'
import { useGame } from '../../../hooks/useGame'
import Button from '../../../components/button/Button'
import { useContext } from 'react'
import { gameContext } from '../../../context/GameContext'

const CardQuestion = () => {
	const { handleHits, options: op, questions, hits } = useContext(gameContext)
	const { questionNumber, question, options, handleDataQuestion } = useGame(
		handleHits,
		op,
		questions
	)
	let answer = ''
	console.log(hits)

	const handleAnswer = o => {
		answer = o
	}
	const handleQuestion = () => {
		handleDataQuestion(answer)
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
			<Button f={() => handleQuestion()} text={'Siguiente'} />
		</section>
	)
}
export default CardQuestion
