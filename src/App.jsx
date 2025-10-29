import Project from "./components/Project";

function App() {
	return (
		<>
			<div id="site" className="container">
				<div className="row" >
					<h2 className="titulo text-white">Experiencia</h2>

					<Project
						key={2}
						title={"Musicmania"}
						image={"Musicmania.png"}
                        technologies={["HTML5", "CSS3", "JavaScript", "Bootstrap", "php", "MySQL", "Git"]}
						description={
							"Musicmania es una tienda online de venta de productos con sistema de sesiones, conectada a una base de datos y hosteada en un servidor web"
						}
						urlSitio={"https://musicmania-1677.000webhostapp.com/"}
						urlGithub={"https://github.com/EliseoCovarrubias/Musicmania"}
					/>

					<Project
						key={1}
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
						key={2}
						title={"Control de gastos"}
						image={"gastos.png"}
                        technologies={["HTML5", "CSS3", "JavaScript", "React", "Git"]}
						description={
							"Aplicación web desarrollada en React para realizar un control de gastos definiendo un presupuesto con guardado en local storage"
						}
						urlSitio={"https://control-gastos-1677.netlify.app/"}
						urlGithub={"https://github.com/EliseoEstrada/Citas-React"}
					/>   

					<Project
						key={3}
						title={"Cotizador de criptomonedas"}
						image={"criptos.png"}
                        technologies={["HTML5", "CSS3", "JavaScript", "React", "Git"]}
						description={
							"Aplicación web para cotizar criptomonedas a un tipo de moneda, el sitio consume una API para obtener los datos más recientes de las criptomonedas"
						}
						urlSitio={"https://cripto-react-1677.netlify.app/"}
						urlGithub={"https://github.com/EliseoCovarrubias/cripto-react"}
					/>                     

					<Project
						key={4}
						title={"GuitarLA"}
						image={"guitarla.png"}
                        technologies={["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Git"]}
						description={
							"Plataforma web que simula un carrito de compras, usando localStorage para guardar, editar y eliminar productos."
						}
						urlSitio={"https://guitarla-1677.netlify.app/"}
						urlGithub={"https://github.com/EliseoCovarrubias/GuitarLA"}
					/>               
                                     
				</div>
			</div>
		</>
	);
}

export default App;
