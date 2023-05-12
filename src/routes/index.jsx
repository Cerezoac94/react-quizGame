import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Main from '../pages/Main'
import Game from '../pages/Game'
import Results from '../pages/Results'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>Error</h1>,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/game',
				element: <Game />,
			},
			{
				path: '/results',
				element: <Results />,
			},
		],
	},
])

export default router
