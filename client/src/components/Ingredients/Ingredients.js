import React from 'react'
import "./index.css"



export default function Ingredients() {
  return (
    <div>
        <hr style={{color:"black"}}></hr>

            <div className="details-container">   
            
                <div className="ingredient-container">
                <h3>INGREDIENTS</h3>
        
            
                {/* Insert Map Function here for Backend Ingredient Entries */}
                </div>
                
                <div className="directions-container">
                <h3>DIRECTIONS</h3>
            
                {/* Insert Map Function here for Backend Direction Steps */}
                </div>
            
            </div>
            <div className="action-container">
                <a>Edit Recipe</a>
                <a>Delete Recipe</a>
            </div>
           
    </div>
  )
}