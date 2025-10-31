export default function Tag({skill}) {

	return (
		<>
            <div className="tag ">
                <img 
                    src={`${import.meta.env.BASE_URL}img/tecnologias/${skill}.png`}
                    width="20" 
                    alt={`${skill}-image`} />
                <span className="tag-text"> {skill}</span> 
            </div>
		</>
	);
}
