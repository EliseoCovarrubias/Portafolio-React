import Skill from "./Skill";

export default function Project({
	title,
	image,
	technologies,
	description,
	urlSitio,
	urlGithub,
}) {
	console.log(technologies);

	return (
		<>
			<div className="col-12 col-md-6">
				<div class="card rounded border-0 p-1 my-2">
					<img
						src={`${import.meta.env.BASE_URL}img/portafolio/${image}`}
						class="card-img-top rounded"
						alt={`${title}-image`}
                        width={100}
                        height={230}
					/>
					<div class="card-body d-flex flex-column justify-content-between">
						<div>
							<h5 class="subtitle card-title">{title}</h5>
							<p class="card-text text-white">{description}</p>
						</div>

						<div className="my-2">
							<h6 className="text-white text-center">Tecnologías</h6>
							{technologies.map((technology, index) => (
								<Skill key={index} id={index + 1} skill={technology} />
							))}
						</div>

						<div class="d-flex justify-content-between align-items-center">
							<a
								class="btn btn-outline-success btn-sm"
								href={urlGithub}
								target="_blank"
								role="button"
							>
								<i
									class="fa-brands fa-github github-ico me-2"
									aria-hidden="true"
								></i>
								Ver repositorio
							</a>

							<a
								class="btn btn-outline-primary btn-sm"
								href={urlSitio}
								target="_blank"
								role="button"
							>
								<i
									class="fa-solid fa-globe web-ico me-2"
									aria-hidden="true"
								></i>
								Ver sitio
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
