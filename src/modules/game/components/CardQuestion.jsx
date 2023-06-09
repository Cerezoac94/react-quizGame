import { useState } from 'react'
import { useGame } from '../../../hooks/useGame'
import Button from '../../../components/button/Button'
import { useContext } from 'react'
import { gameContext } from '../../../context/GameContext'
import { useNavigate } from 'react-router-dom'
import { useActive } from '../../../hooks/useActive'

const CardQuestion = () => {
	const { handleHits, options: op, questions } = useContext(gameContext)
	const { questionNumber, question, options, handleDataQuestion } = useGame(
		handleHits,
		op,
		questions
	)
	const { active, handleActive } = useActive()
	const navigate = useNavigate()
	const [answer, setAnswer] = useState('')

	let respuesta = ''

	const handleAnswer = o => {
		respuesta = o
		setAnswer(o)
	}
	const handleQuestion = () => {
		handleDataQuestion(answer)
	}
	const handleResults = () => {
		handleQuestion()
		navigate('/results')
	}

	return (
		<section className='h-full flex flex-col items-center justify-around'>
			<p className='w-full max-w-[800px] h-28 flex flex-col border-2 border-white rounded-xl md:text-3xl text-xl font-semibold px-2'>{`Pregunta ${
				questionNumber + 1
			}:  ${question}`}</p>
			<section className='w-11/12 max-w-[720px] min-h-[200px] flex flex-wrap justify-center content-center gap-3'>
				{options.map((option, i) => (
					<p
						className={` flex w-5/12 min-h-[70px] h-auto md:text-3xl text-xl  py-3 px-4 border  rounded-xl hover:border-blue-700 hover:border-2 ${
							active === i ? 'border-blue-700 border-2' : 'border-white'
						}`}
						key={i}
						onClick={() => {
							handleActive(i)
							handleAnswer(option)
						}}>
						{option}
					</p>
				))}
			</section>
			{questionNumber + 1 == questions?.length ? (
				<Button f={() => handleResults()} text={'Terminar'} />
			) : (
				<Button
					f={() => {
						handleQuestion()
						handleActive('')
					}}
					text={'Siguiente'}
				/>
			)}
		</section>
	)
}
export default CardQuestion
