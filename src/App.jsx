import Project from "./components/Project";

function App() {
	return (
		<>
			<div id="site" className="container">
				<div className="row" >
					<h2 className="tex-center text-white">Experiencia</h2>

					<Project
						id={1}
						title={"Citas veterinaria"}
						image={"citas-react02.png"}
                        technologies={["HTML5", "CSS3", "JavaScript", "Tailwind", "React", "Git"]}
						description={
							"Aplicación web desarrollada en React donde se administra citas depacientes de una veterinaria, cuenta con responsive design y guardado de datos en local storage"
						}
						urlSitio={"https://citas-react-1677.netlify.app"}
						urlGithub={"https://github.com/EliseoEstrada/Citas-React"}
					/>

					<Project
						id={2}
						title={"Control de gastos"}
						image={"gastos.png"}
                        technologies={["HTML5", "CSS3", "JavaScript", "React", "Git"]}
						description={
							"Aplicación web desarrollada en React para realizar un control de gastos definiendo un presupuesto con guardado en local storage"
						}
						urlSitio={"https://control-gastos-1677.netlify.app/"}
						urlGithub={"https://github.com/EliseoEstrada/Citas-React"}
					/>   
                                     
				</div>
			</div>
		</>
	);
}

export default App;
