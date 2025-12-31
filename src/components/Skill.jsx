import { useState } from "react";

export default function Skill({ skill }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<div
				className={`text-center p-2 animate__animated ${
					isHovered ? "animate__heartBeat" : ""
				}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img
					src={`${import.meta.env.BASE_URL}img/tecnologias/${skill}.png`}
					alt={`skill-${skill}-image`}
					className="img-fluid d-block mx-auto"
					width={80}
				/>
				<span className="text-white">{skill}</span>
			</div>
		</>
	);
}
