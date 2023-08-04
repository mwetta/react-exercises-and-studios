import styles from "./Description.module.css";
import React from 'react';

export function RecipeAuthor() {
    let authorLink = "https://www.smittenkitchen.com";
    let authorPhoto = "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2006/06/deb-perelman-headshot-2017.jpg?w=640&ssl=1" ; 
    let authorName = "Deb Perelman";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
            <div>
               <h1>Recipe Title</h1>
               <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}

export default RecipeDescription;
