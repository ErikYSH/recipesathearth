import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default function Navbar() {
  return (
   <>
   <div className="logo">
             <Link className="link1 "to='/'>RECIPES AT HEARTH</Link>
             </div>
   <nav>
             <div className="manu-icon">
            <i className="fa fa-bars"></i>
             </div>
             <div className="nav-links"> 
             <Link  className="link" to='/Recipes'>my recipes</Link>
             <Link className="link" to='/AllRecipes'> all recipes</Link>
             </div>
             
             </nav>
   </>

  )
}
