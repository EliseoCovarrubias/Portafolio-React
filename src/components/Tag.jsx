import { useState } from "react";

export default function Tag({ skill }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`tag animate__animated ${
				isHovered ? "animate__heartBeat" : ""
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src={`${import.meta.env.BASE_URL}img/tecnologias/${skill}.png`}
				width="20"
				alt={`${skill}-image`}
			/>
			<span className="tag-text"> {skill}</span>
		</div>
	);
}
