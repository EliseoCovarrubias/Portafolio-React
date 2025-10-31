export default function FilterNavbar({ selectedCategory, setSelectedCategory }) {
	return (
		<div className="text-center my-3">
			<button
				className={`btn btn-sm mx-1 ${
					selectedCategory === "All" ? "btn-primary" : "btn-outline-primary"
				}`}
				onClick={() => setSelectedCategory("All")}
			>
				Todos
			</button>
			<button
				className={`btn btn-sm mx-1 ${
					selectedCategory === "Frontend" ? "btn-primary" : "btn-outline-primary"
				}`}
				onClick={() => setSelectedCategory("Frontend")}
			>
				Frontend
			</button>
			<button
				className={`btn btn-sm mx-1 ${
					selectedCategory === "Backend" ? "btn-primary" : "btn-outline-primary"
				}`}
				onClick={() => setSelectedCategory("Backend")}
			>
				Backend
			</button>
			<button
				className={`btn btn-sm mx-1 ${
					selectedCategory === "Movil" ? "btn-primary" : "btn-outline-primary"
				}`}
				onClick={() => setSelectedCategory("Movil")}
			>
				Movil
			</button>
		</div>
	);
}
