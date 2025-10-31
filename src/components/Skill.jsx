export default function Skill({ skill }) {
	return (
		<>
			<div className="text-center p-2">
				<img
					src={`${import.meta.env.BASE_URL}img/tecnologias/${skill}.png`}
					alt={`skill-${skill}-image`}
					className="img-fluid"
					width={80}
				/>
				<span className="text-white">{ skill }</span>
			</div>
		</>
	);
}
