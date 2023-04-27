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
		<section className='h-full flex flex-col items-center justify-around'>
			<p className='w-[800px] h-28 flex flex-col border-2 border-white rounded-xl text-3xl font-semibold'>{`Pregunta ${
				questionNumber + 1
			}:  ${question}`}</p>
			<section className='w-[720px] h-[200px] flex flex-wrap justify-center gap-3'>
				{options.map((option, i) => (
					<p
						className=' w-[330px] h-[85px] text-3xl py-3 px-4 border border-white rounded-xl hover:border-blue-700 hover:border-2'
						key={i}
						onClick={() => handleAnswer(option)}>
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
