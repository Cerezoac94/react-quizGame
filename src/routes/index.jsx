import { createBrowserRouter } from 'react-router-dom'
import Main from '../views/Main'
import Game from '../views/Game'
import App from '../App'

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
		],
	},
])

export default router
