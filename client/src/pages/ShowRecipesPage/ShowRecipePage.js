import ShowIngredients from "../../components/ShowIngredients/ShowIngredients";


export default function ShowRecipePage() {
    const exampleRecipe = {
        header_1:"FOR THE PASTRY",
        ingredient_1: ["1 1/2 cups ALL PURPOSE FLOUR",
        "1/2 cups UNSALTED BUTTER, COLD & CUBED",
        "1 tsp SUGAR",
        "1 pinch SALT",
        '1 COLD EGG, BEATEN',
        "1 tablespoon COLD WATER",
        "8 tablespoons JAMS OR PRESERVES",
        "2 tablespoons MILK OR BEATEN EGG, FOR PASTY WASH",],
        header_2:"FOR THE TOPPING",
        ingredient_2: ["1 1/2 cups POWDERED SUGAR","2 tsp HOT WATER OR MILK"],
        
    } 
    console.log(exampleRecipe.ingredient_1)


    return (
        <ShowIngredients 
        header_1 = {exampleRecipe.header_1}
        ingredient_1 = {exampleRecipe.ingredient_1}
        header_2 = {exampleRecipe.header_2}
        ingredient_2 = {exampleRecipe.ingredient_2}
        />
        )
} 