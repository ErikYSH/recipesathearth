export default function ShowIngredients(props) {
    return (
        <>
            <div className="ingredient-container">
                <h1> Ingredients </h1>
                <div className="ingredient-subheading">
                    <h3>{props.ingredient_header_1}</h3>
                    <ul>
                        {props.ingredient_info_1.map((item) => {
                            return (
                                <div>
                                    <li>{item}</li>
                                </div>
                                )
                            }
                        )}
                    </ul>
                </div>
                <div className="ingredient-subheading-2">
                    <h3>{props.ingredient_header_2}</h3>
                    <ul>
                    {props.ingredient_info_2.map((item) => {
                            return (
                                <div>
                                    <li>{item}</li>
                                </div>
                                )
                            }
                        )}
                    </ul>
                </div>
            </div>
        
        </>
    )
}