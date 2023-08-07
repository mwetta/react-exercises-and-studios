import styles from './RecipeIngredients.module.css';

function RecipeListItem(props) {
    return props.map(ingredient => <li key={props.index}>{ingredient}</li>);
}

export default function RecipeIngredients() {
    const ingredients = ["1 cup all purpose flour", "1 teaspoon baking powder", "1 cup sugar", "1/2 cup butter", "2 large eggs", "12 smallish purple Italian plums, halved and pitted", "2 teaspoons fresh lemon juice", "1 teaspoon or tablespoon ground cinnamon"];

    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            {RecipeListItem(ingredients)}
        </ul>
     </div>
    );
}