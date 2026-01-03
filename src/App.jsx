import { useState } from "react";
import {
	skillsFrontendList,
	skillsBackendList,
	skillsDevList,
	skillsToolList,
	projectsList,
} from "./data/data";
import FilterNavbar from "./components/FilterNavbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	return (
		<>
			<div id="site">
				<nav className="navbar d-flex justify-content-evenly">
					<a className="p-2" href="#site">
						Inicio
					</a>
					<a className="p-2" href="#Experiencia">
						Experiencia
					</a>
					<a className="p-2" href="#Proyectos">
						Proyectos
					</a>
					<a className="p-2" href="#Tecnologias">
						Tecnologías
					</a>
				</nav>

				<div className="container">
					{/* Sección Contacto */}
					<div id="Contacto" className="row mb-3">
						<div className="col-12 text-center my-3">
							<h1 className="text-white ">
								Eliseo Guadalupe Estrada Covarrubias
							</h1>
							<h5 className="subtitle typewriter">Fullstack Developer</h5>
						</div>

						<div className="col-12 text-center my-3">
							<a
								className="btn btn-outline-primary btn-sm mx-2 mb-2"
								href="mailto:eliseo.estrada97@hotmail.com"
								role="button"
								target="_blank"
							>
								<i className="fa-solid fa-envelope" title="Correo"></i> Correo
							</a>

							<a
								className="btn btn-outline-primary btn-sm mx-2 mb-2"
								href="https://github.com/EliseoCovarrubias"
								role="button"
								target="_blank"
							>
								<i className="fa-brands fa-github" title="Github"></i> GitHub
							</a>

							<a
								className="btn btn-outline-primary btn-sm mx-2 mb-2"
								href="https://www.linkedin.com/in/eliseo-guadalupe-estrada-covarrubias-390675186/"
								role="button"
								target="_blank"
							>
								<i className="fa-brands fa-linkedin" title="Linkedin"></i>{" "}
								LinkedIn
							</a>

							<a
								className="btn btn-outline-primary btn-sm mx-2 mb-2"
								href="https://wa.me/8118542101"
								role="button"
								target="_blank"
							>
								<i className="fa-brands fa-whatsapp" title="Github"></i>{" "}
								Whatsapp
							</a>
							<a
								className="btn btn-outline-primary btn-sm mx-2 mb-2"
								href={`${import.meta.env.BASE_URL}cv/cv.pdf`}
								role="button"
								target="_blank"
							>
								<i className="fa-solid fa-file-pdf" title="CV"></i> Mi CV
							</a>
						</div>

						<div className="col-12">
							<h2 className="titulo text-white my-3">Acerca de mi</h2>
							<p className="text-white">
								Profesional con amplia experiencia en desarrollo web,
								actualmente trabajando en DXC Technology en busca de nuevas
								oportunidades laborales para aplicar y expandir mis
								conocimientos en la industria de tecnologías y contribuir al
								crecimiento de una empresa innovadora.{" "}
							</p>
						</div>
					</div>

					{/* Sección Experiencia */}
					<div id="Experiencia" className="row mb-3">
						<div className="col-12">
							<h2 className="titulo text-white my-2">Experiencia</h2>
						</div>
						<div className="col-12 experiencia">
							<h5 className="subtitle d-inline">
								Analyst III Infrastructure Services -{" "}
							</h5>
							<span className="text-warning ">
								DXC Technology (para Triara)
							</span>
							<p className="text-white">Septiembre 2023 - Actualmente</p>
							<ul className="text-white">
								<li>
									Asignado al cliente Triara, encargado del diseño, desarrollo y
									mantenimiento del portal interno de la empresa.
								</li>
								<li>
									Implementación de soluciones web utilizando HTML, CSS,
									Bootstrap, JavaScript, AJAX y PHP, mejorando la usabilidad y
									el rendimiento de las aplicaciones internas.
								</li>
								<li>
									Diseño y administración de bases de datos en SQL Server,
									optimizando consultas y asegurando la integridad de los datos.
								</li>
								<li>
									Gestión y resolución de tickets en la plataforma Service
									Manager, reduciendo los tiempos de atención de incidencias.
								</li>
								<li>
									Participación activa en reuniones con equipos de producción y
									negocio, colaborando en la definición e implementación de
									nuevas funcionalidades alineadas con los objetivos del
									cliente.
								</li>
							</ul>
						</div>
					</div>

					{/* Sección Proyectos */}
					<div id="Proyectos" className="row mb-3">
						<div className="col-12">
							<h2 className="titulo text-white my-3">Proyectos</h2>
						</div>

						<div className="col-12">
							<FilterNavbar
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
							/>
						</div>

						<div className="col-12">
							<div className="row">
								{projectsList
									.filter((project) =>
										selectedCategory === "All"
											? true
											: project.categories.includes(selectedCategory)
									)
									.map((project, index) => (
										<div key={index} className="col-12 col-md-6">
											<Project {...project} />
										</div>
									))}
							</div>
						</div>
					</div>

					{/* Sección Tecnologías */}
					<div id="Tecnologias" className="row mb-3">
						<div className="col-12">
							<h2 className="titulo text-white my-3">Tecnologías</h2>
							<p className="text-white">
								En mi viaje por el mundo del desarrollo web, he cultivado
								experiencia y habilidades en una variedad de tecnologías. Mi
								stack tecnólogico incluye:
							</p>
						</div>
						<div className="col-12">
							<div className="row">
								<div className="col-12 col-md-6 px-4 mb-4">
									<h5 className="subtitle text-center">Frontend</h5>
									<div className="row">
										{skillsFrontendList.map((skill, index) => (
											<div key={index} className="col-4 p-0 ">
												<Skill {...skill} />
											</div>
										))}
									</div>
								</div>
								<div className="col-12 col-md-6 px-4 mb-4">
									<h5 className="subtitle text-center">Backend</h5>
									<div className="row">
										{skillsBackendList.map((skill, index) => (
											<div key={index} className="col-4 p-0 ">
												<Skill {...skill} />
											</div>
										))}
									</div>
								</div>

								<div className="col-12 col-md-6 px-4 mb-4">
									<h5 className="subtitle text-center">Desarrollo</h5>
									<div className="row">
										{skillsDevList.map((skill, index) => (
											<div key={index} className="col-4 p-0 ">
												<Skill {...skill} />
											</div>
										))}
									</div>
								</div>

								<div className="col-12 col-md-6 px-4 mb-4">
									<h5 className="subtitle text-center">Herramientas</h5>
									<div className="row">
										{skillsToolList.map((skill, index) => (
											<div key={index} className="col-4 p-0">
												<Skill {...skill} />
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
