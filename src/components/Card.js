import annonces from "../annonces.json";


function Card() {
    return (
        <div className='card_style'>
            {annonces.map((annonces) => (
                <div className='card_div' key={annonces.id}>
                    
                        <img src={annonces.cover} alt={annonces.title}></img>
                        <p className='card_title'>{annonces.title}</p>
                    
                </div>

            ))}
        </div>
    )
}
export default Card