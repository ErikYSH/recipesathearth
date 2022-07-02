import './index.css'

export default function ShowRecipeHeader(props) {
    return (
        <div className="header_info">
            <div className='recipe_header_container'>
            <div className="recipe_header_img">
                <img src={props.recipe_header_img} alt="header_img"/>
                {/* {props.recipe_header_img} */}
            </div>
            <div className="recipe_header_info">
                <h1>{props.recipe_header_name}</h1>
                <h2>{props.recipe_header_category}</h2>
                <hr />
                <h3>Prep Time: {props.recipe_header_prep_time}</h3>
                <h3>Portion: {props.recipe_header_portion}</h3>
            </div>
            </div>
            <hr />
        </div>
     
    )
}