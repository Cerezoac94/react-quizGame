const preg = [
	{
		'Fácil': [
			{
				'id': '1f',
				'pregunta': '¿Cuál es el río más largo del mundo?',
				'respuestas_incorrectas': ['Amazonas', 'Danubio'],
				'respuesta_correcta': 'Nilo',
			},
			{
				'id': '2f',
				'pregunta': '¿Quién pintó la Mona Lisa?',
				'respuestas_incorrectas': ['Pablo Picasso', 'Salvador Dalí'],
				'respuesta_correcta': 'Leonardo da Vinci',
			},
		],
	},
	{
		'Medio': [
			{
				'id': '1m',
				'pregunta': '¿Qué artista pintó la famosa obra "La noche estrellada"?',
				'respuestas_incorrectas': [
					'Rembrandt',
					'Claude Monet',
					'Pablo Picasso',
				],
				'respuesta_correcta': 'Vincent van Gogh',
			},
			{
				'pregunta': '¿Quién escribió la novela "1984"?',
				'respuestas_incorrectas': [
					'Ernest Hemingway',
					'F. Scott Fitzgerald',
					'J.D. Salinger',
				],
				'respuesta_correcta': 'George Orwell',
			},
		],
	},
	{
		'Difícil': [
			{
				'id': '1d',
				'pregunta':
					'¿Qué astrofísico británico es conocido por su trabajo en el campo de la relatividad y por su libro "Una breve historia del tiempo"?',
				'respuestas_incorrectas': [
					'Brian Cox',
					'Neil deGrasse Tyson',
					'Lawrence Krauss',
				],
				'respuesta_correcta': 'Stephen Hawking',
			},
			{
				'id': '2d',
				'pregunta':
					'¿Cuál de las siguientes películas fue dirigida por Stanley Kubrick?',
				'respuestas_incorrectas': [
					'Apocalypse Now',
					'Taxi Driver',
					'The Godfather',
				],
				'respuesta_correcta': 'The Shining',
			},
			{
				'id': '3d',
				'pregunta':
					'¿Cuál es el nombre del proceso que convierte la glucosa en ácido pirúvico en la célula?',
				'respuestas_incorrectas': [
					'Fosforilación oxidativa',
					'Ciclo de Krebs',
					'Respiración celular',
				],
				'respuesta_correcta': 'Glucólisis',
			},
			{
				// **
				'id': '4d',
				'pregunta': '¿Quién fue el primer emperador romano?',
				'respuestas_incorrectas': ['Julio César', 'Tiberio', 'Claudio'],
				'respuesta_correcta': 'Augusto',
			},
			{
				'id': '5d',
				'pregunta':
					'¿Cuál es el símbolo químico del elemento conocido como "mercurio"?',
				'respuestas_incorrectas': ['Me', 'Mu', 'Hy'],
				'respuesta_correcta': 'Hg',
			},
			{
				'id': '6d',
				'pregunta': '¿En qué año se fundó la compañía Microsoft?',
				'respuestas_incorrectas': ['1970', '1980', '1985'],
				'respuesta_correcta': '1975',
			},
			{
				'id': '7d',
				'pregunta': '¿Quién fue el primer astronauta en viajar al espacio?',
				'respuestas_incorrectas': [
					'Alan Shepard',
					'Neil Armstrong',
					'John Glenn',
				],
				'respuesta_correcta': 'Yuri Gagarin',
			},
			{
				'id': '8d',
				'pregunta': '¿Cuál es el río más largo del mundo?',
				'respuestas_incorrectas': [
					'Río Amazonas',
					'Río Misisipi',
					'Río Yangtze',
				],
				'respuesta_correcta': 'Río Nilo',
			},
			{
				'id': '9d',
				'pregunta': '¿Cuál es la fórmula química del dióxido de carbono?',
				'respuestas_incorrectas': ['CO', 'C2O', 'C2O2'],
				'respuesta_correcta': 'CO2',
			},
			{
				'id': '10d',
				'pregunta':
					'¿Qué compositor clásico es conocido como el "Padre de la sinfonía"?',
				'respuestas_incorrectas': [
					'Wolfgang Amadeus Mozart',
					'Ludwig van Beethoven',
					'Antonio Vivaldi',
				],
				'respuesta_correcta': 'Franz Joseph Haydn',
			},
			{
				'id': '11d',
				'pregunta': '¿Quién escribió el libro "El gran Gatsby"?',
				'respuestas_incorrectas': [
					'Ernest Hemingway',
					'William Faulkner',
					'John Steinbeck',
				],
				'respuesta_correcta': 'F. Scott Fitzgerald',
			},
			{
				'id': '12d',
				'pregunta': '¿Cuál es el quinto planeta en el sistema solar?',
				'respuestas_incorrectas': ['Venus', 'Saturno', 'Urano'],
				'respuesta_correcta': 'Júpiter',
			},
			{
				'id': '13d',
				'pregunta': '¿Quién fue el primer presidente de los Estados Unidos?',
				'respuestas_incorrectas': [
					'Thomas Jefferson',
					'John Adams',
					'Benjamin Franklin',
				],
				'respuesta_correcta': 'George Washington',
			},
			{
				'id': '14d',
				'pregunta': '¿Quién pintó el cuadro "La persistencia de la memoria"?',
				'respuestas_incorrectas': [
					'Pablo Picasso',
					'Vincent van Gogh',
					'Claude Monet',
				],
				'respuesta_correcta': 'Salvador Dalí',
			},
			{
				'id': '15d',
				'pregunta': '¿En qué país se encuentra la Torre Eiffel?',
				'respuestas_incorrectas': ['España', 'Alemania', 'Italia'],
				'respuesta_correcta': 'Francia',
			},
			{
				'id': '16d',
				'pregunta': '¿Quién escribió la novela "Cien años de soledad"?',
				'respuestas_incorrectas': [
					'Isabel Allende',
					'Julio Cortázar',
					'Mario Vargas Llosa',
				],
				'respuesta_correcta': 'Gabriel García Márquez',
			},
			{
				'id': '17d',
				'pregunta': '¿Cuál es el elemento más abundante en el universo?',
				'respuestas_incorrectas': ['Helio', 'Carbono', 'Oxígeno'],
				'respuesta_correcta': 'Hidrógeno',
			},
			{
				'id': '18d',
				'pregunta':
					'¿Cuál es la obra de William Shakespeare en la que aparece el personaje Hamlet?',
				'respuestas_incorrectas': ['Romeo y Julieta', 'Macbeth', 'Otelo'],
				'respuesta_correcta': 'Hamlet',
			},
			{
				'id': '19d',
				'pregunta': '¿Quién fue el líder de la Revolución comunista en China?',
				'respuestas_incorrectas': [
					'Sun Yat-sen',
					'Deng Xiaoping',
					'Xi Jinping',
				],
				'respuesta_correcta': 'Mao Zedong',
			},
			{
				'id': '20d',
				'pregunta':
					'¿En qué país se encuentra la ciudad de Petra, una ciudad histórica y arqueológica famosa por sus edificios tallados en roca?',
				'respuestas_incorrectas': ['Egipto', 'Líbano', 'Irán'],
				'respuesta_correcta': 'Jordania',
			},
		],
	},
	{
		'Extra difícil': [
			{
				'id': '1ed',
				'pregunta': '¿Cuál de estos filósofos no era un sofista?',
				'respuestas_incorrectas': ['Protágoras', 'Gorgias', 'Pródico'],
				'respuesta_correcta': 'Platón',
			},
			{
				'id': '2ed',
				'pregunta':
					'¿Cuál de las siguientes obras no fue escrita por Franz Kafka?',
				'respuestas_incorrectas': [
					'El proceso',
					'La metamorfosis',
					'El castillo',
				],
				'respuesta_correcta': 'Así habló Zaratustra',
			},
			{
				'id': '3ed',
				'pregunta': '¿Cuál de las siguientes teorías no es una teoría física?',
				'respuestas_incorrectas': [
					'Teoría de la relatividad general',
					'Teoría de cuerdas',
					'Teoría del todo',
				],
				'respuesta_correcta': 'Teoría de la evolución',
			},
			{
				'id': '4ed',
				'pregunta': '¿Cuál es el mar más salado del mundo?',
				'respuestas_incorrectas': [
					'Mar mediterraneo',
					'Mar arábigo',
					'Mar blanco',
				],
				'respuesta_correcta': 'Mar muerto',
			},
			{
				'id': '5ed',
				'pregunta': '¿Quién escribió la obra de teatro "Esperando a Godot"?',
				'respuestas_incorrectas': [
					'Jean-Paul Sartre',
					'Albert Camus',
					'Tennessee Williams',
				],
				'respuesta_correcta': 'Samuel Beckett',
			},
			{
				'id': '6ed',
				'pregunta': '¿En qué año se fundó la Universidad de Harvard?',
				'respuestas_incorrectas': ['1665', '1701', '1724'],
				'respuesta_correcta': '1636',
			},
			{
				'id': '7ed',
				'pregunta':
					'¿Qué artista pintó la obra "La creación de Adán" en la Capilla Sixtina del Vaticano?',
				'respuestas_incorrectas': [
					'Leonardo da Vinci',
					'Rafael',
					'Sandro Botticelli',
				],
				'respuesta_correcta': 'Miguel Ángel',
			},
			{
				'id': '8ed',
				'pregunta': '¿Cuál es el autor de la novela "Crimen y castigo"?',
				'respuestas_incorrectas': [
					'Leo Tolstoy',
					'Anton Chekhov',
					'Ivan Turgenev',
				],
				'respuesta_correcta': 'Fyodor Dostoyevsky',
			},
			{
				'id': '9ed',
				'pregunta':
					'¿Qué científico propuso la teoría de la selección natural en 1859?',
				'respuestas_incorrectas': [
					'Alfred Russel Wallace',
					'Gregor Mendel',
					'Thomas Henry Huxley',
				],
				'respuesta_correcta': 'Charles Darwin',
			},
			{
				'id': '10ed',
				'pregunta': '¿En qué año se fundó la ciudad de Roma?',
				'respuestas_incorrectas': ['509 a.C.', '264 a.C.', '146 a.C.'],
				'respuesta_correcta': '753 a.C.',
			},
			{
				'id': '11ed',
				'pregunta': '¿Cuál de estos escritores no es del "Grupo del 27"?',
				'respuestas_incorrectas': [
					'Jorge Guillén',
					'Federico García Lorca',
					'Rafael Alberti',
				],
				'respuesta_correcta': 'Antonio Machado',
			},
			{
				'id': '12ed',
				'pregunta': '¿Qué rey de Francia fue conocido como "El Sol"?',
				'respuestas_incorrectas': ['Luis XV', 'Luis XVI', 'Carlos IX'],
				'respuesta_correcta': 'Luis XIV',
			},
			{
				'id': '13ed',
				'pregunta':
					'¿Cuál es el nombre del primer satélite lanzado al espacio?',
				'respuestas_incorrectas': ['Explorer 1', 'Vostok 1', 'Telstar 1'],
				'respuesta_correcta': 'Sputnik 1',
			},
			{
				'id': '14ed',
				'pregunta': '¿Cuál es la capital de Burkina Faso?',
				'respuestas_incorrectas': ['Bamako', 'Lomé', 'Accra'],
				'respuesta_correcta': 'Ouagadougou',
			},
			{
				'id': '15ed',
				'pregunta': '¿Quién escribió la novela "La Náusea"?',
				'respuestas_incorrectas': [
					'Albert Camus',
					'Samuel Beckett',
					'Simone de Beauvoir',
				],
				'respuesta_correcta': 'Jean-Paul Sartre',
			},
			{
				'id': '16ed',
				'pregunta':
					'¿Cuál es el nombre del químico sueco que dio su nombre a un elemento químico?',
				'respuestas_incorrectas': [
					'Johannes Rydberg',
					'Svante Arrhenius',
					'Carl Wilhelm Scheele',
				],
				'respuesta_correcta': 'Jöns Jacob Berzelius',
			},
			{
				'id': '17ed',
				'pregunta': '¿Qué es el efecto Meissner?',
				'respuestas_incorrectas': [
					'La dispersión de la luz en un medio turbio',
					'La interferencia entre dos ondas sonoras de diferentes frecuencias',
					'La descomposición de la luz en sus diferentes colores por un prisma',
				],
				'respuesta_correcta':
					'La expulsión del campo magnético de un superconductor',
			},
			{
				'id': '18ed',
				'pregunta':
					'¿Cuál es la masa aproximada del bosón de Higgs en GeV/c^2?',
				'respuestas_incorrectas': ['172.5', '246', '311'],
				'respuesta_correcta': '125',
			},
			{
				'id': '19ed',
				'pregunta': '¿Cuál es la ecuación de Schrödinger?',
				'respuestas_incorrectas': ['E = mc^2', 'F = ma', 'h/λ = p'],
				'respuesta_correcta': 'iħ∂Ψ/∂t = HΨ',
			},
			{
				'id': '20ed',
				'pregunta': '¿Qué es la constante de estructura fina?',
				'respuestas_incorrectas': [
					'Una constante que describe la interacción fuerte entre los quarks',
					'Una constante que describe la tasa de decaimiento radiactivo',
					'Una constante que describe la interacción débil entre partículas',
				],
				'respuesta_correcta':
					'Una constante que describe la interacción electromagnética entre partículas cargadas',
			},
			{
				'id': '21ed',
				'pregunta': '¿Quién propuso la teoría de la relatividad general?',
				'respuestas_incorrectas': [
					'Isaac Newton',
					'Werner Heisenberg',
					'Niels Bohr',
				],
				'respuesta_correcta': 'Albert Einstein',
			},
		],
	},
];
