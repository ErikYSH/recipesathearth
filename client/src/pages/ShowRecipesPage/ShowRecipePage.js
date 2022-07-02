import ShowIngredients from "../../components/ShowIngredients/ShowIngredients";
import ShowRecipeHeader from "../../components/ShowRecipeHeader/ShowRecipeHeader";


export default function ShowRecipePage() {
    const exampleRecipe = {
        name:"HOMEMADE POP TART",
        category: "Breakfast",
        prep_time: "45 mins",
        portion: 9,
        ingredient_header_1:"FOR THE PASTRY",
        ingredient_info_1: ["1 1/2 cups ALL PURPOSE FLOUR",
        "1/2 cups UNSALTED BUTTER, COLD & CUBED",
        "1 tsp SUGAR",
        "1 pinch SALT",
        '1 COLD EGG, BEATEN',
        "1 tablespoon COLD WATER",
        "8 tablespoons JAMS OR PRESERVES",
        "2 tablespoons MILK OR BEATEN EGG, FOR PASTY WASH",],
        ingredient_header_2:"FOR THE TOPPING",
        ingredient_info_2: ["1 1/2 cups POWDERED SUGAR","2 tsp HOT WATER OR MILK"],
        
    } 


    return (
        <>
            <ShowRecipeHeader 
            recipe_header_img = "Picture"
            recipe_header_name = {exampleRecipe.name}
            recipe_header_category = {exampleRecipe.category}
            recipe_header_prep_time = {exampleRecipe.prep_time}
            recipe_header_portion = {exampleRecipe.portion}
            />
            <ShowIngredients 
            ingredient_header_1 = {exampleRecipe.ingredient_header_1}
            ingredient_info_1 = {exampleRecipe.ingredient_info_1}
            ingredient_header_2 = {exampleRecipe.ingredient_header_2}
            ingredient_info_2 = {exampleRecipe.ingredient_info_2}
            />
        </>
        )
} 