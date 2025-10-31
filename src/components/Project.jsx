import Tag from "./Tag";

export default function Project({
	title,
	image,
	technologies,
	description,
	urlSitio,
	urlGithub,
}) {

	return (
		<>
			<div className="card rounded border-0 p-1 my-2 project">
				<img
					src={`${import.meta.env.BASE_URL}img/portafolio/${image}`}
					className="card-img-top rounded"
					alt={`${title}-image`}
					width={100}
					height={200}
				/>
				<div className="card-body d-flex flex-column justify-content-between">
					<div>
						<h5 className="subtitle card-title">{title}</h5>
						<p className="card-text text-white">{description}</p>
					</div>

					<div className="my-2">
						<h6 className="text-white text-center">Tecnologías</h6>
						{technologies.map((technology, index) => (
							<Tag key={index} id={index + 1} skill={technology} />
						))}
					</div>

					<div className="d-flex justify-content-between align-items-center">
						<a
							className="btn btn-outline-success btn-sm"
							href={urlGithub}
							target="_blank"
							role="button"
						>
							<i
								className="fa-brands fa-github github-ico me-2"
								aria-hidden="true"
							></i>
							Ver repositorio
						</a>

						<a
							className="btn btn-outline-primary btn-sm"
							href={urlSitio}
							target="_blank"
							role="button"
						>
							<i className="fa-solid fa-globe web-ico me-2" aria-hidden="true"></i>
							Ver sitio
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
