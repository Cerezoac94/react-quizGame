import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { menuContext } from '../../context/MenuContext'
import { gameContext } from '../../context/GameContext'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'

const ResultsContainer = () => {
	const { difficulty, totalQuestions, resetGame } = useContext(menuContext)
	const { hits, resetHits } = useContext(gameContext)
	const navigate = useNavigate()

	const handlePlayAgain = () => {
		// handlePage(true)
		resetGame()
		resetHits()
		navigate('/')
	}

	return (
		<section className='flex flex-col text-center justify-around items-center w-11/12 h-5/6 bg-slate-600'>
			<Title text='Resultados' />

			<table className='flex flex-col  justify-center w-[520px] h-[200px] text-3xl gap-5'>
				<tbody className='h-full flex flex-col align-center justify-between'>
					<tr className='flex flex-row justify-around '>
						<td className='w-[150px] text-left'>Dificultad</td>
						<td className='w-[150px] text-right'>{difficulty}</td>
					</tr>
					<tr className='flex flex-row justify-around'>
						<td className='w-[150px] text-left'>Total preguntas</td>
						<td className='w-[150px] text-right'>{totalQuestions}</td>
					</tr>
					<tr className='flex flex-row justify-around'>
						<td className='w-[150px] text-left'>Aciertos</td>
						<td className='w-[150px] text-right'>{hits}</td>
					</tr>
					<tr className='flex flex-row justify-around'>
						<td className='w-[150px] text-left'>Comodines usados</td>
						<td className='w-[150px] text-right'>pendiente</td>
					</tr>
					<tr className='flex flex-row justify-around text-center'>
						<td className='w-[150px] text-left'>Puntaje</td>
						<td className='w-[150px] text-right'>
							{Math.trunc((hits / totalQuestions) * 100)}
						</td>
					</tr>
				</tbody>
			</table>
			<Button text='Volver a jugar' f={handlePlayAgain} />
		</section>
	)
}

export default ResultsContainer
