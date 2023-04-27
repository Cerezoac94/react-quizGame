const NotesMenu = () => {
	return (
		<section className="flex flex-col  justify-around w-[520px] h-[200px] text-3xl gap-5">
			<h1>
				Tendrás tres comodines por ronda, puedes utilizarlos una vez cada uno
			</h1>
			<section className="flex flex-col gap-5 text-left">
				<section className="flex flex-row gap-5">
				<img src='https://thumbs.dreamstime.com/b/pregunta-y-respuesta-33782900.jpg' alt="Comodin que hace referencia al primer comodin descartar dos respuestas" className="w-[40px] rounded-2xl" />
				<h3>Descarta 2 respuestas incorrectas</h3>
				</section>
				<section className="flex flex-row gap-5">
				<img src="https://thumbs.dreamstime.com/b/los-segundos-icono-del-cron%C3%B3metro-de-los-minutos-reloj-y-reloj-contador-de-tiempo-s%C3%ADmbolo-de-la-cuenta-descendiente-ui-web-79808311.jpg" alt="Comodin que hace referencia al segundo comodin para aumentar 20 segundos al contador" 
				className="w-[40px] rounded-2xl"/>
				<h3>Suma 20 segundos al reloj</h3>
				</section>
				<section className="flex flex-row gap-5">
				<img src="https://odontosmartapp.com/wp-content/uploads/2021/08/icono-cambiar-pregunta.png" alt="Comodin que hace referencia al tercer comodin que es cambiar de pregunta" 
				className="w-[40px] rounded-2xl"
				/>				
				<h3>Cambia la pregunta por otra</h3>
				</section>
			</section>
		</section>
	)
}
export default NotesMenu
