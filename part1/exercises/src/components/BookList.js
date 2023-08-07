export default function BookList() {
   let pageTitle = "List of My Recent Books";
   let book1 = "https://i1.wp.com/madelinewetta.com/wp/wp-content/uploads/2022/07/immortal-king-rao-vauhini-vara.jpeg?strip=info&w=300&ssl=1";
   let book2 = "https://i1.wp.com/madelinewetta.com/wp/wp-content/uploads/2022/07/improbable-magic-for-cynical-witches.jpeg?strip=info&w=300&ssl=1";
   let book3 = "https://i0.wp.com/madelinewetta.com/wp/wp-content/uploads/2022/07/the-lost-dreamer-lizz-huerta.jpeg?strip=info&w=300&ssl=1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Immortal King Rao" />
         <img src={book2} alt="Improbable Magic for Cynical Witches" />
         <img src={book3} alt="The Lost Dreamer" />
      </div>      
   );
}